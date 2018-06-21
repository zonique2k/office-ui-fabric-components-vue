<script>
import searchBox from "office-ui-fabric-vue/src/components/search_box/searchbox.vue";
import { SearchBox as fabricSearchBox } from "office-ui-fabric-js/src/components/SearchBox/SearchBox"

export default {
    injectCss,
    beforeMount(){
        this.$fabric = {
            SearchBox : fabricSearchBox
        };
    },
    extends :  searchBox
}
</script>
<style lang="scss" scoped>
    @import 'node_modules/office-ui-fabric-core/src/sass/_Fabric.Common';
    @import '../misc/fixThemeVars';
    @import "node_modules/office-ui-fabric-js/src/components/Label/Label"; /* searchbox uses mixins from label */
    @import "node_modules/office-ui-fabric-js/src/components/CommandButton/CommandButton"; /* searchbox uses classes from CommandButton */    
    @import "node_modules/office-ui-fabric-js/src/components/SearchBox/SearchBox";
</style>