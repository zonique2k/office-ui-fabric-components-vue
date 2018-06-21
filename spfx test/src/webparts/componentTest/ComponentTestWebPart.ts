import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as VueConstructor from 'vue';
let Vue : any = VueConstructor;

import app from './test.vue';
// import { 
//     button, 
//     callout, 
//     iconAirplane 
// } from "bs-ui-fabric-vue"

export default class ComponentTestWebPart extends BaseClientSideWebPart<any> {

    public render(): void {
        // console.log("button", button);
        // console.log("callout", callout);
        // console.log("icon", iconAirplane);
        new Vue({
            el: this.domElement,
            render: h => h(app, {})
        });
    }
}
