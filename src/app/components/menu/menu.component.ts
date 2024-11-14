import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { addIcons } from 'ionicons';
import { closeOutline, closeSharp, leafOutline, leafSharp, settingsOutline, settingsSharp, documentTextOutline, documentTextSharp, peopleOutline, peopleSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, close } from 'ionicons/icons';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink, IonButton } from '@ionic/angular/standalone';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [CommonModule, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet, IonButton, RouterLink, RouterLinkActive],
})
export class MenuComponent implements OnInit {
  private authService = inject(AuthService);
  isAuth = false;
  sub!: Subscription;
  public appPages = [
    { title: 'Cámara', url: '/chamber', icon: 'leaf' },
    { title: 'Requerimiento', url: '/requirements', icon: 'settings' },
    { title: 'Informes', url: '/reports', icon: 'document-text' },
    { title: 'Usuarios', url: '/users', icon: 'people' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {
      addIcons({close}); }

  ngOnInit() {
    addIcons({ closeOutline, closeSharp, leafOutline, leafSharp, peopleOutline, peopleSharp, documentTextOutline, documentTextSharp, settingsOutline, settingsSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
    this.sub = this.authService.isAuthenticated.subscribe((isAuth) => {
      console.log("Auth:", isAuth);
      this.isAuth = isAuth;
    });
  }
  ngOnDestroy() {
    this.sub && this.sub.unsubscribe();
  }

  logout() {
    this.authService.logout();
  }

}
