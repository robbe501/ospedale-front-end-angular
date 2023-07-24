import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppuntamentoService } from 'src/app/services/appuntamento.service';
import { LoggedUserDataService } from 'src/app/services/logged-user-data.service';

@Component({
  selector: 'app-form-appuntamento',
  templateUrl: './form-appuntamento.component.html',
  styleUrls: ['./form-appuntamento.component.css']
})
export class FormAppuntamentoComponent {
done = false;
error = false;
errorType: number = 0;

  constructor(private appuntamentoService: AppuntamentoService, private route: ActivatedRoute, private lud: LoggedUserDataService, private router: Router) {

  }

  async postAppuntamento(cf: string, ricetta: string, data: string, orario: string) {
    var result = await this.appuntamentoService.post(cf, ricetta, data, orario, parseInt(this.route.snapshot.paramMap.get('prestazioneId')!), this.lud.pazienteId)
    this.router.navigate(['/pazienti/appuntamenti'])

  }

}
