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

@NgModule({
  declarations: [
  AppComponent,
  AppHeaderComponent,
  AppArticlePanelComponent,
  AppArticleComponent,
  AppArticleSearchComponent,
  ArticleSortItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
