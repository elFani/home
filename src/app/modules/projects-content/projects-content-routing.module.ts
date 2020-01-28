import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutAppComponent } from '../../components/about-app/about-app.component';
import { A11yComponent } from '../../components/a11y/a11y.component';
import { PhotoWorkflowComponent } from '../../components/photo-workflow/photo-workflow.component';
import { PatternLibraryComponent } from '../../components/pattern-library/pattern-library.component';
import { CompareCollegesComponent } from '../../components/compare-colleges/compare-colleges.component';


const routes: Routes = [
  { path: '', component: AboutAppComponent },
  { path: 'osd-sp', component: A11yComponent },
  { path: 'photo-work', component: PhotoWorkflowComponent },
  { path: 'pattern-library', component: PatternLibraryComponent },
  { path: 'compare-colleges', component: CompareCollegesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsContentRoutingModule { }
