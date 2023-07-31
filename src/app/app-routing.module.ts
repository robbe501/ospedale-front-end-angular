import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isAuth } from './auth.guard';
import { HomeComponent } from './components/common/home/home.component';
import { DipendenteHomeComponent } from './components/dipendente/dipendente-home/dipendente-home.component';
import { MedicoHomeComponent } from './components/medico/medico-home/medico-home.component';
import { PazienteHomeComponent } from './components/paziente/paziente-home/paziente-home.component';


const routes: Routes = [
  { path: 'pazienti', canActivate: [isAuth('paziente')], component: PazienteHomeComponent, loadChildren: () => import("./modules/paziente/paziente.module").then(m => m.PazienteModule)},
  { path: 'medici', canActivate: [isAuth('medico')], component: MedicoHomeComponent, loadChildren: () => import("./modules/medico/medico.module").then(m => m.MedicoModule)},
  { path: 'dipendenti', canActivate: [isAuth('dipendente')], component: DipendenteHomeComponent, loadChildren: () => import("./modules/dipendente/dipendente.module").then(m => m.DipendenteModule)},
  { path: '', component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
