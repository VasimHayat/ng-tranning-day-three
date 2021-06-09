import { Component, Input } from "@angular/core";
import { Article } from "src/app/model/article.model";

@Component({
    selector:'app-article',
    templateUrl:'app-article.component.html'
})
export class AppArticleComponent{
    @Input() article:Article;
}
 