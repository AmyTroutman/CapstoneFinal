import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from 'src/api-authorization/authorize.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent {
  public isAuthenticated: Observable<boolean>;

  constructor(private authorizeService: AuthorizeService) {   }

   ngOnInit() {
    this.isAuthenticated = this.authorizeService.isAuthenticated();
  }

}
