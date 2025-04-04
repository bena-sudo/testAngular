import { Routes } from '@angular/router';
import { MapaComponent } from './componentes/mapa/mapa.component';
import { IdomasComponent } from './componentes/idomas/idomas.component';
import { BoostrapComponent } from './componentes/boostrap/boostrap.component';

export const routes: Routes = [
  { path: '', component: MapaComponent },
  { path: 'idioma', component: IdomasComponent },
  { path: 'boostrap', component: BoostrapComponent },
];

// apuntes: https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-angular-app-with-ngx-translate#install-standalone
// npm install @ngx-translate/core @ngx-translate/http-loader @colsen1991/ngx-translate-extract-marker
