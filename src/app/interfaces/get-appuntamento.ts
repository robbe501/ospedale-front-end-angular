import { Data } from "@angular/router"

export interface GetAppuntamento{
  appuntamentoId: number,
  stato: string,
  data: string,
  orario: string,
  prestazione: {
    prestazioneId: number,
    tipologia: string,
    medico: {
      medicoId: number,
      nome: string,
      cognome: string,
      email: string,
    }
  }
  paziente: {
    pazienteId: number
    codiceFiscale: string
  }
}
