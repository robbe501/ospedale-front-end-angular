import { Time } from "@angular/common";

export interface PostAppuntamento {
  codiceFiscale: string,
  ricetta: string,
  stato: string,
  data: Date,
  orario: string,
  prestazioneId: number,
  pazienteId: number
}
