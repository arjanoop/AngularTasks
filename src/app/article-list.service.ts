import { Injectable } from '@angular/core';
import { ArticleFormat } from './format';

@Injectable({
  providedIn: 'root'
})

export class ArticleListService {
  public articleListData : ArticleFormat[];
  constructor() { }

  setArticleList(refrenceObject){
    this.articleListData = refrenceObject;
  }

  getArticleList(){
    return this.articleListData;
  }
}
