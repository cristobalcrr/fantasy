import { Component, ElementRef, OnInit } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  map: GoogleMap | null = null;
  apiKey = 'AIzaSyCReSQ5ziR978cWX4phKXs3s9lZNIz9dhQ';
  latitude = 33.6;
  longitude = -117.9;

  async ngOnInit() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      this.latitude = coordinates.coords.latitude;
      this.longitude = coordinates.coords.longitude;

      const mapRef = document.getElementById('map');
      if (mapRef) {
        this.createMap(mapRef);
      } else {
        console.error('Elemento de mapa no encontrado.');
      }
    } catch (error) {
      console.error('Error al obtener la ubicación actual: ', error);
      const mapRef = document.getElementById('map');
      if (mapRef) {
        this.createMap(mapRef);
      } else {
        console.error('Elemento de mapa no encontrado.');
      }
    }
  }

  async createMap(mapRef: HTMLElement) {
    this.map = await GoogleMap.create({
      id: 'my-map',
      element: mapRef,
      apiKey: this.apiKey,
      config: {
        center: {
          lat: this.latitude,
          lng: this.longitude,
        },
        zoom: 8,
      },
    });

    // Agregar un marcador al mapa
    this.addMarker();
  }

  async addMarker() {
    if (this.map) {
      // Coordenadas para el marcador (ejemplo)
      const markerLatitude = 33.7;
      const markerLongitude = -117.8;
      const markerTitle = 'Mi marcador';

      await this.map.addMarker({
        coordinate: {
          lat: markerLatitude,
          lng: markerLongitude,
        },
        title: markerTitle,
      });
    }
  }
}
