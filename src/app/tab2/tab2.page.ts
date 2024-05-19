import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon, IonGrid, IonCol, IonImg, IonRow } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { camera } from 'ionicons/icons';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { HeaderComponent } from "../components/header/header.component";
import { NgFor } from '@angular/common';
import { DeliveryComponent } from "../components/delivery/delivery.component";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, HeaderComponent, IonFab, IonFabButton, IonIcon, IonGrid, IonCol, IonImg, IonRow, NgFor, DeliveryComponent]
})
export class Tab2Page {

  apiKey: string = 'AIzaSyAzTSrdmS4YwXR_0HGnJ41kCriH3B3Gpys'

  constructor() {
    addIcons({camera})
  }


}
