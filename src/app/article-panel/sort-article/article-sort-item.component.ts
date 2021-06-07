import { Component, EventEmitter, Output } from "@angular/core"; 

@Component({
    selector:'article-sort',
    templateUrl:'article-sort-item.component.html'
})
export class ArticleSortItemComponent{
orderByKey:''; 
 @Output() sortData =  new EventEmitter();

 sortDataAction(){
     this.sortData.emit(this.orderByKey);
 }
}