import {Component} from 'angular2/core'
import conf from '../../config'

@Component({
    selector: 'blogpost-header',
    templateUrl: `${conf.root_dir}header/header.template.html`
})

export class Header {
    title = conf.main_title;
}