import { Component, OnInit } from '@angular/core';
import { PrestazioneService } from '../../../services/prestazione.service';
import { GetPrestazione } from 'src/app/interfaces/get-prestazione';
import { LoggedUserDataService } from 'src/app/services/logged-user-data.service';



@Component({
  selector: 'app-prestazioni',
  templateUrl: './prestazioni.component.html',
  styleUrls: ['./prestazioni.component.css']
})
export class PrestazioniComponent implements OnInit{



  displayedColumns: string[] = ['medico', 'tipologia', 'prenota'];
  dataSource: GetPrestazione[] = [];

  constructor(private prestazioneService: PrestazioneService, private lud: LoggedUserDataService) {
  }
  async ngOnInit() {
    this.dataSource = await this.prestazioneService.get();
    console.log(this.dataSource)

    if(this.lud.tipologiaUtenteLoggato == 'paziente'){
      this.displayedColumns = ['medico', 'tipologia', 'prenota'];
    } else if(this.lud.tipologiaUtenteLoggato == 'dipendente') {
      this.displayedColumns = ['medico', 'tipologia', 'modifica'];
    }


  }
}
