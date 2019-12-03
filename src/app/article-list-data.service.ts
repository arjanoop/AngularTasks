import { Injectable } from "@angular/core";
import { Article } from "./article";
import content from "../assets/content.json";

@Injectable({
  providedIn: "root"
})
export class ArticleListDataService {
  public articleListData: Article[];
  constructor() {
    this.articleListData = content;
  }
  getArticleList(): Article[] {
    console.log(this.articleListData);
    return this.articleListData;
  }
}
