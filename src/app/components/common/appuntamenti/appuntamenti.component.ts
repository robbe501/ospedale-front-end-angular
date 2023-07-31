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
  displayedColumns: string[] = [];
  dataSource: GetAppuntamento[] = [];
  dataToFilter: GetAppuntamento[] = []

  constructor(private appuntamentoService: AppuntamentoService, private lud: LoggedUserDataService) {
  }
  async ngOnInit() {
    this.loadData();
  }

  async loadData() {
    if(this.lud.tipologiaUtenteLoggato == 'paziente') {
      this.displayedColumns = ['tipologia', 'data', 'orario', 'medico', 'stato', 'richiesta'];
      this.dataSource = await this.appuntamentoService.getByPazienteId(this.lud.utenteId);

    }
    else if (this.lud.tipologiaUtenteLoggato == 'medico') {
      this.displayedColumns = ['tipologia', 'data', 'orario', 'paziente', 'stato', 'richiesta', 'effettuato'];
      this.dataSource = await this.appuntamentoService.getByMedicoId(this.lud.utenteId);

    }
    else if (this.lud.tipologiaUtenteLoggato == 'dipendente') {
      this.displayedColumns = ['tipologia', 'data', 'orario', 'medico', 'paziente', 'stato'];
      this.dataSource = await this.appuntamentoService.get();

    }
    this.dataToFilter = this.dataSource;
  }

  getUser() {
    return this.lud.tipologiaUtenteLoggato;
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

  controllaData(data: string) {
    return new Date(data) >= new Date()
  }
}
