import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetRichiesta } from '../interfaces/get-richiesta';
import { PatchRichiesta } from '../interfaces/patch-richiesta';
import { PostRichiesta } from '../interfaces/post-richiesta';

@Injectable({
  providedIn: 'root'
})
export class RichiestaService {
  ENDPOINT: string = "http://localhost:8080/api/v1/";

  constructor(private http: HttpClient) { }

  post(nuovaData: string, nuovoOrario: string, pazienteId: number, medicoId: number, appuntamentoId:number) {

    var postRichiesta: PostRichiesta = {
      stato: "attesa",
      nuovaData: nuovaData,
      nuovoOrario: nuovoOrario + ':00',
      pazienteId:  pazienteId,
      medicoId: medicoId,
      appuntamentoId: appuntamentoId
    }
    return this.http.post<PostRichiesta>(`${this.ENDPOINT}richieste`, postRichiesta);
  }
  getByPazienteId(pazienteId:number){
    return this.http.get<GetRichiesta[]>(`${this.ENDPOINT}richieste/paziente/${pazienteId}`);
  }
  getByMedicoId(medicoId:number){
    return this.http.get<GetRichiesta[]>(`${this.ENDPOINT}richieste/medico/${medicoId}`);
  }
  get(){
    return this.http.get<GetRichiesta[]>(`${this.ENDPOINT}richieste`);
  }

  patch(richiestaId: number, accetta: boolean) {

    var patchRichiesta: PatchRichiesta = {
      richiestaId: richiestaId,
      stato: accetta? "accettato" : "rifiutato"
    }

    return this.http.patch<PatchRichiesta>(`${this.ENDPOINT}richieste`, patchRichiesta);
  }
}
