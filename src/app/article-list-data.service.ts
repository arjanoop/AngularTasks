import { Injectable } from "@angular/core";
import { Article } from "./article";
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
    this.articleList = fetchArticle.fetchArticleList();
  }

  getArticleList(): Observable<Article[]> {
    return this.articleList.pipe(
      map(responsedata => {
        return responsedata;
      })
    );
  }

  getArticleCategoryList(): Observable<string[]> {
    return this.getArticleList().pipe(
      map(data => {
        let category: string[] = [];
        data.forEach(element => {
          category.push(element.category);
        });
        return category;
      })
    );
  }
}
