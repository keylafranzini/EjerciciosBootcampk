import { Component, OnInit } from '@angular/core';
import { IUser, UserService } from '../core/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public users: IUser[] = [];

  constructor(private user$: UserService) {
  }

  ngOnInit() {

    this.user$.getUsers().subscribe(users => {
      this.users = users;
    });

  }

  showAddress(user: IUser) {
    user.showAddress = !user.showAddress;
  }

  showCompany(user: IUser) {
    user.showCompany = !user.showCompany;
  }
}
