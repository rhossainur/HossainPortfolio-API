import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { ResumePageComponent } from './components/resume/resume-page/resume-page.component';
import { ProjectPageComponent } from './components/project/project-page/project-page.component';
import { ContactPageComponent } from './components/contact/contact-page/contact-page.component';

const routes: Routes = [
  {
    path:"",
    component:HomePageComponent
  },
  {
    path:"resume",
    component:ResumePageComponent
  },
  {
    path:"project",
    component:ProjectPageComponent
  },
  {
    path:"contact",
    component:ContactPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
