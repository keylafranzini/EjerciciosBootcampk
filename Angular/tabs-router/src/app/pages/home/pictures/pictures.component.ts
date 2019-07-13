import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';


@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {

  constructor(private user$: UserService) { 
    console.log(UserService);
  }

  ngOnInit() {
    this.user$.users[3].name = 'TEST';
  }

}
