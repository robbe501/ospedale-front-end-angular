import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetAppuntamento } from 'src/app/interfaces/get-appuntamento';
import { AppuntamentoService } from 'src/app/services/appuntamento.service';
import { LoggedUserDataService } from 'src/app/services/logged-user-data.service';

@Component({
  selector: 'app-appuntamenti',
  templateUrl: './appuntamenti.component.html',
  styleUrls: ['./appuntamenti.component.css']
})
export class AppuntamentiComponent implements OnDestroy {
  displayedColumns: string[] = [];
  dataSource: GetAppuntamento[] = [];
  dataToFilter: GetAppuntamento[] = []

  getByPazienteId$!: Subscription;
  getByMedicoId$!: Subscription;
  get$!: Subscription;
  patch$!: Subscription;

  constructor(private appuntamentoService: AppuntamentoService, private lud: LoggedUserDataService) {
  }
  ngOnInit() {
    this.loadData();
  }

  loadData() {
    if(this.lud.tipologiaUtenteLoggato == 'paziente') {
      this.displayedColumns = ['tipologia', 'data', 'orario', 'medico', 'stato', 'richiesta'];
      this.getByPazienteId$ = this.appuntamentoService.getByPazienteId(this.lud.utenteId).subscribe((data) => {
        this.dataSource = data;
        this.dataToFilter = this.dataSource;
      });

    }
   else if (this.lud.tipologiaUtenteLoggato == 'medico') {
      this.displayedColumns = ['tipologia', 'data', 'orario', 'paziente', 'stato', 'richiesta', 'effettuato'];
      this.getByMedicoId$ = this.appuntamentoService.getByMedicoId(this.lud.utenteId).subscribe((data) => {
        this.dataSource = data;
        this.dataToFilter = this.dataSource;
      });

    }
    else if (this.lud.tipologiaUtenteLoggato == 'dipendente') {
      this.displayedColumns = ['tipologia', 'data', 'orario', 'medico', 'paziente', 'stato'];
      this.get$ = this.appuntamentoService.get().subscribe((data) => {
        this.dataSource = data;
        this.dataToFilter = this.dataSource;
      });

    }

  }

  getUser() {
    return this.lud.tipologiaUtenteLoggato;
  }

  cambiaStato(stato: 'Effettuato' | 'Prenotato', appuntamentoId: number) {
    this.patch$ = this.appuntamentoService.patch(stato, appuntamentoId).subscribe(() => {
      this.loadData()
    });

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

  ngOnDestroy() {
    if(this.getByPazienteId$) {
      this.getByPazienteId$.unsubscribe();
    }
    if(this.getByMedicoId$) {
      this.getByMedicoId$.unsubscribe();
    }
    if(this.get$) {
      this.get$.unsubscribe();
    }
    if(this.patch$) {
      this.patch$.unsubscribe();
    }
  }
}
