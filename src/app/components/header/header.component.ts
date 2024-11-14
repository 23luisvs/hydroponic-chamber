import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton } from "@ionic/angular/standalone";

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonButtons, CommonModule, IonHeader, IonToolbar, IonTitle, IonMenuButton],
})
export class HeaderComponent  implements OnInit {
  @Input() title: string = "";
  constructor() { }

  ngOnInit() {}

}
