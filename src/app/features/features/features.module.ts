import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutourworkComponent } from '../aboutourwork/aboutourwork.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';

const routes: Routes = [
  { path: '', component: AboutourworkComponent  }, 
  { path: 'contact', component: ContactFormComponent },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FeaturesModule { }
