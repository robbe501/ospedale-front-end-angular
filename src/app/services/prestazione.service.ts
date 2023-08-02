import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetPrestazione } from '../interfaces/get-prestazione';
import { PatchPrestazione } from '../interfaces/patch-prestazione';
import { PostPrestazione } from '../interfaces/post-prestazione';

@Injectable({
  providedIn: 'root'
})
export class PrestazioneService {

  ENDPOINT: string = "http://localhost:8080/api/v1/";

  constructor(private http: HttpClient) { }

  get(){
    return this.http.get<GetPrestazione[]>(`${this.ENDPOINT}prestazioni`);
  }

  patch(prestazioneId: number, medicoId: number) {

    var patchPrestazione: PatchPrestazione = {
      prestazioneId: prestazioneId,
      medicoId: medicoId
    }

    return this.http.patch<PatchPrestazione>(`${this.ENDPOINT}prestazioni`, patchPrestazione);
  }

  post(tipologia: string, medicoId: number) {

    var postPrestazione: PostPrestazione = {
      tipologia: tipologia,
      medicoId: medicoId
    }

    return this.http.post<PostPrestazione>(`${this.ENDPOINT}prestazioni`, postPrestazione);
  }
}
