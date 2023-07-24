import { Injectable } from '@angular/core';
import { PostRichiesta } from '../interfaces/post-richiesta';
import { PatchRichiesta } from '../interfaces/patch-richiesta';

@Injectable({
  providedIn: 'root'
})
export class RichiestaService {
  ENDPOINT: string = "http://localhost:8080/api/v1/";

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
  async getByPazienteId(pazienteId:number){
    const response = await fetch(`${this.ENDPOINT}richieste/paziente/${pazienteId}`);
    const json = await response.json();
    return json.reverse()
  }
  async getByMedicoId(medicoId:number){
    const response = await fetch(`${this.ENDPOINT}richieste/medico/${medicoId}`);
    const json = await response.json();
    return json.reverse()
  }
  async get(){
    const response = await fetch(`${this.ENDPOINT}richieste`);
    const json = await response.json();
    return json.reverse()
  }

  async patch(richiestaId: number, accetta: boolean) {

    var patchRichiesta: PatchRichiesta = {
      richiestaId: richiestaId,
      stato: accetta? "accettato" : "rifiutato"
    }


    const requestOptions: RequestInit = {
      method: 'PATCH',
      mode: "cors",
      body: JSON.stringify(patchRichiesta),
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
