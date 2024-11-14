import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonText } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.page.html',
  styleUrls: ['./requirements.page.scss'],
  standalone: true,
  imports: [IonText, IonCol, IonRow, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class RequirementsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
