import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkExperienceListComponent } from './components/work-experience/work-experience-list/work-experience-list.component';

const routes: Routes = [
  {
    path:"",
    component:WorkExperienceListComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
