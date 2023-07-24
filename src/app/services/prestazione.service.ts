import { Injectable } from '@angular/core';
import { PatchPrestazione } from '../interfaces/patch-prestazione';

@Injectable({
  providedIn: 'root'
})
export class PrestazioneService {

  ENDPOINT: string = "http://87.20.32.143:8080/api/v1/";

  constructor() { }

  async get(){
    const response = await fetch(`${this.ENDPOINT}prestazioni`)
    const json = await response.json();
    return await json.reverse();
  }

  async patch(prestazioneId: number, medicoId: number) {

    var patchPrestazione: PatchPrestazione = {
      prestazioneId: prestazioneId,
      medicoId: medicoId
    }


    const requestOptions: RequestInit = {
      method: 'PATCH',
      mode: "cors",
      body: JSON.stringify(patchPrestazione),
      headers: {
          "Content-Type": "application/json"
      }
    };

    const response = await fetch(`${this.ENDPOINT}prestazioni`, requestOptions);
      if(response.ok) {
        const json = await response.json();
        return json;
      }
      return response.status
  }
}
