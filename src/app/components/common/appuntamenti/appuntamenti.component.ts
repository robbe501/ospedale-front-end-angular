import { Component } from '@angular/core';
import { GetAppuntamento } from 'src/app/interfaces/get-appuntamento';
import { AppuntamentoService } from 'src/app/services/appuntamento.service';
import { LoggedUserDataService } from 'src/app/services/logged-user-data.service';

@Component({
  selector: 'app-appuntamenti',
  templateUrl: './appuntamenti.component.html',
  styleUrls: ['./appuntamenti.component.css']
})
export class AppuntamentiComponent {
  displayedColumns: string[] = []
  dataSource: GetAppuntamento[] = [];
  dataToFilter: GetAppuntamento[] = []

  constructor(private appuntamentoService: AppuntamentoService, private loggedUserData: LoggedUserDataService) {
  }
  async ngOnInit() {
    this.loadData();
  }

  async loadData() {
    if(this.loggedUserData.tipologiaUtenteLoggato == 'paziente') {
      this.dataSource = await this.appuntamentoService.getByPazienteId(this.loggedUserData.pazienteId);
      this.displayedColumns = ['tipologia', 'data', 'orario', 'medico', 'stato', 'richiesta'];
    }
    else if (this.loggedUserData.tipologiaUtenteLoggato == 'medico') {
      this.dataSource = await this.appuntamentoService.getByMedicoId(this.loggedUserData.medicoId);
      this.displayedColumns = ['tipologia', 'data', 'orario', 'paziente', 'stato', 'richiesta', 'effettuato'];
    }
    this.dataToFilter = this.dataSource;
  }

  getUser() {
    return this.loggedUserData.tipologiaUtenteLoggato;
  }

  async cambiaStato(stato: 'Effettuato' | 'Prenotato', appuntamentoId: number) {
    await this.appuntamentoService.patch(stato, appuntamentoId);
    this.loadData();
  }

  filtraData(data: string) {
    try {
      var dataFiltro = new Date(data).toISOString().slice(0, 10);
      this.dataToFilter = this.dataSource.filter(appuntamento => appuntamento.data == dataFiltro);
    } catch (error) {
      this.dataToFilter = this.dataSource
    }
  }
}
