import {Component} from 'angular2/core'
import {BlogPost} from '../post/post.component'
import {PostListService} from './postlist.service'
import conf from '../../config'

@Component({
    selector: 'post-list',
    templateUrl: `${conf.root_dir}postlist/postlist.template.html`,
    directives: [ BlogPost ],
    providers: [ PostListService ]
})

export class PostList {
    public posts : any[];

    constructor(private postListService: PostListService) {

    }

    ngOnInit() {
        this.getPostList();
    }

    getPostList() {
        this.postListService.getAllPosts()
            .subscribe(
                (posts) => { this.posts = posts },
                (error) => { if(error) throw `${error} : PostList getPosts() error`}
            )
    }
}