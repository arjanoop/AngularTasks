import { Component, OnInit, Input } from '@angular/core';
import { ArticleFormat } from '../format';
import { UpdateDataService } from '../update-data.service';
import { ArticleListService } from '../article-list.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
  articleListData: ArticleFormat[];
  filteredArticles: ArticleFormat[];

  constructor( private newsFeeds : ArticleListService, private updateDataService: UpdateDataService ) { }

  ngOnInit() {
    this.articleListData = AppComponent.refrenceObject.getArticleList();
    this.filteredArticles = this.articleListData.slice();
    this.updateDataService.updateSource$.subscribe(value => {
      if (value==='All Sources') {
        this.articleListData = this.filteredArticles;
        return;
      }
      this.articleListData = this.filteredArticles.filter(source => source.category === value);
    });    
    this.updateDataService.filterArticles$.subscribe(pattern => {
      if (pattern==='All Sources') {
        this.articleListData = this.filteredArticles;
        return;
      }
      this.articleListData = this.filteredArticles.filter(source => source.category.includes(pattern)||source.content.includes(pattern)||source.title.includes(pattern));
    });
  }
}