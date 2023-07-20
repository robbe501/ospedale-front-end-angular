import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrestazioniPazienteComponent } from './components/paziente/prestazioni-paziente/prestazioni-paziente.component';
import { PazienteHomeComponent } from './components/paziente/paziente-home/paziente-home.component';
import { FormAppuntamentoComponent } from './components/paziente/form-appuntamento/form-appuntamento.component';
import { AppuntamentiPazienteComponent } from './components/paziente/appuntamenti-paziente/appuntamenti-paziente.component';
import { FormRichiestaComponent } from './components/common/form-richiesta/form-richiesta.component';
import { AppuntamentiComponent } from './components/common/appuntamenti/appuntamenti.component';
import { RichiesteComponent } from './components/common/richieste/richieste.component';

const routes: Routes = [
  { path: 'pazienti', component: PazienteHomeComponent },
  { path: 'pazienti/prestazioni', component: PrestazioniPazienteComponent},
  { path: 'pazienti/prestazioni/:prestazioneId', component: FormAppuntamentoComponent},
  { path: 'pazienti/appuntamenti', component: AppuntamentiComponent},
  { path: 'pazienti/appuntamenti/modifica/:appuntamentoId', component: FormRichiestaComponent},
  { path: 'pazienti/richieste', component: RichiesteComponent},
  { path: 'medici/appuntamenti', component: AppuntamentiComponent},
  { path: 'medici/richieste', component: RichiesteComponent},
  { path: 'medici/appuntamenti/modifica/:appuntamentoId', component: FormRichiestaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
