import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { GetMedico } from 'src/app/interfaces/get-medico';
import { GetPrestazione } from 'src/app/interfaces/get-prestazione';
import { MedicoService } from 'src/app/services/medico.service';
import { PrestazioneService } from 'src/app/services/prestazione.service';

@Component({
  selector: 'app-form-prestazione',
  templateUrl: './form-prestazione.component.html',
  styleUrls: ['./form-prestazione.component.css']
})
export class FormPrestazioneComponent implements OnInit{
  prestazioni: GetPrestazione[] = [];
  medici: GetMedico[] = [];

  constructor(private prestazioneService: PrestazioneService, private route: ActivatedRoute, private router: Router, private medicoService: MedicoService) {

  }

  async ngOnInit() {
    this.medici = await this.medicoService.getAbilitati();
  }

  patchMedico(medicoId: string) {
    this.prestazioneService.patch(parseInt(this.route.snapshot.paramMap.get('prestazioneId')!), parseInt(medicoId));
    this.router.navigate(['/dipendenti/prestazioni']);
  }


}
