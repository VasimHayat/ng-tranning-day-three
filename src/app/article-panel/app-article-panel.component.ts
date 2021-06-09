import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from "@angular/core";
import { NgModel } from "@angular/forms";
import { ArticleData } from "../api/article.data";
import { Article } from "../model/article.model";
import { AppRootService } from "../services/app.root.service";

@Component({
    selector:'article-panel', 
    templateUrl:'app-article-panel.component.html',
    providers:[]
})
export class AppArticlePanelComponent{
  
  

    private articleArray:Array<Article>  = [];
    uiArticleArray:Array<Article>  = [];

    constructor(private appRootSevice: AppRootService){
        this.articleArray =  this.appRootSevice.getArticles();
        this.uiArticleArray = [...this.articleArray];
    }


    filterData(searchTerm:string){
        this.uiArticleArray = [];
        if( searchTerm && searchTerm.trim()){
           this.uiArticleArray =  this.articleArray.filter((item)=>{
                 return (item.owner.firstName+" "+item.owner.lastName+" "+item.text).toLowerCase().match(searchTerm.toLowerCase())
             })
 
         }else{
            this.uiArticleArray = [...this.articleArray];// copying 
         }
         
    }

    sortDataAction( orderByKey:string){   
        console.log(orderByKey)    
       this.uiArticleArray.sort(orderByKey =="name" ?this.sortByName:this.sortByArticleText);
    }


    sortByName(item1:Article,item2:Article){
        if(item1.owner.firstName > item2.owner.firstName){
            return 1;
        }else if(item1.owner.firstName == item2.owner.firstName){
            return 0;
        }else{
            return -1;
        }
    }

    sortByArticleText(item1:Article,item2:Article){
        if(item1.text > item2.text){
            return 1;
        }else if(item1.text == item2.text){
            return 0;
        }else{
            return -1;
        }
    }
  
}