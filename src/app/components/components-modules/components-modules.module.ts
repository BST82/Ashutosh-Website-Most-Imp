import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSectionComponent } from '../home-section/home-section.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from '../contact-form/contact-form.component';


const routes: Routes = [
  { path: '', component: HomeSectionComponent  }, 
  { path: 'contact', component: ContactFormComponent }, 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ComponentsModulesModule { }
