import { Component } from '@angular/core';
import { LoggedUserDataService } from 'src/app/services/logged-user-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tipoUtente: string = "";
  idUtente: number = -1;

  constructor(private lud: LoggedUserDataService) {
    if(lud.tipologiaUtenteLoggato == "paziente"){
      this.tipoUtente = "paziente";
      this.idUtente = lud.utenteId;
    }
    else if(lud.tipologiaUtenteLoggato == "medico"){
          this.tipoUtente = "medico";
          this.idUtente = lud.utenteId;
    }
    else if(lud.tipologiaUtenteLoggato == "dipendente"){
              this.tipoUtente = "dipendente";
              this.idUtente = 0;
    }
  }

}
