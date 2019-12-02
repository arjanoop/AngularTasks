import { Injectable } from "@angular/core";
import { Article } from "./article";

@Injectable({
  providedIn: "root"
})
export class ArticleListService {
  public articleListData: Article[];
  constructor() {}

  setArticleList(article:Article[]) {
    this.articleListData = article;
  }

  getArticleList():Article[] {
    return this.articleListData;
  }
}
