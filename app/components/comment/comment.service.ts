import {Injectable} from 'angular2/core'
import {Http} from 'angular2/http'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class CommentService {

    constructor(private http:Http) {}

    getComments(postId:number) {
        return this.http.get(`http://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .map((response) => response.json())
            .catch((error) => { if(error) throw `${error} : Comment Service error` });
    }
}