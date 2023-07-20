import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedUserDataService {
  tipologiaUtenteLoggato = "paziente"
  pazienteId = 2;
  medicoId=1;
  constructor() { }
}
