import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedUserDataService {
  tipologiaUtenteLoggato = "paziente"
  pazienteId = 1;
  medicoId = 1;
  constructor() { }
}
