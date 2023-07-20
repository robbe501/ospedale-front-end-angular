import { Component } from '@angular/core';
import { LoggedUserDataService } from 'src/app/services/logged-user-data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  items = ["Prestazioni", "Appuntamenti", "Richieste"];

  dati = [
    {
      nome: "",
      route: ""
    }
  ]
  datiPaziente = [
        {
          nome: "Prestazioni",
          route: "pazienti/prestazioni"
        },
        {
          nome: "Appuntamenti",
          route: "pazienti/appuntamenti"
        },
        {
          nome: "Richieste",
          route: "pazienti/richieste"
        },
      ]

  datiMedico = [
        {
          nome: "Appuntamenti",
          route: "medici/appuntamenti"
        },
        {
          nome: "Richieste",
          route: "medici/richieste"
        },
      ]

      constructor(private lud: LoggedUserDataService) {
        if(this.lud.tipologiaUtenteLoggato == "paziente") {
          this.dati = this.datiPaziente;
        }
        else if (this.lud.tipologiaUtenteLoggato == "medico") {
          this.dati = this.datiMedico;
        }

      }
}
