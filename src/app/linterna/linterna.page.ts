import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { Flashlight } from '@awesome-cordova-plugins/flashlight/ngx';
import { HeaderComponent } from "../components/header/header.component";
import { Router } from "@angular/router";

@Component({
  selector: 'app-linterna',
  templateUrl: './linterna.page.html',
  styleUrls: ['./linterna.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent],
  providers:[Flashlight]
})
export class LinternaPage {

  constructor(private flashlight: Flashlight, public router: Router) { }

  openLinterna(){
    this.flashlight.toggle()
    console.log('click en linterna')
  }

  openHome(){
    this.router.navigate(['/tabs'])
  }  
}
