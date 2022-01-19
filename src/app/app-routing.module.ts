import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesAccueilComponent } from './pages/pages-accueil/pages-accueil.component';
import { PagesDetailsComponent } from './pages/pages-details/pages-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PagesAccueilComponent },
  { path: 'detail', component: PagesDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
