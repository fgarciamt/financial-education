import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '-',
    pathMatch: 'full',
  },
  {
    path: '-',
    loadChildren: () => import('./public/public.module').then((m) => m.PublicModule),
  },
  {
    path: '',
    loadChildren: () => import('./private/private.module').then((m) => m.PrivateModule),
  },
  {
    path: '**',
    redirectTo: '-',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
