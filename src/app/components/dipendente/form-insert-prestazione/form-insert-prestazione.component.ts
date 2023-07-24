import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetMedico } from 'src/app/interfaces/get-medico';
import { LoggedUserDataService } from 'src/app/services/logged-user-data.service';
import { MedicoService } from 'src/app/services/medico.service';
import { PrestazioneService } from 'src/app/services/prestazione.service';

@Component({
  selector: 'app-form-insert-prestazione',
  templateUrl: './form-insert-prestazione.component.html',
  styleUrls: ['./form-insert-prestazione.component.css']
})
export class FormInsertPrestazioneComponent implements OnInit {

  medici: GetMedico[] = [];

  constructor(private lud: LoggedUserDataService, private medicoService: MedicoService, private prestazioneService: PrestazioneService, private router: Router) {

  }
  async ngOnInit() {
    this.medici = await this.medicoService.get();
    console.log(this.medici);
  }

  getUser() {
    return this.lud.tipologiaUtenteLoggato;
  }

  async inserisciPrestazione(tipologia: string, medicoId: string) {
    await this.prestazioneService.post(tipologia, parseInt(medicoId));
    this.router.navigate(['/dipendenti/prestazioni']);
  }
}
