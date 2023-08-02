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

  ngOnInit() {
    this.medicoService.get().subscribe((data) => {
      this.dataSource = data;
    });
  }

  cambiaAbilitato(medicoId: string, abilitato: EventTarget) {
    this.medicoService.patch(parseInt(medicoId), (abilitato as HTMLInputElement).checked).subscribe();
  }

  licenzia(medicoId: string) {
    this.medicoService.delete(parseInt(medicoId)).subscribe(() => {
      this.medicoService.get().subscribe((data) => {
        this.dataSource = data;
      });
    });

  }
}
