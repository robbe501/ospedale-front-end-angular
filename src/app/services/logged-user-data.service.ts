import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedUserDataService {
  tipologiaUtenteLoggato = "paziente"
  utenteId = 1;
  constructor() { }

  hasRole(role: string): boolean {
    return role == this.tipologiaUtenteLoggato;
  }
}
