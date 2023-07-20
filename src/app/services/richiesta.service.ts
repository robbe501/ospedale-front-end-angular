import { Injectable } from '@angular/core';
import { PostRichiesta } from '../interfaces/post-richiesta';

@Injectable({
  providedIn: 'root'
})
export class RichiestaService {
  ENDPOINT: string = "http://79.23.160.125:8080/api/v1/";

  constructor() { }
  async post(nuovaData: string, nuovoOrario: string, pazienteId: number, medicoId: number, appuntamentoId:number) {

    var postRichiesta: PostRichiesta = {
      stato: "attesa",
      nuovaData: nuovaData,
      nuovoOrario: nuovoOrario + ':00',
      pazienteId:  pazienteId,
      medicoId: medicoId,
      appuntamentoId: appuntamentoId
    }


    const requestOptions: RequestInit = {
      method: 'POST',
      mode: "cors",
      body: JSON.stringify(postRichiesta),
      headers: {
          "Content-Type": "application/json"
      }
    };

    const response = await fetch(`${this.ENDPOINT}richieste`, requestOptions);
      if(response.ok) {
        const json = await response.json();
        return json;
      }
      return response.status
  }

}