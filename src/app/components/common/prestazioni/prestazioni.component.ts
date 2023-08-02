import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetPrestazione } from 'src/app/interfaces/get-prestazione';
import { LoggedUserDataService } from 'src/app/services/logged-user-data.service';
import { PrestazioneService } from '../../../services/prestazione.service';



@Component({
  selector: 'app-prestazioni',
  templateUrl: './prestazioni.component.html',
  styleUrls: ['./prestazioni.component.css']
})
export class PrestazioniComponent implements OnInit, OnDestroy{

  get$!: Subscription;

  displayedColumns: string[] = ['medico', 'tipologia', 'prenota'];
  dataSource: GetPrestazione[] = [];

  constructor(private prestazioneService: PrestazioneService, private lud: LoggedUserDataService) {
  }
  async ngOnInit() {
    this.get$ = this.prestazioneService.get().subscribe((data) => {
      this.dataSource = data;
    });

    if(this.lud.tipologiaUtenteLoggato == 'paziente'){
      this.displayedColumns = ['medico', 'tipologia', 'prenota'];
    } else if(this.lud.tipologiaUtenteLoggato == 'dipendente') {
      this.displayedColumns = ['medico', 'tipologia', 'modifica'];
    }
  }

  getUser() {
    return this.lud.tipologiaUtenteLoggato;
  }

  ngOnDestroy() {
    if(this.get$) {
      this.get$.unsubscribe();
    }
  }
}
