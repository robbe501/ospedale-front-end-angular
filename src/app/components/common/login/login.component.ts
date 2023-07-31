import { Component } from '@angular/core';
import { LoggedUserDataService } from 'src/app/services/logged-user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor( private lud: LoggedUserDataService) {

  }

  login(id: string, role: string) {
    this.lud.login(parseInt(id), role);
  }
}
