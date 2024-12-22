import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSectionComponent } from '../home-section/home-section.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { OurservicesComponent } from '../../features/ourservices/ourservices.component';
import { BlogComponent } from '../blog/blog.component';
import { EPujaComponent } from '../e-puja/e-puja.component';


const routes: Routes = [
  { path: '', component: HomeSectionComponent  }, 
  { path: 'services', component: OurservicesComponent  }, 
  { path: 'blog', component: BlogComponent  }, 
  { path: 'e-puja', component: EPujaComponent  }, 
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
