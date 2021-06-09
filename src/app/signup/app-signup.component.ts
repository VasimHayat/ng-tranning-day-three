import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { UserDetail } from "../model/user.detail.model";

@Component({
    selector:'signup',
    templateUrl:'app-signup.component.html',
    styleUrls:['app-signup.component.scss']
})
export class AppSignupComponent{

    userDetail = new UserDetail();

    processSignup(formDetai:NgForm){
            console.log(formDetai)


            console.log(this.userDetail)
    }
}