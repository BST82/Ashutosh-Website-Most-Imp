import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
  { path: '',
    loadChildren:()=>import('./components/components-modules/components-modules.module')
    .then(mod=>mod.ComponentsModulesModule) },
  {
    path: 'bangalore',
    loadChildren: () => import('./cities/banglore/banglore-module/banglore-module.module')
      .then(mod => mod.BangloreModule)
  },
  
  // other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
