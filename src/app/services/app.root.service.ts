import { Injectable } from "@angular/core";
import { ArticleData } from "../api/article.data";

@Injectable()
export class AppRootService{

    constructor(){
        console.log("Init.......");
        
    }
   private articleArray = ArticleData.data;

   getArticles(){
       return this.articleArray;
   }

   setArticles(){
    return this.articleArray;
   }
}