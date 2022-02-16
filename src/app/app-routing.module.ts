import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageSignInComponent } from './modules/account/pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './modules/account/pages/page-sign-up/page-sign-up.component';
import { PagesAccueilComponent } from './pages/pages-accueil/pages-accueil.component';
import { PagesDetailsComponent } from './pages/pages-details/pages-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PagesAccueilComponent },
  { path: 'manga/:id', component: PagesDetailsComponent },
  { path: 'login', component: PageSignInComponent },
  { path: 'signup', component: PageSignUpComponent },
  {
    path: 'account',
    loadChildren: () =>
      import('./modules/account/account.module').then((m) => m.AccountModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
