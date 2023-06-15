import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'variacao',
    loadChildren: () =>
      import('./modules/ativo/asset.module').then((m) => m.AssetModule),
  },
  {
    path: '',
    redirectTo: 'variacao',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'variacao'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
