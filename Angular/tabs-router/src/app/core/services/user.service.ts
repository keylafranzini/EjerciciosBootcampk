import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor(private test: UserService) {
    private users: any[] = [
      {name: 'Jesus'},
      {name: 'Julio'},
      {name: 'Marilyn'},
      {name: 'Akemi'},
      {name: 'David'},
      {name: 'Paula'},
      {name: 'Keyla'},
    ];
   }

  getUser(index){
    return this.users[index];
  }
}
