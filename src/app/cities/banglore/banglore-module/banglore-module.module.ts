import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BangloreCityUsersComponent } from '../banglore-city-users/banglore-city-users.component'; 

const routes: Routes = [
  { path: '', component: BangloreCityUsersComponent } // Define internal routes if needed
];

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BangloreModule { }
