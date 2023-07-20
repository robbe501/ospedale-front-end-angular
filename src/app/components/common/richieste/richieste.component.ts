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
  constructor(private richiestaService: RichiestaService, private lus : LoggedUserDataService) {
  }

  async ngOnInit() {
    if(this.lus.tipologiaUtenteLoggato == 'paziente'){
    this.dataSource = await this.richiestaService.getByPazienteId(this.lus.pazienteId);
    console.log(this.dataSource)}
    else if(this.lus.tipologiaUtenteLoggato == 'medico'){
      this.dataSource = await this.richiestaService.getByMedicoId(this.lus.medicoId)
    }
  }
}
