import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICharacter, ICharacterDetail } from '../models/characters.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private apiUrl = 'https://api.got.show/api/show/characters/';

  constructor(private http$: HttpClient) { }

    getCharacters(): Observable<ICharacter[]> {
      return this.http$.get<ICharacter[]>(this.apiUrl);
    }

    getCharactersDetail(name: string): Observable<ICharacterDetail> {
      return this.http$.get<ICharacterDetail>(this.apiUrl + name);
    }
}
