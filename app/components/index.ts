import {IModule} from 'angular';
import {AppMainComponent} from './main/main.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {CounterComponent} from './counter/counter.component';

export function registerComponents(module:IModule) {
    module
        .component('appMain', new AppMainComponent())
        .component('tarAbout', new AboutComponent())
        .component('tarHome', new HomeComponent())
        .component('tarCounter', new CounterComponent());
}


