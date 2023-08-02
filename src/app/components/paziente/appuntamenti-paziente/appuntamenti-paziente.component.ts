import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetAppuntamento } from 'src/app/interfaces/get-appuntamento';
import { AppuntamentoService } from 'src/app/services/appuntamento.service';
import { LoggedUserDataService } from 'src/app/services/logged-user-data.service';

@Component({
  selector: 'app-appuntamenti-paziente',
  templateUrl: './appuntamenti-paziente.component.html',
  styleUrls: ['./appuntamenti-paziente.component.css']
})
export class AppuntamentiPazienteComponent implements OnDestroy {

  getByPazienteId$!: Subscription;

  displayedColumns: string[] = ['tipologia', 'data', 'orario', 'medico', 'richiesta'];
  dataSource: GetAppuntamento[] = [];

  constructor(private appuntamentoService: AppuntamentoService, private lud: LoggedUserDataService) {
  }
  ngOnInit() {
    this.getByPazienteId$ = this.appuntamentoService.getByPazienteId(this.lud.utenteId).subscribe((data) => {
      this.dataSource = data;
    });

  }

  ngOnDestroy() {
    if(this.getByPazienteId$) {
      this.getByPazienteId$.unsubscribe();
    }
  }
}
