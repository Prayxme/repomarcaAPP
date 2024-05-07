import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { logoWhatsapp, notificationsOutline, cartOutline } from 'ionicons/icons';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonToast, IonButton, IonImg, IonButtons, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonButton, IonToast, IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonButtons, IonIcon],
  standalone:true
})
export class HeaderComponent {

  constructor() { 
    addIcons({logoWhatsapp, notificationsOutline, cartOutline})
  }

  

}
