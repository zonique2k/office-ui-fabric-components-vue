import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as VueConstructor from 'vue';
let Vue : any = VueConstructor;

import app from './test.vue';

export default class ComponentTestWebPart extends BaseClientSideWebPart<any> {

    public render(): void {
        new Vue({
            el: this.domElement,
            render: h => h(app, {})
        });
    }
}
