import { Injectable } from '@angular/core';
import { GetMedico } from '../interfaces/get-medico';
import { PatchMedico } from '../interfaces/patch-medico';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  ENDPOINT: string = "http://79.23.160.125:8080/api/v1/";

  constructor() { }

  async getAbilitati() {
    const response = await fetch(`${this.ENDPOINT}medici/abilitati`)
    const json = await response.json();
    return await json.reverse();
  }

  async get() {
    const response = await fetch(`${this.ENDPOINT}medici`)
    const json = await response.json();
    return await json.reverse();
  }

  async patch(medicoId: number, abilitato: boolean) {

    var patchMedico: PatchMedico = {
      medicoId: medicoId,
      abilitato: abilitato
    }


    const requestOptions: RequestInit = {
      method: 'PATCH',
      mode: "cors",
      body: JSON.stringify(patchMedico),
      headers: {
          "Content-Type": "application/json"
      }
    };

    const response = await fetch(`${this.ENDPOINT}medici`, requestOptions);
      if(response.ok) {
        const json = await response.json();
        return json;
      }
      return response.status
  }

}
