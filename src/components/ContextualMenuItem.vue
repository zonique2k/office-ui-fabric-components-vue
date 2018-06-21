<script>
import ContextualMenuItem from "office-ui-fabric-vue/src/components/contextual_menu/ContextualMenuItem.vue";
export default {
    injectCss,
    extends :  ContextualMenuItem
}
</script>
<style lang="scss" scoped>
    @import 'node_modules/office-ui-fabric-core/src/sass/_Fabric.Common';
    @import '../misc/fixThemeVars';
    @import "node_modules/office-ui-fabric-js/src/components/ContextualMenu/ContextualMenu";
</style>