import { Component, OnInit } from '@angular/core';
import { PrestazioneService } from '../../../services/prestazione.service';
import { GetPrestazione } from 'src/app/interfaces/get-prestazione';



@Component({
  selector: 'app-prestazioni-paziente',
  templateUrl: './prestazioni-paziente.component.html',
  styleUrls: ['./prestazioni-paziente.component.css']
})
export class PrestazioniPazienteComponent implements OnInit{



  displayedColumns: string[] = ['medico', 'tipologia', 'prenota'];
  dataSource: GetPrestazione[] = [];

  constructor(private prestazioneService: PrestazioneService) {
  }
  async ngOnInit() {
    this.dataSource = await this.prestazioneService.get();
    console.log(this.dataSource)

  }


}
