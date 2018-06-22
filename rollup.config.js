import vue from 'rollup-plugin-vue';
import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';


export default [
    {
        input: 'src/index.js',

        output:{
            format:"es",
            file : "./dist/bundle.esm.js",
        },
        plugins: [
            vue({ 
                useSpfxThemeLoading : true
            }),
            resolve({
                only : [
                    "office-ui-fabric-vue", 
                    "office-ui-fabric-js",
                ]
            }),
            commonJS({}),
            buble()
        ],
    },
    {
        input: 'src/index.js',

        output:{
            format:"es",
            // name : "testing",
            file : "./dist/bundle.testing.js",
        },
        plugins: [
            vue({ 
                useSpfxThemeLoading : true
            }),
            resolve({
                only : [
                    "office-ui-fabric-vue", 
                    "office-ui-fabric-js",
                    "@microsoft/load-themed-styles",
                    "vue"
                ]
            }),
            commonJS({ }),
            buble()
        ],
    }
];