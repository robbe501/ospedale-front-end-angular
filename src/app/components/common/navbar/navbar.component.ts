import { Component } from '@angular/core';
import { LoggedUserDataService } from 'src/app/services/logged-user-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private lud: LoggedUserDataService) {

  }

  isLoggedIn(){
    return this.lud.isLoggedIn();
  }

  logout() {
    this.lud.logout();
  }

}
