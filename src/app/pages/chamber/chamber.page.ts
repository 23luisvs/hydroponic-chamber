import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonText } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-chamber',
  templateUrl: './chamber.page.html',
  styleUrls: ['./chamber.page.scss'],
  standalone: true,
  imports: [IonText, IonCol, IonRow, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class ChamberPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
