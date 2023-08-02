import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetMedico } from '../interfaces/get-medico';
import { PatchMedico } from '../interfaces/patch-medico';
import { PostMedico } from '../interfaces/post-medico';
@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  ENDPOINT: string = "http://localhost:8080/api/v1/";

  constructor(private http: HttpClient) { }

  getAbilitati() {
    return this.http.get<GetMedico[]>(`${this.ENDPOINT}medici/abilitati`);
  }

  get() {
    return this.http.get<GetMedico[]>(`${this.ENDPOINT}medici`);
  }

  patch(medicoId: number, abilitato: boolean) {

    var patchMedico: PatchMedico = {
      medicoId: medicoId,
      abilitato: abilitato
    }

    return this.http.patch<PatchMedico>(`${this.ENDPOINT}medici`, patchMedico);
  }

  delete(medicoId: number) {
    return this.http.delete(`${this.ENDPOINT}medici/${medicoId}`);
  }

  post(name:string, lastName: string, email:string, abilitato: boolean) {

    var postMedico: PostMedico = {
      nome: name,
      cognome: lastName,
      email:email,
      abilitato: abilitato
    }

    return this.http.post<PostMedico>(`${this.ENDPOINT}medici`, postMedico);
  }

}
