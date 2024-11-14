import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'pages',
    loadComponent: () => import('./pages/pages.page').then( m => m.PagesPage)
  },
  {
    path: 'chamber',
    loadComponent: () => import('./pages/chamber/chamber.page').then( m => m.ChamberPage)
  },
  {
    path: 'requirements',
    loadComponent: () => import('./pages/requirements/requirements.page').then( m => m.RequirementsPage)
  },
  {
    path: 'reports',
    loadComponent: () => import('./pages/reports/reports.page').then( m => m.ReportsPage)
  },
  {
    path: 'users',
    loadComponent: () => import('./pages/security/users/users.page').then( m => m.UsersPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/security/login/login.page').then( m => m.LoginPage)
  },
];
