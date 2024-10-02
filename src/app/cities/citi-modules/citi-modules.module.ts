import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BanarashComponent } from '../banarash/banarash.component';
import { DelhiComponent } from '../delhi/delhi.component';
import { GoaComponent } from '../goa/goa.component';
import { NoidaComponent } from '../noida/noida.component';
import { BangaloreComponent } from '../bangalore/bangalore.component';
import { LucknowComponent } from '../lucknow/lucknow.component';
import { AhmedabadComponent } from '../ahmedabad/ahmedabad.component';
import { PuneComponent } from '../pune/pune.component';
import { MumbaiComponent } from '../mumbai/mumbai.component';
import { HydrabadComponent } from '../hydrabad/hydrabad.component';

const routes: Routes = [
  { path: 'bangalore', component: BangaloreComponent },
  { path: 'delhi', component: DelhiComponent },
  { path: 'banarash', component: BanarashComponent },
  { path: 'goa', component: GoaComponent },
  { path: 'noida', component: NoidaComponent },
  { path: 'lucknow', component: LucknowComponent },
  { path: 'ahmedabad', component: AhmedabadComponent },
  { path: 'pune', component: PuneComponent },
  { path: 'mumbai', component: MumbaiComponent },
  { path: 'hydrabad', component: HydrabadComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitiModulesModule {}
