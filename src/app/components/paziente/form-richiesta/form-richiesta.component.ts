import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-richiesta',
  templateUrl: './form-richiesta.component.html',
  styleUrls: ['./form-richiesta.component.css']
})
export class FormRichiestaComponent {
  toPrint: string = "";
  constructor(private route: ActivatedRoute) {
    this.toPrint = this.route.snapshot.paramMap.get('appuntamentoId')!;
  }

}
