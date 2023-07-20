import { Component } from '@angular/core';
import { LoggedUserDataService } from './services/logged-user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '07-angular-ospedale';

  constructor(private lud: LoggedUserDataService) {

  }

  changeUser(user: string) {
    this.lud.tipologiaUtenteLoggato = user;
  }
}
