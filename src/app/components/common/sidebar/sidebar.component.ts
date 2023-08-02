import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedUserDataService } from 'src/app/services/logged-user-data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{
  @Input()
  user = "paziente";
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

    datidDipendente = [
        {
          nome: "Prestazioni",
          route: "dipendenti/prestazioni"
        },
        {
          nome: "Appuntamenti",
          route: "dipendenti/appuntamenti"
        },
        {
          nome: "Richieste",
          route: "dipendenti/richieste"
        },
        {
          nome: "Medici",
          route: "dipendenti/medici"
        },
      ]

      constructor(private lud: LoggedUserDataService, private router: Router) {
        if(this.lud.tipologiaUtenteLoggato == "paziente") {
          this.dati = this.datiPaziente;
        }
        else if (this.lud.tipologiaUtenteLoggato == "medico") {
          this.dati = this.datiMedico;
        }
        else if (this.lud.tipologiaUtenteLoggato == "dipendente") {
          this.dati = this.datidDipendente;
        }
        this.lud.logged.subscribe((data: string) => {
          if(data == "paziente") {
            this.dati = this.datiPaziente;
            this.router.navigate(['']);
          }
          else if (data == "medico") {
            this.dati = this.datiMedico;
            this.router.navigate(['']);
          }
          else if (data == "dipendente") {
            this.dati = this.datidDipendente;
            this.router.navigate(['']);
          }
          else {
            this.dati = [];
            this.router.navigate(['']);
          }
        });

      }

      /*ngOnChanges() {
        if(this.lud.tipologiaUtenteLoggato == "paziente") {
          this.dati = this.datiPaziente;
          //this.router.navigate(['']);
        }
        else if (this.lud.tipologiaUtenteLoggato == "medico") {
          this.dati = this.datiMedico;
          //this.router.navigate(['']);
        }
        else if (this.lud.tipologiaUtenteLoggato == "dipendente") {
          this.dati = this.datidDipendente;
          //this.router.navigate(['']);
        }
      }*/
}
