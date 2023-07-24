import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrestazioniComponent } from './components/common/prestazioni/prestazioni.component';
import { PazienteHomeComponent } from './components/paziente/paziente-home/paziente-home.component';
import { FormAppuntamentoComponent } from './components/paziente/form-appuntamento/form-appuntamento.component';
import { FormRichiestaComponent } from './components/common/form-richiesta/form-richiesta.component';
import { AppuntamentiComponent } from './components/common/appuntamenti/appuntamenti.component';
import { RichiesteComponent } from './components/common/richieste/richieste.component';
import { FormPatchPrestazioneComponent } from './components/dipendente/form-patch-prestazione/form-patch-prestazione.component';
import { MediciComponent } from './components/dipendente/medici/medici.component';
import { HomeComponent } from './components/common/home/home.component';
import { FormInsertPrestazioneComponent } from './components/dipendente/form-insert-prestazione/form-insert-prestazione.component';
import { FormInsertMedicoComponent } from './components/dipendente/form-insert-medico/form-insert-medico.component';


const routes: Routes = [
  { path: 'pazienti', component: PazienteHomeComponent },
  { path: 'pazienti/prestazioni', component: PrestazioniComponent},
  { path: 'pazienti/prestazioni/:prestazioneId', component: FormAppuntamentoComponent},
  { path: 'pazienti/appuntamenti', component: AppuntamentiComponent},
  { path: 'pazienti/appuntamenti/modifica/:appuntamentoId', component: FormRichiestaComponent},
  { path: 'pazienti/richieste', component: RichiesteComponent},
  { path: 'medici/appuntamenti', component: AppuntamentiComponent},
  { path: 'medici/richieste', component: RichiesteComponent},
  { path: 'medici/appuntamenti/modifica/:appuntamentoId', component: FormRichiestaComponent},
  { path: 'dipendenti/appuntamenti', component: AppuntamentiComponent},
  { path: 'dipendenti/prestazioni', component: PrestazioniComponent},
  { path: 'dipendenti/prestazioni/inserisci', component: FormInsertPrestazioneComponent},
  { path: 'dipendenti/prestazioni/modifica/:prestazioneId', component: FormPatchPrestazioneComponent},
  { path: 'dipendenti/medici', component: MediciComponent},
  { path: 'dipendenti/richieste', component: RichiesteComponent},
  { path: 'dipendenti/medici/inserisci', component: FormInsertMedicoComponent},
  { path: '', component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
