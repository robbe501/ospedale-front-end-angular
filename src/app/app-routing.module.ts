import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrestazioniPazienteComponent } from './components/paziente/prestazioni-paziente/prestazioni-paziente.component';
import { PazienteHomeComponent } from './components/paziente/paziente-home/paziente-home.component';
import { FormAppuntamentoComponent } from './components/paziente/form-appuntamento/form-appuntamento.component';
import { AppuntamentiPazienteComponent } from './components/paziente/appuntamenti-paziente/appuntamenti-paziente.component';
import { FormRichiestaComponent } from './components/paziente/form-richiesta/form-richiesta.component';
import { RichiesteComponent } from './components/common/richieste/richieste.component';

const routes: Routes = [
  { path: 'pazienti', component: PazienteHomeComponent },
  { path: 'pazienti/prestazioni', component: PrestazioniPazienteComponent},
  { path: 'pazienti/prestazioni/:prestazioneId', component: FormAppuntamentoComponent},
  { path: 'pazienti/appuntamenti', component: AppuntamentiPazienteComponent},
  { path: 'pazienti/appuntamenti/modifica/:appuntamentoId', component: FormRichiestaComponent},
  { path: 'pazienti/richieste', component: RichiesteComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
