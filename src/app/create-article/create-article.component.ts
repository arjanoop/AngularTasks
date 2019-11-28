import { Component, OnInit } from '@angular/core';
import { UpdateDataService } from '../update-data.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})

export class CreateArticleComponent implements OnInit {
  constructor(private channelService: UpdateDataService) { 
    this.channelService.updateFlag(0);
  }

  ngOnInit() { }

  saveArticle(heading:String,shortDescription:String,content:String,date:String,author:String, url:String){
    alert("Heading : "+heading+"\nShort Description : "+shortDescription+" \nContent"+content+"\nDate : "+date+"\nAuthor : "+author+"\nShort Url : "+url);
    console.log("Heading : "+heading+"\nShort Description : "+shortDescription+" \nContent"+content+"\nDate : "+date+"\nAuthor : "+author+"\nShort Url : "+url);
    this.navbarStatus();
  }

  navbarStatus(){
    this.channelService.updateHeading("Welcome to NewsFeeds");
    this.channelService.updateFlag(1);
  }
}
