import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesAccueilComponent } from './pages/pages-accueil/pages-accueil.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: PagesAccueilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
