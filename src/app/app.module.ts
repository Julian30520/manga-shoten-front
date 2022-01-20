import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesAccueilComponent } from './pages/pages-accueil/pages-accueil.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CardMangaComponent } from './components/card-manga/card-manga.component';
import { PagesDetailsComponent } from './pages/pages-details/pages-details.component';
import { PagesBibliComponent } from './pages/pages-bibli/pages-bibli.component';
import { IconComponent } from './components/icon/icon.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    PagesAccueilComponent,
    NavBarComponent,
    SearchBarComponent,
    CardMangaComponent,
    PagesDetailsComponent,
    PagesBibliComponent,
    IconComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
