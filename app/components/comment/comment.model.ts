export class CommentModel {
    constructor(
        public email:string,
        public body:string
    ) {}

    clear() {
        this.email = '';
        this.body = '';
    }
}