import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ArticleFormat } from '../format';
import { ArticleDataService } from '../article-data.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {
  data : ArticleFormat;
  constructor(private route:ActivatedRoute, private dataService:ArticleDataService) { }
  ngOnInit() {
    this.data = this.dataService.getObject();
  }
}
