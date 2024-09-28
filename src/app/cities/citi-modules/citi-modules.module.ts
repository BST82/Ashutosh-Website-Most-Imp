import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BanarashComponent } from '../banarash/banarash.component';
import { DelhiComponent } from '../delhi/delhi.component';
import { GoaComponent } from '../goa/goa.component';
import { NoidaComponent } from '../noida/noida.component';
import { BangaloreComponent } from '../bangalore/bangalore.component';

const routes: Routes = [
  { path: 'bangalore', component: BangaloreComponent },
  { path: 'delhi', component: DelhiComponent },
  { path: 'banarash', component: BanarashComponent },
  { path: 'goa', component: GoaComponent },
  { path: 'noida', component: NoidaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitiModulesModule {}
