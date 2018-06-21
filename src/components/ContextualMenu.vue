<script>
import ContextualMenu from "office-ui-fabric-vue/src/components/contextual_menu/ContextualMenu.vue";
import { ContextualMenu as fabricContextualMenu } from "office-ui-fabric-js/src/components/ContextualMenu/ContextualMenu";

export default {
    injectCss,
    beforeMount(){
        this.$fabric = {
            ContextualMenu : fabricContextualMenu
        };
    },
    extends :  ContextualMenu
}
</script>
<style lang="scss" scoped>
    @import 'node_modules/office-ui-fabric-core/src/sass/_Fabric.Common';
    @import '../misc/fixThemeVars';
    @import "node_modules/office-ui-fabric-js/src/components/ContextualMenu/ContextualMenu";
</style>
<style lang="scss">
    @import 'node_modules/office-ui-fabric-core/src/sass/_Fabric.Common';
    @import '../misc/fixThemeVars';
    @import "node_modules/office-ui-fabric-js/src/components/ContextualHost/ContextualHost";
</style>