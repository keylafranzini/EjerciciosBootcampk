import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IHouse } from '../models/houses.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  private apiUrl = 'https://api.got.show/api/show/houses/';
  httpClient: any;

  constructor(private http$: HttpClient) { }
    getHouses(): Observable<any> {
      const observable: Observable<any> = this.http$.get(this.apiUrl);
      const observableOther: Observable<any> = observable.pipe(
        map(
          (data: Array<any>) => {
            const datosOther = [];
            // RECORRO EL DATA GUARDANDO SOLO LOS QUE TIENEN IMAGEN Y NOMBRE
            data.forEach((houses) => {
              if(houses.logoURL && houses.name) {
                datosOther.push(houses);
              }
            });
            return datosOther;
          }
        ),
      );
      return observableOther;
    }
}
