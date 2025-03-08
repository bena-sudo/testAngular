import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
})
export class MapaComponent implements OnInit {
  private map!: L.Map;

  private costeraCoords: L.LatLngTuple[] = [
    [38.89, -0.92],
    [38.92, -0.72],
    [39.02, -0.63],
    [39.02, -0.63],
    [38.98, -0.4],
    [38.87, -0.64],
    [38.77, -0.88],
  ];

  ubicaciones = [
    {
      id: 1,
      cantidad: 25,
      ubicacion: 'Parque de la Paz',
      municipio: 'Xàtiva',
      latitud: 38.9896,
      longitud: -0.5183,
    },
    {
      id: 2,
      cantidad: 18,
      ubicacion: 'Avenida Selgas',
      municipio: 'Canals',
      latitud: 38.9625,
      longitud: -0.5866,
    },
    {
      id: 3,
      cantidad: 30,
      ubicacion: 'Zona Industrial',
      municipio: "L'Alcúdia de Crespins",
      latitud: 38.9602,
      longitud: -0.5875,
    },
    {
      id: 4,
      cantidad: 22,
      ubicacion: 'Calle Mayor',
      municipio: 'Moixent',
      latitud: 38.8941,
      longitud: -0.7619,
    },
    {
      id: 5,
      cantidad: 15,
      ubicacion: 'Barrio del Carmen',
      municipio: 'La Llosa de Ranes',
      latitud: 38.9937,
      longitud: -0.5374,
    },
    {
      id: 6,
      cantidad: 27,
      ubicacion: 'Plaza del Mercado',
      municipio: 'Genovés',
      latitud: 38.9874,
      longitud: -0.5078,
    },
    {
      id: 7,
      cantidad: 35,
      ubicacion: 'Parque de la Ermita',
      municipio: 'Montesa',
      latitud: 38.8992,
      longitud: -0.6881,
    },
    {
      id: 8,
      cantidad: 20,
      ubicacion: 'Centro Histórico',
      municipio: 'Rotglà i Corberà',
      latitud: 38.9665,
      longitud: -0.5763,
    },
    {
      id: 9,
      cantidad: 23,
      ubicacion: 'Paseo del Cid',
      municipio: "Llocnou d'En Fenollet",
      latitud: 38.9871,
      longitud: -0.5432,
    },
    {
      id: 10,
      cantidad: 19,
      ubicacion: 'Boulevard Principal',
      municipio: 'Vallada',
      latitud: 38.8894,
      longitud: -0.7701,
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
    this.ubicaciones.forEach((ubi) => {
      L.marker([ubi.latitud, ubi.longitud])
        .addTo(this.map)
        .bindPopup(`<b>${ubi.municipio}</b><br>${ubi.ubicacion}`);
    });
  }

  private resaltarCostera(): void {
    const poligono = L.polygon(this.costeraCoords, {
      color: 'red',
      fillColor: 'orange',
      fillOpacity: 0.1,
    }).addTo(this.map);

    this.map.fitBounds(poligono.getBounds());
  }
}
