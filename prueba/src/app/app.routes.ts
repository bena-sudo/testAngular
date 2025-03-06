import { Routes } from '@angular/router';
import { MapaComponent } from './componentes/mapa/mapa.component';
import { IdomasComponent } from './componentes/idomas/idomas.component';

export const routes: Routes = [
  { path: '', component: MapaComponent },
  { path: 'idioma', component: IdomasComponent },
];
