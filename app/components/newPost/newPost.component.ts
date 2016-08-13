import {Component} from 'angular2/core'
import {NewPost} from './newPost.model'
import {NewPostService} from './newPost.service'
import conf from '../../config'

@Component({
    selector: 'new-post-form',
    templateUrl: `${conf.root_dir}newPost/newPost.template.html`,
    providers: [ NewPostService ]
})

export class NewPostForm {

    constructor(private newPostService: NewPostService) {}

    model = new NewPost('', '');

    resultMessage = '';
    resultStatus;
    formDisabled = false;
    showHideForm = false;

    showHideFormAction() {
        this.showHideForm = !this.showHideForm;
        this.resultMessage = '';
    }

    onSubmit() {

        this.formDisabled = true;
        this.resultMessage = '';

        this.newPostService.addNewPost(this.model)
            .then((response) => {
                this.formDisabled = false;
                this.model.clear();
                this.resultMessage = 'Done';
                this.resultStatus = true;

                setTimeout(() => { this.resultMessage = ''; }, 3000);
            })
            .catch((error) => {
                this.formDisabled = false;
                this.resultMessage = 'Fail';
                this.resultStatus = false;
                if(error) throw `${error} : NewPostForm Submit Error`;
            });
    }

}