import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppuntamentiComponent } from 'src/app/components/common/appuntamenti/appuntamenti.component';
import { FormRichiestaComponent } from 'src/app/components/common/form-richiesta/form-richiesta.component';
import { PrestazioniComponent } from 'src/app/components/common/prestazioni/prestazioni.component';
import { RichiesteComponent } from 'src/app/components/common/richieste/richieste.component';
import { FormAppuntamentoComponent } from 'src/app/components/paziente/form-appuntamento/form-appuntamento.component';

const routes: Routes = [
  { path: 'prestazioni', component: PrestazioniComponent},
  { path: 'prestazioni/:prestazioneId', component: FormAppuntamentoComponent},
  { path: 'appuntamenti', component: AppuntamentiComponent},
  { path: 'appuntamenti/modifica/:appuntamentoId', component: FormRichiestaComponent},
  { path: 'richieste', component: RichiesteComponent},
]


@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PazienteModule { }
