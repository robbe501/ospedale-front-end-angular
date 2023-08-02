import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppuntamentoService } from 'src/app/services/appuntamento.service';
import { LoggedUserDataService } from 'src/app/services/logged-user-data.service';

@Component({
  selector: 'app-form-appuntamento',
  templateUrl: './form-appuntamento.component.html',
  styleUrls: ['./form-appuntamento.component.css']
})
export class FormAppuntamentoComponent implements OnDestroy{

  post$!: Subscription;

  constructor(private appuntamentoService: AppuntamentoService, private route: ActivatedRoute, private lud: LoggedUserDataService, private router: Router) {

  }

  postAppuntamento(cf: string, ricetta: string, data: string, orario: string) {
    this.post$ = this.appuntamentoService.post(cf, ricetta, data, orario, parseInt(this.route.snapshot.paramMap.get('prestazioneId')!), this.lud.utenteId).subscribe(() => {
      this.router.navigate(['/pazienti/appuntamenti']);
    });
  }

  ngOnDestroy() {
    if(this.post$) {
      this.post$.unsubscribe();
    }
  }

}
