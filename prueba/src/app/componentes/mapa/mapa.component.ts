import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  private map!: L.Map;

  private costeraCoords: L.LatLngTuple[] = [
    [38.89, -0.92],
    [38.92, -0.72],
    [39.02, -0.63],
    [39.02, -0.63],
    [38.98, -0.40],
    [38.87, -0.64],
    [38.77, -0.88],
  ];

  ubicaciones = [
    {
      nombre: 'Montesa',
      descripcion: 'Montesa',
      latitud: 38.9167,
      longitud: -0.6667,
    },
    {
      nombre: 'Foto Xàtiva',
      descripcion: 'Foto Xàtiva',
      latitud: 38.9906,
      longitud: -0.5186,
    },
    {
      nombre: 'Xàtiva',
      descripcion: 'Xàtiva',
      latitud: 38.9906,
      longitud: -0.5186,
    },
    {
      nombre: 'Foto Vallés',
      descripcion: 'Foto Vallés',
      latitud: 38.9833,
      longitud: -0.5833,
    },
    {
      nombre: 'Vallés',
      descripcion: 'Vallés',
      latitud: 38.9833,
      longitud: -0.5833,
    },
    {
      nombre: 'Cartel Vallada',
      descripcion: 'Cartel Vallada',
      latitud: 38.9,
      longitud: -0.7,
    },
    {
      nombre: 'Vallada',
      descripcion: 'Vallada',
      latitud: 38.9,
      longitud: -0.7,
    },
    {
      nombre: 'Cartel Torrella',
      descripcion: 'Cartel Torrella',
      latitud: 38.9667,
      longitud: -0.5667,
    },
    {
      nombre: 'Torrella',
      descripcion: 'Torrella',
      latitud: 38.9667,
      longitud: -0.5667,
    },
    {
      nombre: 'Cartel Rotglà i Corberà',
      descripcion: 'Cartel Rotglà i Corberà',
      latitud: 39.0039,
      longitud: -0.5653,
    },
    {
      nombre: 'Rotglà i Corberà',
      descripcion: 'Rotglà i Corberà',
      latitud: 39.0039,
      longitud: -0.5653,
    },
    {
      nombre: 'Cartel Novetlè',
      descripcion: 'Cartel Novetlè',
      latitud: 38.9889,
      longitud: -0.55,
    },
    {
      nombre: 'Novetlè',
      descripcion: 'Novetlè',
      latitud: 38.9889,
      longitud: -0.55,
    },
    {
      nombre: 'Moixent',
      descripcion: 'Moixent',
      latitud: 38.8667,
      longitud: -0.7667,
    },
    {
      nombre: 'Llosa de Ranes',
      descripcion: 'Llosa de Ranes',
      latitud: 38.9833,
      longitud: -0.55,
    },
    {
      nombre: "Lloc Nou d'En Fenollet",
      descripcion: "Lloc Nou d'En Fenollet",
      latitud: 38.9667,
      longitud: -0.55,
    },
    {
      nombre: 'Llanera de Ranes',
      descripcion: 'Llanera de Ranes',
      latitud: 38.9667,
      longitud: -0.5667,
    },
    {
      nombre: 'La Granja de la Costera',
      descripcion: 'La Granja de la Costera',
      latitud: 38.9833,
      longitud: -0.5667,
    },
    {
      nombre: "L'Alcúdia de Crespins",
      descripcion: "L'Alcúdia de Crespins",
      latitud: 38.9833,
      longitud: -0.6,
    },
    {
      nombre: 'La Font de la Figuera',
      descripcion: 'La Font de la Figuera',
      latitud: 38.8167,
      longitud: -0.8667,
    },
    {
      nombre: 'El Genovés',
      descripcion: 'El Genovés',
      latitud: 38.9833,
      longitud: -0.5333,
    },
    {
      nombre: 'Enguera',
      descripcion: 'Enguera',
      latitud: 38.8667,
      longitud: -0.6833,
    },
    {
      nombre: 'Cerdà',
      descripcion: 'Cerdà',
      latitud: 38.9833,
      longitud: -0.5667,
    },
    {
      nombre: 'Barxeta',
      descripcion: 'Barxeta',
      latitud: 39.0167,
      longitud: -0.4167,
    },
  ];

  ngOnInit(): void {
    this.initMap();
    this.addMarkers();
    this.resaltarCostera();
  }

  private initMap(): void {
    this.map = L.map('map').setView([38.925, -0.6719], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  }

  private addMarkers(): void {
    this.ubicaciones.forEach(ubi => {
      L.marker([ubi.latitud, ubi.longitud])
        .addTo(this.map)
        .bindPopup(`<b>${ubi.nombre}</b><br>${ubi.descripcion}`);
    });
  }

  private resaltarCostera(): void {
    const poligono = L.polygon(this.costeraCoords, {
      color: 'red',
      fillColor: 'orange', 
      fillOpacity: 0.1
    }).addTo(this.map);

    this.map.fitBounds(poligono.getBounds());
  }
}
