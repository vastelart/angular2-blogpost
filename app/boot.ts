import {bootstrap}    from 'angular2/platform/browser'
import {HTTP_PROVIDERS} from 'angular2/http';
import {RootComponent} from './components/root/root.component'

bootstrap(RootComponent, [ HTTP_PROVIDERS ]);