import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from "@angular/core"; 
import { NgModel } from "@angular/forms";

@Component({
    selector:'article-search',
    templateUrl:'app-article-search.component.html'
})
export class AppArticleSearchComponent implements AfterViewInit{

 

   // @ViewChild('searchBoxRef') searchBoxRef :ElementRef;
  //  @ViewChildren(NgModel) models :QueryList<NgModel>;
  // @ViewChildren('searchBoxRef1,searchBoxRef2') searchBoxRefs :QueryList<ElementRef>;
 
    ngAfterViewInit(): void {
        //  (this.models.changes.subscribe(resp =>{
        //      console.log(resp)
        //  }))
  }

 

  searchTerm:string;
  @Output() filterAction = new EventEmitter();

  filterData(){
     this.filterAction.emit(this.searchTerm); 
  }

}

