import {Input, Component} from 'angular2/core';
import {Comment} from '../comment/comment.component'
import {NewComment} from '../newComment/newComment.component'

import conf from '../../config'

@Component({
    selector: 'blogpost',
    templateUrl: `${conf.root_dir}/post/post.template.html`,
    directives: [ Comment, NewComment ]
})

export class BlogPost {
    @Input() posts:any[];
    @Input() post;
}