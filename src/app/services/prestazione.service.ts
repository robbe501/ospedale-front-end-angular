import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrestazioneService {

  ENDPOINT: string = "http://localhost:8080/api/v1/";

  constructor() { }

  async get(){
    const response = await fetch(`${this.ENDPOINT}prestazioni`)
    const json = await response.json();
    return await json.reverse();
  }
}
