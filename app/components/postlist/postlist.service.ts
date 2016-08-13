import {Injectable} from 'angular2/core'
import {Http, Response} from 'angular2/http'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class PostListService {

    constructor(private http:Http) {}

    getAllPosts() {
        return this.http.get(`http://jsonplaceholder.typicode.com/posts`)
            .map((response) => response.json())
            .catch((error) => { if(error) throw `${error} : PostList Service error` });
    }
}