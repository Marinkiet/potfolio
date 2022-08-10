import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { HomeComponent } from './components/pages/home/home.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'pages/all',component:HomeComponent},
  {path:'pages/projects',component:ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
