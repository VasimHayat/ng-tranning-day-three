import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppArticlePanelComponent } from './article-panel/app-article-panel.component';
import { AppHeaderComponent } from './header/app-header.component';
import { AppArticleComponent } from './article-panel/article/app-article.component'; 
import { ArticleSortItemComponent } from './article-panel/sort-article/article-sort-item.component';
import { AppArticleSearchComponent } from './article-panel/search/app-article-search.component';
import { AppRootService } from './services/app.root.service';
import { AppSignupComponent } from './signup/app-signup.component';
import { AppLandingComponent } from './landing/app-landing.component';

@NgModule({
  declarations: [
  AppComponent,
  AppHeaderComponent,
  AppArticlePanelComponent,
  AppArticleComponent,
  AppArticleSearchComponent,
  ArticleSortItemComponent,
  AppSignupComponent,
  AppLandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers:[AppRootService],
  bootstrap: [AppComponent] 
})
export class AppModule { }
