import { Injectable } from '@angular/core';
import { GetMedico } from '../interfaces/get-medico';
import { PatchMedico } from '../interfaces/patch-medico';
import { PostMedico } from '../interfaces/post-medico';
@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  ENDPOINT: string = "http://87.20.32.143:8080/api/v1/";

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

  async delete(medicoId: number) {
    const requestOptions: RequestInit = {
      method: 'DELETE',
      mode: "cors",
      body: JSON.stringify("{}"),
      headers: {
          "Content-Type": "application/json"
      }
    };

    const response = await fetch(`${this.ENDPOINT}medici/${medicoId}`, requestOptions);
      if(response.ok) {
        const json = await response.json();
        return json;
      }
      return response.status
  }

  async post(name:string, lastName: string, email:string, abilitato: boolean) {

    var postMedico: PostMedico = {
      nome: name,
      cognome: lastName,
      email:email,
      abilitato: abilitato
    }


    const requestOptions: RequestInit = {
      method: 'POST',
      mode: "cors",
      body: JSON.stringify(postMedico),
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
