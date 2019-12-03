import { Injectable } from '@angular/core';
import { Article } from './article';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FetchArticlesService {

  constructor(
    private httpClient:HttpClient
  ) {
    
}

fetchArticleList():Observable<Article[]>{
  let articles: Article[] = [];
    return this.httpClient
      .get<any>(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=25517c086fef47eb8e36ec453354200d"
      )
      .pipe(
        map(responseData => {
          let objectUnwarp: any[] = [];
          let articleData: any[] = [];
          let articles: Article[] = [];
          let i = 0;
          for (const key in responseData) {
            objectUnwarp.push(responseData[key]);
          }
          for (const key in objectUnwarp[2]) {
            articleData.push(objectUnwarp[2][key]);
          }
          articleData.forEach(element => {
            try {
              let temp: Article = {
                title: element.title,
                date: element.publishedAt,
                content: element.content,
                category: element.source.name
                  .replace(".com", "")
                  .replace(".in", ""),
                author: element.author.replace(".com", "").replace(".in", ""),
                image: element.urlToImage,
                value: i
              };
              articles.push(temp);
              i = i + 1;
            } catch (error) {}
          });
          return articles;
        })
      );
   }
}
