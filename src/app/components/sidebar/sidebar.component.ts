import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  items = ["Prestazioni", "Appuntamenti", "Richieste"];

  dati = [
    {
      user: "paziente",
      info: [
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
    }
  ]
}
