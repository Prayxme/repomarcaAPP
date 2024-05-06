import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonToast, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square } from 'ionicons/icons';
import { Router } from "@angular/router";
import { Flashlight } from "@awesome-cordova-plugins/flashlight/ngx";
import { Network } from '@capacitor/network';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonButton, IonToast, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
  providers:[Flashlight]
})
export class HomePage {
  
  isToastOpen = false;
  alertMsg = ''

  constructor(public router: Router, private flashlight: Flashlight){
    addIcons({triangle})
    Network.addListener('networkStatusChange', status => {
      console.log(`Network status: ${status.connected}, Tipo de Conexion: ${status.connectionType}`);
      this.alertMsg = `Network status: ${status.connected}, Tipo de Conexion: ${status.connectionType}`
      this.isToastOpen = true;
      this.blinkLinterna()
    });
    
  }
  
  networkStatus = async () => {
    const status = await Network.getStatus();
  
    console.log(`Network status: ${status.connected}, Tipo de Conexion: ${status.connectionType}`);
    this.alertMsg = `Network status: ${status.connected}, Tipo de Conexion: ${status.connectionType}`
    this.isToastOpen = true;

  };

  openLinterna(){
    this.flashlight.toggle()
  }

  blinkLinterna(){
    this.flashlight.toggle();
    setTimeout(() => {
      this.flashlight.toggle();
    }, 500);
    setTimeout(() => {
      this.flashlight.toggle();
    }, 1000);
    setTimeout(() => {
      this.flashlight.toggle();
    }, 1500);
  }

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }
}
