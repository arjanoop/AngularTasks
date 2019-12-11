import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Article } from "../article";
import { ArticleDataService } from "../article-data.service";
import content from "../../assets/content.json";
import { UpdateDataService } from "../update-data.service";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"]
})
export class ArticleComponent implements OnInit {
  commentCount:number=0;
  readORhide = 'Read';
  data: Article;
  displayCommentSectionFlag: boolean = false;
  comments: string[] = [];
  constructor(
    private route: ActivatedRoute,
    private dataService: ArticleDataService,
    private updateDataService: UpdateDataService
  ) {
    content.forEach(element => {
      this.comments.push(element.content);
    });
    this.updateDataService.updateCoummentCount(this.comments.length);
    this.updateDataService.updateCommentCount$.subscribe(data => {
      this.commentCount = data;
    });
  }

  ngOnInit() {
    console.log("Article");
    console.log(this.updateDataService.getUserRole());
    this.data = this.dataService.getArtcileData();
  }

  displayCommentSection() {
    this.displayCommentSectionFlag = !this.displayCommentSectionFlag;
    if (this.displayCommentSectionFlag === false) {
      this.readORhide = `Read`;
    } else {
      this.readORhide = `Hide`;
    }
  }
}
