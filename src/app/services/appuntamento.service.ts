import { Injectable } from '@angular/core';
import { PostAppuntamento } from '../interfaces/post-appuntamento';
import { Time } from '@angular/common';
import { PatchAppuntamento } from '../interfaces/patch-appuntamento';

@Injectable({
  providedIn: 'root'
})
export class AppuntamentoService {

  ENDPOINT: string = "http://87.20.32.143:8080/api/v1/";

  constructor() { }

  async post(cf: string, ricetta: string, data: string, orario: string, prestazioneId: number, pazienteId: number) {

    var postAppuntamento: PostAppuntamento = {
      codiceFiscale: cf,
      ricetta: ricetta,
      stato: "attesa",
      data: new Date(data),
      orario: orario + ":00",
      prestazioneId: prestazioneId,
      pazienteId: pazienteId
    }

    const requestOptions: RequestInit = {
      method: 'POST',
      mode: "cors",
      body: JSON.stringify(postAppuntamento),
      headers: {
          "Content-Type": "application/json"
      }
    };

    const response = await fetch(`${this.ENDPOINT}appuntamenti`, requestOptions);
      if(response.ok) {
        const json = await response.json();
        return json;
      }
      return response.status
  }

  async getByPazienteId(pazienteId: number){
    const response = await fetch(`${this.ENDPOINT}appuntamenti/paziente/${pazienteId}`)
    const json = await response.json();
    return await json.reverse();
  }

  async getByMedicoId(medicoId: number){
    const response = await fetch(`${this.ENDPOINT}appuntamenti/medico/${medicoId}`)
    const json = await response.json();
    return await json.reverse();
  }

  async patch(stato: 'Effettuato' | 'Prenotato', appuntamentoId: number) {

    var patchAppuntamento: PatchAppuntamento = {
      appuntamentoId: appuntamentoId,
      stato: stato
    }


    const requestOptions: RequestInit = {
      method: 'PATCH',
      mode: "cors",
      body: JSON.stringify(patchAppuntamento),
      headers: {
          "Content-Type": "application/json"
      }
    };

    const response = await fetch(`${this.ENDPOINT}appuntamenti`, requestOptions);
      if(response.ok) {
        const json = await response.json();
        return json;
      }
      return response.status
  }


}
