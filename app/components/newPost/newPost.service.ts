import {Injectable} from 'angular2/core'
import {Http, Headers} from 'angular2/http'
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/catch'

@Injectable()
export class NewPostService {

    constructor(private http:Http) {}

    headers = new Headers({ 'Content-Type': 'application/json' });

    addNewPost(postObject) {
        return new Promise((resolve, reject) => {
            this.http.post(
                'http://jsonplaceholder.typicode.com/posts',
                JSON.stringify(postObject),
                { headers: this.headers}
            )
                .toPromise()
                .then((response) => { resolve(response.json()); })
                .catch((error) => { reject(error); });
        });
    }
}