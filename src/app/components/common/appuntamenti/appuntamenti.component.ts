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
  displayedColumns: string[] = ['tipologia', 'data', 'orario', 'richiesta'];
  dataSource: GetAppuntamento[] = [];

  constructor(private appuntamentoService: AppuntamentoService, private loggedUserData: LoggedUserDataService) {
  }
  async ngOnInit() {
    if(this.loggedUserData.tipologiaUtenteLoggato == 'paziente') {
      this.dataSource = await this.appuntamentoService.getByPazienteId(this.loggedUserData.pazienteId);
      this.displayedColumns.push('medico')
    }
    else if (this.loggedUserData.tipologiaUtenteLoggato == 'medico') {
      this.dataSource = await this.appuntamentoService.getByMedicoId(this.loggedUserData.medicoId);
      this.displayedColumns.push('paziente')
    }
  }

  getUser() {
    return this.loggedUserData.tipologiaUtenteLoggato;
  }


}
