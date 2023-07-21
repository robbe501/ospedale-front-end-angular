import { Component } from '@angular/core';
import { GetMedico } from 'src/app/interfaces/get-medico';
import { LoggedUserDataService } from 'src/app/services/logged-user-data.service';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-medici',
  templateUrl: './medici.component.html',
  styleUrls: ['./medici.component.css']
})
export class MediciComponent {


  displayedColumns: string[] = ['nome', 'cognome', 'email', 'abilitato', 'licenzia'];
  dataSource: GetMedico[] = [];

  constructor(private medicoService: MedicoService) {
  }

  async ngOnInit() {
    this.dataSource = await this.medicoService.get();
    console.log(this.dataSource);
  }

  async cambiaAbilitato(medicoId: string, abilitato: EventTarget) {
    await this.medicoService.patch(parseInt(medicoId), (abilitato as HTMLInputElement).checked);
  }
}
