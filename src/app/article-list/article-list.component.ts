import { Component, Input, OnInit } from '@angular/core';
import { ArticleFormat } from '../format';
import { Router } from '@angular/router';
import { ArticleDataService } from '../article-data.service';
import { UpdateDataService } from '../update-data.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  @Input() articleData :ArticleFormat;

  constructor(private route : Router, private dataService:ArticleDataService,private  updateDataService:UpdateDataService) { }

  ngOnInit() { }
  
  fullArticleSection(){
    this.updateDataService.updateHeading(this.articleData.category);
    this.updateDataService.updateFlag(0);
    this.dataService.setObject(this.articleData);
    this.route.navigate(['/article']);
  }
}
