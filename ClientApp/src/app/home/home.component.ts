import { Component } from '@angular/core';
import { AuthorizeService } from 'src/api-authorization/authorize.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent {
  loggedIn = false;
  constructor(private authorize: AuthorizeService) {
    if (this.authorize.isAuthenticated()) { this.loggedIn = true; }
   }

}
