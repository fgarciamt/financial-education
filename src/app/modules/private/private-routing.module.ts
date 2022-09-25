import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageTemplateComponent } from '../../templates/page-template/page-template.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
