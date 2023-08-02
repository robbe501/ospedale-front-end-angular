import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetAppuntamento } from '../interfaces/get-appuntamento';
import { PatchAppuntamento } from '../interfaces/patch-appuntamento';
import { PostAppuntamento } from '../interfaces/post-appuntamento';

@Injectable({
  providedIn: 'root'
})
export class AppuntamentoService {

  ENDPOINT: string = "http://localhost:8080/api/v1/";

  constructor(private http: HttpClient) { }

  post(cf: string, ricetta: string, data: string, orario: string, prestazioneId: number, pazienteId: number) {

    var postAppuntamento: PostAppuntamento = {
      codiceFiscale: cf,
      ricetta: ricetta,
      stato: "Attesa",
      data: new Date(data),
      orario: orario + ":00",
      prestazioneId: prestazioneId,
      pazienteId: pazienteId
    }

    return this.http.post<PostAppuntamento>(`${this.ENDPOINT}appuntamenti`, postAppuntamento);


  }

  getByPazienteId(pazienteId: number){
    return this.http.get<GetAppuntamento[]>(`${this.ENDPOINT}appuntamenti/paziente/${pazienteId}`);
  }

  getByMedicoId(medicoId: number){
    return this.http.get<GetAppuntamento[]>(`${this.ENDPOINT}appuntamenti/medico/${medicoId}`);
  }

  get(){
    return this.http.get<GetAppuntamento[]>(`${this.ENDPOINT}appuntamenti`);
  }

  patch(stato: 'Effettuato' | 'Prenotato', appuntamentoId: number) {

    var patchAppuntamento: PatchAppuntamento = {
      appuntamentoId: appuntamentoId,
      stato: stato
    }

    return this.http.patch<PatchAppuntamento>(`${this.ENDPOINT}appuntamenti`, patchAppuntamento);
  }


}
