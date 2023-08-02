import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-form-insert-medico',
  templateUrl: './form-insert-medico.component.html',
  styleUrls: ['./form-insert-medico.component.css']
})
export class FormInsertMedicoComponent implements OnDestroy {

  post$!: Subscription;

  constructor(private medicoService:MedicoService, private router:Router){}

  inserisciMedico(name :string, lastName:string, email:string, abilitato:boolean){
      this.post$ = this.medicoService.post(name, lastName, email, abilitato).subscribe(() => {
        this.router.navigate(['/dipendenti/medici'])
      });
  }

  ngOnDestroy() {
    if(this.post$) {
      this.post$.unsubscribe();
    }
  }
}

