import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'

const routes: Routes = [
  {
    path: 'companies',
    loadChildren: () => import('./companies/companies.module').then(m => m.CompaniesModule)
  }, {
    path: 'articles',
    loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule)
  }, {
    path: 'collaborators',
    loadChildren: () => import('./collaborators/collaborators.module').then(m => m.CollaboratorsModule)
  }, {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FontAwesomeModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
