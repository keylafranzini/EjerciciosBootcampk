import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public paises = ["Espana", "Italia", "Francia", "Portugal", "Alemania", "UK"];
  title = 'prueba-input';

  public responderClick(datos: Date){
    alert("Alguien ha pulsado un botón. Fecha: " + datos);
  }
}
