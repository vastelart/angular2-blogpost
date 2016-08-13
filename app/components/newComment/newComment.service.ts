import {Injectable} from 'angular2/core'
import {Http, Headers} from 'angular2/http'
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/catch'

@Injectable()
export class NewCommentService {

    constructor(private http:Http) {}

    headers;

    addComment(commentData) {

        this.headers = new Headers({ 'Content-Type': 'application/json' });

        return new Promise((resolve, reject) => {
            this.http.post(
                `http://jsonplaceholder.typicode.com/posts/${commentData.postId}/comments`,
                JSON.stringify(commentData),
                { headers: this.headers}
            )
                .toPromise()
                .then((response) => { resolve(response.json()); })
                .catch((error) => { reject(error); });
        });
    }
}