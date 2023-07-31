import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggedUserDataService } from 'src/app/services/logged-user-data.service';
import { RichiestaService } from 'src/app/services/richiesta.service';

@Component({
  selector: 'app-form-richiesta',
  templateUrl: './form-richiesta.component.html',
  styleUrls: ['./form-richiesta.component.css']
})
export class FormRichiestaComponent {
  pazienteId!:number
  appuntamentoId!:number;
  medicoId!:number;
  constructor(private richiestaService:RichiestaService, private route: ActivatedRoute, private lud:LoggedUserDataService, private router: Router) {
    this.appuntamentoId = parseInt(this.route.snapshot.paramMap.get("appuntamentoId")!);
    if(lud.tipologiaUtenteLoggato == 'paziente') {
      this.pazienteId = this.lud.utenteId
      this.medicoId = parseInt(this.route.snapshot.queryParamMap.get("medicoId")!)
    } else if (lud.tipologiaUtenteLoggato == 'medico') {
      this.medicoId = this.lud.utenteId
      this.pazienteId = parseInt(this.route.snapshot.queryParamMap.get("pazienteId")!)

    }
  }

  async postRichiesta(newDate: string, newTime: string) {
    var result = await this.richiestaService.post(newDate, newTime, this.pazienteId, this.medicoId, this.appuntamentoId)
    if(this.lud.tipologiaUtenteLoggato == 'paziente') {
      this.router.navigate(['/pazienti/richieste']);
    } else if (this.lud.tipologiaUtenteLoggato == 'medico') {
      this.router.navigate(['/medici/richieste']);

    }
  }

}
