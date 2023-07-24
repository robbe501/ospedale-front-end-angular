import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrestazioniComponent } from './components/common/prestazioni/prestazioni.component';
import { PazienteHomeComponent } from './components/paziente/paziente-home/paziente-home.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { FormAppuntamentoComponent } from './components/paziente/form-appuntamento/form-appuntamento.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppuntamentiPazienteComponent } from './components/paziente/appuntamenti-paziente/appuntamenti-paziente.component';
import { FormRichiestaComponent } from './components/common/form-richiesta/form-richiesta.component';
import { AppuntamentiComponent } from './components/common/appuntamenti/appuntamenti.component';
import { RichiesteComponent } from './components/common/richieste/richieste.component';
import { FormPrestazioneComponent } from './components/dipendente/form-prestazione/form-prestazione.component';
import { MediciComponent } from './components/dipendente/medici/medici.component';
import { HomeComponent } from './components/common/home/home.component';
import { FormInsertMedicoComponent } from './components/dipendente/form-insert-medico/form-insert-medico.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PrestazioniComponent,
    PazienteHomeComponent,
    FormAppuntamentoComponent,
    AppuntamentiPazienteComponent,
    FormRichiestaComponent,
    AppuntamentiComponent,
    RichiesteComponent,
    FormPrestazioneComponent,
    MediciComponent,
    HomeComponent,
    FormInsertMedicoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
