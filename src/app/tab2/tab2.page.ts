import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon, IonGrid, IonCol, IonImg, IonRow } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { camera } from 'ionicons/icons';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { LinternaPage } from "../linterna/linterna.page";
import { HeaderComponent } from "../components/header/header.component";
import { CamaraServiceService } from "../servicios/camara-service.service";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, LinternaPage, HeaderComponent, IonFab, IonFabButton, IonIcon, IonGrid, IonCol, IonImg, IonRow, NgFor]
})
export class Tab2Page {

  constructor(public camaraServicio: CamaraServiceService) {
    addIcons({camera})
    this.camaraServicio.cargarFoto();
  }

  hacerFoto(){
    this.camaraServicio.agregarFoto();
  }

}
