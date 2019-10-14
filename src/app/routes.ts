import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LayoutTwoComponent } from './layout-two/layout-two.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'layout-two', component: LayoutTwoComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];
