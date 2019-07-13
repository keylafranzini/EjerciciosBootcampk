import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface IGeo {
  lat: number;
  lng: number;
}

interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
  showAddress?: boolean;
  showCompany?: boolean;
}

@Injectable()
export class UserService {

  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http$: HttpClient) {
  }

  getUsers(): Observable<IUser[]> {
    return this.http$.get<IUser[]>(this.url);
  }

  getUser(id) {
    return this.http$.get(this.url + '/' + id);
  }

  createUser(user) {
    return this.http$.post(this.url, user);
  }

  updateUser(user) {
    return this.http$.put(this.url + '/' + user.id, user);
  }

  deleteUSer(id) {
    return this.http$.delete(this.url + '/' + id);
  }
}
