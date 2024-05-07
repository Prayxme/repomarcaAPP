import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonToast, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, mapOutline, homeOutline, constructOutline, businessOutline, cogOutline, flashlightOutline} from 'ionicons/icons';
import { Router } from "@angular/router";
import { Flashlight } from "@awesome-cordova-plugins/flashlight/ngx";
import { Network } from '@capacitor/network';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonToast, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink],
  providers:[Flashlight]
})
export class HomePage {
  
  isToastOpen = false;
  alertMsg = ''

  statusNetwork = ''

  constructor(public router: Router, private flashlight: Flashlight){
    addIcons({triangle, mapOutline, homeOutline, constructOutline, businessOutline, cogOutline, flashlightOutline})
    
    this.networkToast()
    this.networkStatus()
    this.blinkLinterna()
  }

  networkToast(){

    Network.addListener('networkStatusChange', async (status) => {
      console.log(`Network status: ${status.connected}, Tipo de Conexion: ${status.connectionType}`);
      this.alertMsg = `Network status: ${status.connected}, Tipo de Conexion: ${status.connectionType}`
      this.isToastOpen = true;
      this.setOpen
    });
  }  
  
  async networkStatus(){
    try{

      const status = await Network.getStatus();
    
      console.log(`Network status: ${status.connected}, Tipo de Conexion: ${status.connectionType}`);
      this.alertMsg = `Network status: ${status.connected}, Tipo de Conexion: ${status.connectionType}`
      this.isToastOpen = true;
    }catch{
      console.log('error', Error);
    }

  };

  openLinterna(){
    this.flashlight.toggle()
  }

  async blinkLinterna(){
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

  async setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  linternaPage(){
    this.router.navigate(['/linterna'])   
  }
}
