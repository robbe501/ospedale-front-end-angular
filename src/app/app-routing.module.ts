import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrestazioniPazienteComponent } from './components/paziente/prestazioni-paziente/prestazioni-paziente.component';
import { PazienteHomeComponent } from './components/paziente/paziente-home/paziente-home.component';

const routes: Routes = [
  { path: 'pazienti', component: PazienteHomeComponent },
  { path: 'pazienti/prestazioni', component: PrestazioniPazienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
