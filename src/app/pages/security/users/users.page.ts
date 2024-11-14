import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonText, IonCol, IonRow, IonGrid } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../../components/header/header.component";

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
  standalone: true,
  imports: [IonGrid, IonRow, IonCol, IonText, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class UsersPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
