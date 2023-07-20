import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private richiestaService:RichiestaService, private route: ActivatedRoute, private loggedUser:LoggedUserDataService) {
    this.appuntamentoId = parseInt(this.route.snapshot.paramMap.get("appuntamentoId")!);
    this.pazienteId = this.loggedUser.pazienteId
    this.medicoId =parseInt(this.route.snapshot.queryParamMap.get("medicoId")!)
  }

  async postRichiesta(newDate: string, newTime: string) {
    var result = await this.richiestaService.post(newDate, newTime, this.pazienteId, this.medicoId, this.appuntamentoId)

    /* if(typeof result == "number"){
      this.done = true
      this.error = true
      this.errorType = result
    }
    else
      this.done = true;
*/
  } 

}
