export class NewPost {
    constructor(
       public title:string,
       public body:string
    ) {}

    clear() {
        this.title = '';
        this.body = '';
    }
}