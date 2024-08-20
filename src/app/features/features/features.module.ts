import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutourworkComponent } from '../aboutourwork/aboutourwork.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AboutourworkComponent  }, 
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FeaturesModule { }
