import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GetMedico } from 'src/app/interfaces/get-medico';
import { GetPrestazione } from 'src/app/interfaces/get-prestazione';
import { MedicoService } from 'src/app/services/medico.service';
import { PrestazioneService } from 'src/app/services/prestazione.service';

@Component({
  selector: 'app-form-patch-prestazione',
  templateUrl: './form-patch-prestazione.component.html',
  styleUrls: ['./form-patch-prestazione.component.css']
})
export class FormPatchPrestazioneComponent implements OnInit, OnDestroy{
  prestazioni: GetPrestazione[] = [];
  medici: GetMedico[] = [];

  getAbilitati$!: Subscription;
  patch$!: Subscription;

  constructor(private prestazioneService: PrestazioneService, private route: ActivatedRoute, private router: Router, private medicoService: MedicoService) {

  }

  ngOnInit() {
    this.getAbilitati$ = this.medicoService.getAbilitati().subscribe((data) => {
      this.medici = data;
    });
  }

  patchMedico(medicoId: string) {
    this.patch$ = this.prestazioneService.patch(parseInt(this.route.snapshot.paramMap.get('prestazioneId')!), parseInt(medicoId)).subscribe(() => {
      this.router.navigate(['/dipendenti/prestazioni']);
    });

  }

  ngOnDestroy() {
    if (this.getAbilitati$) {
      this.getAbilitati$.unsubscribe();
    }
    if(this.patch$) {
      this.patch$.unsubscribe();
    }
  }

}
