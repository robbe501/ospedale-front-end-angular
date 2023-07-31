import { Component } from '@angular/core';
import { GetMedico } from 'src/app/interfaces/get-medico';
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
  }

  async cambiaAbilitato(medicoId: string, abilitato: EventTarget) {
    await this.medicoService.patch(parseInt(medicoId), (abilitato as HTMLInputElement).checked);
  }

  async licenzia(medicoId: string) {
    try {
      await this.medicoService.delete(parseInt(medicoId));
    } catch (error) {
    }
    this.dataSource = await this.medicoService.get();
  }
}
