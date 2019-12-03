import { Injectable } from "@angular/core";
import { Article } from "./article";
import content from "../assets/content.json";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { FetchArticlesService } from "./fetch-articles.service";

@Injectable({
  providedIn: "root"
})
export class ArticleListDataService {
  public articleListData: Article[];
  public articleList: Observable<Article[]>;
  constructor(private fetchArticle: FetchArticlesService) {
    this.articleListData = content;
    this.articleList = fetchArticle.fetchArticleList();
    this.articleList.pipe;
  }

  getArticleList1(): Observable<Article[]> {
    return this.articleList.pipe(
      map(responsedata => {
        return responsedata;
      })
    );
  }

  getArticleCategoryList(): Observable<string[]> {
    return this.getArticleList1().pipe(
      map(data => {
        let category: string[] = [];
        data.forEach(element => {
          category.push(element.category);
        });
        return category;
      })
    );
  }

  getArticleList(): Article[] {
    return this.articleListData;
  }
}
