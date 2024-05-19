import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { location, pin } from 'ionicons/icons';
import { NgIf } from "@angular/common";

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Geolocation } from "@capacitor/geolocation"

import { GoogleMap, Marker } from "@capacitor/google-maps";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonButton, NgIf],
})
export class DeliveryComponent {

  @ViewChild('map')
  mapRef!: ElementRef<HTMLElement>;
  newMap!: GoogleMap;

  lugar: string = "";

  latitud: number = 0;
  longitud: number = 0;
  constructor() {
    addIcons({ location, pin });
    const printCurrentPosition = async () => {
      const coordinates = await Geolocation.getCurrentPosition();
    
      console.log('Current position:', coordinates);
    };
    // this.obtenerPosicion();
  }

  async obtenerPosicion(){
    await Geolocation.getCurrentPosition().then((data) => {
      this.latitud = data.coords.latitude;
      this.longitud = data.coords.longitude;
      console.log(data);
    })
    // this.createMap();
  }

  async createMap() {
    this.newMap = await GoogleMap.create({
      id: 'my-cool-map',
      element: this.mapRef.nativeElement,
      apiKey: environment.apiKey,
      config: {
        center: {
          lat: this.latitud,
          lng: this.longitud,
        },
        zoom: 15,
      },
    });
    this.agregarMarcador();
  }

  async agregarMarcador(){
    const marcador: Marker = {
      coordinate: {
        lat: this.latitud,
        lng: this.longitud,
      },
      draggable: true
    }
    await this.newMap.addMarker(marcador);

    this.newMap.setOnMarkerClickListener(async (marcador) => {
      this.lugar = `https://www.google.es/maps?q=${marcador.latitude},${marcador.longitude}`;
      console.log(marcador);
    })
  }


}
