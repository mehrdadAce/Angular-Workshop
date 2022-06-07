import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'books',
  loadChildren: () => import('./components/book/list/list.module').then(m => m.ListModule)
}, {
  path: 'movies',
  loadChildren: () => import('./components/movie/list/list.module').then(m => m.ListModule)
}, {
  path: '',
  redirectTo: '/books?maxItems=12',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }