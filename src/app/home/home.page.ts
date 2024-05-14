import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonToast, IonButton, IonIcon, IonFab, IonFabButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, mapOutline, homeOutline, constructOutline, businessOutline, cogOutline, flashlightOutline, camera} from 'ionicons/icons';
import { Router } from "@angular/router";
import { Flashlight } from "@awesome-cordova-plugins/flashlight/ngx";
import { Network } from '@capacitor/network';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonToast, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink, IonFab, IonFabButton],
  providers:[Flashlight]
})
export class HomePage {
  
  
  constructor(public router: Router, private flashlight: Flashlight){
    addIcons({triangle, mapOutline, homeOutline, constructOutline, businessOutline, cogOutline, flashlightOutline, camera})
    
  }
  
  
}
