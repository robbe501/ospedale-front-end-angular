import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetRichiesta } from 'src/app/interfaces/get-richiesta';
import { LoggedUserDataService } from 'src/app/services/logged-user-data.service';
import { RichiestaService } from 'src/app/services/richiesta.service';
@Component({
  selector: 'app-richieste',
  templateUrl: './richieste.component.html',
  styleUrls: ['./richieste.component.css']
})
export class RichiesteComponent implements OnDestroy{

  getByPazienteId$!: Subscription;
  getByMedicoId$!: Subscription;
  get$!: Subscription;
  get2$!: Subscription;
  patch$!: Subscription;

  dataSource:GetRichiesta[] = [];
  displayedColumns: string[] = ['vecchiaData', 'vecchioOrario', 'nuovaData', 'nuovoOrario', 'stato']
  constructor(private richiestaService: RichiestaService, private lud : LoggedUserDataService) {
  }

  async ngOnInit() {
    if(this.lud.tipologiaUtenteLoggato == 'paziente'){
      this.displayedColumns = ['vecchiaData', 'vecchioOrario', 'nuovaData', 'nuovoOrario', 'stato']
      this.getByPazienteId$ = this.richiestaService.getByPazienteId(this.lud.utenteId).subscribe((data) => {
        this.dataSource = data;
      });
    }
    else if(this.lud.tipologiaUtenteLoggato == 'medico'){
      this.displayedColumns = ['vecchiaData', 'vecchioOrario', 'nuovaData', 'nuovoOrario', 'stato']
      this.getByMedicoId$ = this.richiestaService.getByMedicoId(this.lud.utenteId).subscribe((data) => {
        this.dataSource = data;
      });
    }
    else if(this.lud.tipologiaUtenteLoggato == 'dipendente'){
      this.displayedColumns = ['vecchiaData', 'vecchioOrario', 'nuovaData', 'nuovoOrario', 'stato', 'accetta', 'rifiuta']
      this.get$ = this.richiestaService.get().subscribe((data) => {
        this.dataSource = data;
      });
    }
  }

  richiesta(richiestaId: string, stato: boolean) {
    this.patch$ = this.richiestaService.patch(parseInt(richiestaId), stato).subscribe(() => {
      this.get2$ = this.richiestaService.get().subscribe((data) => {
        this.dataSource = data;
      });
    });

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
    if(this.get2$) {
      this.get2$.unsubscribe();
    }
    if(this.patch$) {
      this.patch$.unsubscribe();
    }
  }
}
