import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent, loadChildren: () => import('./modules/projects-content/projects-content.module').then(m => m.ProjectsContentModule) },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];
