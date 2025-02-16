import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/components-modules/components-modules.module')
      .then(mod => mod.ComponentsModulesModule)
  },
  {
    path: '',
    loadChildren: () => import('./features/features/features.module')
      .then(mod => mod.FeaturesModule)
  },
  {
    path: 'cities',  // 'cities' path to load CitiModulesModule
    loadChildren: () => import('./cities/citi-modules/citi-modules.module')
      .then(mod => mod.CitiModulesModule)
  },
  {
    path: 'bangloreplaces',
    loadChildren: () => import('./cities/bangalore/banglorePlaces/BangloreplacesModel/bangloreplaces.module')
      .then(mod => mod.BangloreplacesModule)
  }

  // other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
