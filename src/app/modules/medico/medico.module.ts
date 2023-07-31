import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppuntamentiComponent } from 'src/app/components/common/appuntamenti/appuntamenti.component';
import { FormRichiestaComponent } from 'src/app/components/common/form-richiesta/form-richiesta.component';
import { RichiesteComponent } from 'src/app/components/common/richieste/richieste.component';


const routes: Routes = [
  { path: 'appuntamenti', component: AppuntamentiComponent},
  { path: 'richieste', component: RichiesteComponent},
  { path: 'appuntamenti/modifica/:appuntamentoId', component: FormRichiestaComponent},
]


@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class MedicoModule { }
