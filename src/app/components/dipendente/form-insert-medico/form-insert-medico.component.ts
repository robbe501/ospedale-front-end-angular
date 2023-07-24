import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-form-insert-medico',
  templateUrl: './form-insert-medico.component.html',
  styleUrls: ['./form-insert-medico.component.css']
})
export class FormInsertMedicoComponent {

  constructor(private medico:MedicoService, private router:Router){}
  async inserisciMedico(name :string, lastName:string, email:string, abilitato:boolean){
    
      var result = await this.medico.post(name, lastName, email, abilitato)
      this.router.navigate(['/dipendenti/medici'])
  }
}

