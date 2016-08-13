import {Component, Input} from 'angular2/core'
import {NewCommentService} from './newComment.service'
import {CommentModel} from '../comment/comment.model'
import conf from '../../config'

@Component({
    selector: 'new-comment',
    templateUrl: `${conf.root_dir}newComment/newComment.template.html`,
    providers: [ NewCommentService ]
})

export class NewComment {

    @Input() post;

    constructor(private newCommentService: NewCommentService) {}

    commentFormDisabled = false;
    resultMessage = '';
    resultStatus;
    commentData;

    commentModel = new CommentModel('', '');

    submitComment(postId) {

        this.commentFormDisabled = true;

        let {email, body} = this.commentModel;

        this.commentData = {
            postId,
            email,
            body
        };

        this.newCommentService.addComment(this.commentData)
            .then((response) => {
                this.commentModel.clear();
                this.commentFormDisabled = false;
                this.resultMessage = 'Done';
                this.resultStatus = true;

                setTimeout(() => { this.resultMessage = ''; }, 3000);
            })
            .catch((error) => {
                this.commentFormDisabled = false;
                this.resultMessage = 'Failed';
                this.resultStatus = false;
                if(error) throw `${error} : submitComment Error`;
            });
    }
}