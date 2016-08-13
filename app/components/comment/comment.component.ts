import {Input, Component} from 'angular2/core';
import {CommentService} from './comment.service'
import conf from '../../config'

@Component({
    selector: 'comment',
    templateUrl: `${conf.root_dir}comment/comment.template.html`,
    providers: [ CommentService ]
})

export class Comment {
    @Input() postId:number;
    comments;

    constructor(private commentService: CommentService) {

    }

    ngOnInit() {
        this.getComments();
    }

    getComments() {
        this.commentService.getComments(this.postId)
            .subscribe(
                (comments) => {
                    this.comments = comments;
                },
                (error) => { if(error) throw error; }
            )
    }
}