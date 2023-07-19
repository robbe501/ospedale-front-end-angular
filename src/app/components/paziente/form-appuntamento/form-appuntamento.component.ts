import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppuntamentoService } from 'src/app/services/appuntamento.service';

@Component({
  selector: 'app-form-appuntamento',
  templateUrl: './form-appuntamento.component.html',
  styleUrls: ['./form-appuntamento.component.css']
})
export class FormAppuntamentoComponent {
done = false;
error = false;
errorType: number = 0;

  constructor(private appuntamentoService: AppuntamentoService, private route: ActivatedRoute) {

  }

  async postAppuntamento(cf: string, ricetta: string, data: string, orario: string) {
    var result = await this.appuntamentoService.post(cf, ricetta, data, orario, parseInt(this.route.snapshot.paramMap.get('prestazioneId')!))

    if(typeof result == "number"){
      this.done = true
      this.error = true
      this.errorType = result
    }
    else
      this.done = true;

  }

}
