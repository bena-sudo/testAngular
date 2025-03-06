import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapaComponent } from "./componentes/mapa/mapa.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MapaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prueba';
}
