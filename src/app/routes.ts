import { Routes } from '@angular/router';

import { LayoutOneComponent } from './layout-one/layout-one.component';
import { LayoutTwoComponent } from './layout-two/layout-two.component';

export const appRoutes: Routes = [
    { path: 'layout-one', component: LayoutOneComponent },
    { path: 'layout-two', component: LayoutTwoComponent },
    { path: '', redirectTo: '/layout-one', pathMatch: 'full' }
    // { path: '*', redirectTo: '/layout-one' }
];