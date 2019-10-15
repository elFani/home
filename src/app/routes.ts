import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LayoutTwoComponent } from './layout-two/layout-two.component';
import { A11yComponent } from './a11y/a11y.component';
import { PhotoWorkflowComponent } from './photo-workflow/photo-workflow.component';
import { PatternLibraryComponent } from './pattern-library/pattern-library.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: 'photo-work', component: PhotoWorkflowComponent },
    { path: 'a11y', component: A11yComponent },
    { path: 'pattern-library', component: PatternLibraryComponent }
  ] },
  { path: 'layout-two', component: LayoutTwoComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];
