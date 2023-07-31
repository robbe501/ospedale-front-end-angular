import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppuntamentiComponent } from 'src/app/components/common/appuntamenti/appuntamenti.component';
import { PrestazioniComponent } from 'src/app/components/common/prestazioni/prestazioni.component';
import { RichiesteComponent } from 'src/app/components/common/richieste/richieste.component';
import { FormInsertMedicoComponent } from 'src/app/components/dipendente/form-insert-medico/form-insert-medico.component';
import { FormInsertPrestazioneComponent } from 'src/app/components/dipendente/form-insert-prestazione/form-insert-prestazione.component';
import { FormPatchPrestazioneComponent } from 'src/app/components/dipendente/form-patch-prestazione/form-patch-prestazione.component';
import { MediciComponent } from 'src/app/components/dipendente/medici/medici.component';


const routes: Routes = [
  { path: 'appuntamenti', component: AppuntamentiComponent},
  { path: 'prestazioni', component: PrestazioniComponent},
  { path: 'prestazioni/inserisci', component: FormInsertPrestazioneComponent},
  { path: 'prestazioni/modifica/:prestazioneId', component: FormPatchPrestazioneComponent},
  { path: 'medici', component: MediciComponent},
  { path: 'richieste', component: RichiesteComponent},
  { path: 'medici/inserisci', component: FormInsertMedicoComponent},
]


@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class DipendenteModule { }
