import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GetMedico } from 'src/app/interfaces/get-medico';
import { LoggedUserDataService } from 'src/app/services/logged-user-data.service';
import { MedicoService } from 'src/app/services/medico.service';
import { PrestazioneService } from 'src/app/services/prestazione.service';

@Component({
  selector: 'app-form-insert-prestazione',
  templateUrl: './form-insert-prestazione.component.html',
  styleUrls: ['./form-insert-prestazione.component.css']
})
export class FormInsertPrestazioneComponent implements OnInit, OnDestroy {

  medici: GetMedico[] = [];

  post$!: Subscription;

  constructor(private lud: LoggedUserDataService, private medicoService: MedicoService, private prestazioneService: PrestazioneService, private router: Router) {

  }
  async ngOnInit() {
    this.medicoService.get().subscribe((data) => {
      this.medici = data;
    });
    console.log(this.medici);
  }

  getUser() {
    return this.lud.tipologiaUtenteLoggato;
  }

  inserisciPrestazione(tipologia: string, medicoId: string) {
    this.post$ = this.prestazioneService.post(tipologia, parseInt(medicoId)).subscribe(() => {
      this.router.navigate(['/dipendenti/prestazioni']);
    });
  }

  ngOnDestroy() {
    if(this.post$) {
      this.post$.unsubscribe();
    }
  }
}
