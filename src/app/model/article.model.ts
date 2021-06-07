export interface Owner{
    id:string;
    firstName:string;
    lastName:string;
    title:string;
    email:string;

}


export class Article{
    id:string;
    text:string;
    tags:Array<string>;
    image:string;
    owner:Owner;
    publishDate:string;
    likes:number;
}
