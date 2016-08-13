import {Component} from 'angular2/core'
import {PostList} from '../postlist/postlist.component'
import {Header} from '../header/header.component'
import {NewPostForm} from '../newPost/newPost.component'
import conf from '../../config'

@Component({
    selector: 'blogpost-app',
    templateUrl: `${conf.root_dir}root/root.template.html`,
    directives: [ Header, NewPostForm, PostList]
})

export class RootComponent {
    title = conf.main_title;
}