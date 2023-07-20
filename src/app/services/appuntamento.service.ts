import { Injectable } from '@angular/core';
import { PostAppuntamento } from '../interfaces/post-appuntamento';
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AppuntamentoService {

  ENDPOINT: string = "http://79.23.160.125:8080/api/v1/";

  constructor() { }

  async post(cf: string, ricetta: string, data: string, orario: string, prestazioneId: number) {

    var postAppuntamento: PostAppuntamento = {
      codiceFiscale: cf,
      ricetta: ricetta,
      stato: "attesa",
      data: new Date(data),
      orario: orario + ":00",
      prestazioneId: prestazioneId
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

  async getById(id: number){
    const response = await fetch(`${this.ENDPOINT}appuntamenti/paziente/${id}`)
    const json = await response.json();
    return await json.reverse();
  }

}
