import { NgModule } from '@angular/core';
import { EcoNewsComponent } from './eco-news.component';
import { RemainingCountComponent } from './remaining-count/remaining-count.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsListGalleryViewComponent } from './news-list/news-list-gallery-view/news-list-gallery-view.component';
import { NewsListListViewComponent } from './news-list/news-list-list-view/news-list-list-view.component';
import { ChangeViewButtonComponent } from './news-list/change-view-button/change-view-button.component';
import { FilterNewsComponent } from './filter-news/filter-news.component';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { EcoNewsRoutingModule } from './eco-news-routing.module';
import { CreateNewsComponent } from './create-news/create-news.component';
import { FilterEcoNewsPipe } from 'src/app/pipe/filter-ecoNews-pipe/filter-eco-news.pipe';

@NgModule({
 declarations: [
  EcoNewsComponent,
  RemainingCountComponent,
  NewsListComponent,
  NewsListGalleryViewComponent,
  NewsListListViewComponent,
  ChangeViewButtonComponent,
  FilterNewsComponent,
  CreateNewsComponent,
  FilterEcoNewsPipe
 ],
 imports: [
  CommonModule,
  InfiniteScrollModule,
  EcoNewsRoutingModule
 ],
 providers: []
})
export class EcoNewsModule { }