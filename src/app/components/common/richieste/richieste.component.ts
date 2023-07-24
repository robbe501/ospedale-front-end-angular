import { Component } from '@angular/core';
import { GetRichiesta } from 'src/app/interfaces/get-richiesta';
import { RichiestaService } from 'src/app/services/richiesta.service';
import { LoggedUserDataService } from 'src/app/services/logged-user-data.service';
@Component({
  selector: 'app-richieste',
  templateUrl: './richieste.component.html',
  styleUrls: ['./richieste.component.css']
})
export class RichiesteComponent {
  dataSource:GetRichiesta[] = [];
  displayedColumns: string[] = ['vecchiaData', 'vecchioOrario', 'nuovaData', 'nuovoOrario', 'stato']
  constructor(private richiestaService: RichiestaService, private lud : LoggedUserDataService) {
  }

  async ngOnInit() {
    if(this.lud.tipologiaUtenteLoggato == 'paziente'){
      this.displayedColumns = ['vecchiaData', 'vecchioOrario', 'nuovaData', 'nuovoOrario', 'stato']
      this.dataSource = await this.richiestaService.getByPazienteId(this.lud.pazienteId);
    }
    else if(this.lud.tipologiaUtenteLoggato == 'medico'){
      this.displayedColumns = ['vecchiaData', 'vecchioOrario', 'nuovaData', 'nuovoOrario', 'stato']
      this.dataSource = await this.richiestaService.getByMedicoId(this.lud.medicoId);
    }
    else if(this.lud.tipologiaUtenteLoggato == 'dipendente'){
      this.displayedColumns = ['vecchiaData', 'vecchioOrario', 'nuovaData', 'nuovoOrario', 'stato', 'accetta', 'rifiuta']
      this.dataSource = await this.richiestaService.get();
    }
  }

  async richiesta(richiestaId: string, stato: boolean) {
    await this.richiestaService.patch(parseInt(richiestaId), stato)
    this.dataSource = await this.richiestaService.get();
  }
}
