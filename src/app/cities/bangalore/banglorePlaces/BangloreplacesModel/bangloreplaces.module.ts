import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HSRlayoutComponent } from '../h-srlayout/h-srlayout.component';
import { IndiranagarComponent } from '../indiranagar/indiranagar.component';
import { JayanagarComponent } from '../jayanagar/jayanagar.component';
import { KoramangalaComponent } from '../koramangala/koramangala.component';
import { WhitefieldComponent } from '../whitefield/whitefield.component';
import { BangaloreComponent } from '../../bangalore.component';

const routes: Routes = [
  { path: '', component: BangaloreComponent }, // Default route
  { path: 'hsrplace', component: HSRlayoutComponent },
  { path: 'indiranagar', component: IndiranagarComponent },
  { path: 'jayanagar', component: JayanagarComponent },
  { path: 'koramangala', component: KoramangalaComponent },
  { path: 'whitefield', component: WhitefieldComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BangloreplacesModule {}
