import { Injectable } from '@angular/core';
import { ArticleFormat } from './format';

@Injectable({
  providedIn: 'root'
})

export class ArticleDataService {
  articleData : ArticleFormat = null;
  constructor() { }

  setObject(refrenceObject){
    this.articleData = refrenceObject;
  }

  getObject(){
    return this.articleData;
  }
}