import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppuntamentiComponent } from './components/common/appuntamenti/appuntamenti.component';
import { FormRichiestaComponent } from './components/common/form-richiesta/form-richiesta.component';
import { HomeComponent } from './components/common/home/home.component';
import { LoginComponent } from './components/common/login/login.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { PrestazioniComponent } from './components/common/prestazioni/prestazioni.component';
import { RichiesteComponent } from './components/common/richieste/richieste.component';
import { SidebarComponent } from './components/common/sidebar/sidebar.component';
import { DipendenteHomeComponent } from './components/dipendente/dipendente-home/dipendente-home.component';
import { FormInsertMedicoComponent } from './components/dipendente/form-insert-medico/form-insert-medico.component';
import { FormInsertPrestazioneComponent } from './components/dipendente/form-insert-prestazione/form-insert-prestazione.component';
import { FormPatchPrestazioneComponent } from './components/dipendente/form-patch-prestazione/form-patch-prestazione.component';
import { MediciComponent } from './components/dipendente/medici/medici.component';
import { MedicoHomeComponent } from './components/medico/medico-home/medico-home.component';
import { AppuntamentiPazienteComponent } from './components/paziente/appuntamenti-paziente/appuntamenti-paziente.component';
import { FormAppuntamentoComponent } from './components/paziente/form-appuntamento/form-appuntamento.component';
import { PazienteHomeComponent } from './components/paziente/paziente-home/paziente-home.component';

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
    FormPatchPrestazioneComponent,
    MediciComponent,
    HomeComponent,
    FormInsertPrestazioneComponent,
    FormInsertMedicoComponent,
    DipendenteHomeComponent,
    MedicoHomeComponent,
    LoginComponent,
    NavbarComponent,
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
    MatSelectModule,
    MatCheckboxModule,
    HttpClientModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
