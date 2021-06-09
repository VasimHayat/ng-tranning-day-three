import { Component } from "@angular/core";
import { AppRootService } from "../services/app.root.service";

@Component({
    selector:'app-header',
    templateUrl:'app-header.component.html',
    providers:[]
})
export class AppHeaderComponent{
    constructor(private appService:AppRootService){

    }
}