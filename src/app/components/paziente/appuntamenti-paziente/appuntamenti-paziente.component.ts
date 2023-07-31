import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetAppuntamento } from 'src/app/interfaces/get-appuntamento';
import { GetPrestazione } from 'src/app/interfaces/get-prestazione';
import { AppuntamentoService } from 'src/app/services/appuntamento.service';
import { LoggedUserDataService } from 'src/app/services/logged-user-data.service';
import { PrestazioneService } from 'src/app/services/prestazione.service';

@Component({
  selector: 'app-appuntamenti-paziente',
  templateUrl: './appuntamenti-paziente.component.html',
  styleUrls: ['./appuntamenti-paziente.component.css']
})
export class AppuntamentiPazienteComponent {

  displayedColumns: string[] = ['tipologia', 'data', 'orario', 'medico', 'richiesta'];
  dataSource: GetAppuntamento[] = [];

  constructor(private appuntamentoService: AppuntamentoService, private lud: LoggedUserDataService) {
  }
  async ngOnInit() {
    this.dataSource = await this.appuntamentoService.getByPazienteId(this.lud.utenteId);

  }


}
