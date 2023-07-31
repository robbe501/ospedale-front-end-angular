import { EventEmitter, Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoggedUserDataService {

  tipologiaUtenteLoggato = ""
  utenteId = -1;

  @Output()
  logged = new EventEmitter<string>();

  constructor(private cookies: CookieService, private router: Router){
    this.checkCookies();
  }

  hasRole(role: string): boolean {
    return role == this.tipologiaUtenteLoggato;
  }

  checkCookies() {
    if(this.cookies.get('role') != null){
      this.tipologiaUtenteLoggato = this.cookies.get('role');
    }
    if (this.cookies.get('id') != null) {
      this.utenteId = parseInt(this.cookies.get('id'));
    }
  }

  isLoggedIn(){
    return this.tipologiaUtenteLoggato == 'paziente' || this.tipologiaUtenteLoggato == 'medico' || this.tipologiaUtenteLoggato == 'dipendente';
  }

  login(id: number, role: string) {
    this.cookies.delete;
    this.cookies.set('id', id.toString());
    this.cookies.set('role', role);
    this.checkCookies();
    this.logged.emit(this.tipologiaUtenteLoggato);
  }

  logout() {
    this.cookies.deleteAll();
    this.tipologiaUtenteLoggato = "";
    this.utenteId = -1;
    this.logged.emit(this.tipologiaUtenteLoggato);
  }
}
