import { Injectable } from "@angular/core";
import { Article } from "./article";

@Injectable({
  providedIn: "root"
})
export class ArticleDataService {
  articleData: Article = null;
  constructor() {}

  setArtcileData(article: Article) {
    this.articleData = article;
  }

  getArtcileData(): Article {
    return this.articleData;
  }
}
