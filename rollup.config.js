import vue from 'rollup-plugin-vue';
import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';

export default {
    input: 'src/index.js',

    output:{
        // format:"es",
        // file : "./dist/bundle.es.js",
        format:"iife",
        file : "./dist/bundle.iife.js",
        name : "ui"
    },
    plugins: [
        vue({ 
            useSpfxThemeLoading : true
            // autoStyles: true,
            // styleToImports: true,
            // css : function(style, styles, compiler){
            //     console.log("ohh: " + style);
            // }
        }),
        resolve({
            // extensions : ['.vue','.sass'],
            only : [
                "office-ui-fabric-vue", 
                //"office-ui-fabric-core", 
                "office-ui-fabric-js"
            ]
        }),
        commonJS({
            // extensions : ['.vue','.sass'],
            // only : ["office-ui-fabric-vue", "office-ui-fabric-core", "office-ui-fabric-js"]
        }),
        buble()
    ],
};