import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { location, pin } from 'ionicons/icons';
import { NgIf } from "@angular/common";

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Geolocation } from "@capacitor/geolocation"

import { GoogleMap, Marker } from "@capacitor/google-maps";
import { environment } from 'src/environments/environment';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonButton, NgIf],
})
export class DeliveryComponent implements OnInit {

  @ViewChild('map')
  mapRef!: ElementRef<HTMLElement>;
  newMap!: GoogleMap;

  lugar: string = "";

  posicion: boolean = false

  latitud: number = 0;
  longitud: number = 0;
  constructor(public alertController: AlertController) {
    addIcons({ location, pin });
  
    // this.obtenerPosicion();
  }

  ngOnInit(): void {
    
    this.mostrarAlert() 
  }  

  async mostrarAlert() {
    const alert = await this.alertController.create({
      header: 'Bienvenido al servicio de GPS',
      message: 'Por favor indique su ubicacion en el boton de' + ' "Detectar Ubicación"',
      buttons: ['OK'],
    });

    await alert.present();
  }




  async obtenerPosicion(){
    this.posicion = true
    await Geolocation.getCurrentPosition().then((data) => {
      this.latitud = data.coords.latitude;
      this.longitud = data.coords.longitude;
      console.log(data);
    })
    this.createMap();
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

      let confirmLugar = confirm('Esta es su ubicacion exacta?')

      if (confirmLugar) {
        this.presentAlert(marcador.latitude, marcador.longitude)
        console.log(`Latitud exacta: ${marcador.latitude}, Longitud exacta: ${marcador.longitude}`)
        
      }
      // this.lugar = `https://www.google.es/maps?q=${marcador.latitude},${marcador.longitude}`;
      // console.log(marcador);
    })
  }

  async presentAlert(lat:any, long:any) {
    const alert = await this.alertController.create({
      header: 'Su ubicacion exacta es',
      // subHeader: 'A Sub Header Is Optional',
      message: `Latitud: ${lat}, Longitud: ${long}`,
      buttons: ['OK'],
    });

    await alert.present();
  }


}
