<script>
import panel from "office-ui-fabric-vue/src/components/panel/panel.vue";
import { Panel as fabricPanel } from "office-ui-fabric-js/src/components/panel/panel"

export default {
    injectCss,
    beforeMount(){
        this.$fabric = {
            Panel : fabricPanel
        };
    },
    extends :  panel
}
</script>
<style lang="scss" scoped>
    @import 'node_modules/office-ui-fabric-core/src/sass/_Fabric.Common';
    @import '../misc/fixThemeVars';
    @import "node_modules/office-ui-fabric-js/src/components/Panel/Panel";
</style>
<style lang="scss">
    @import 'node_modules/office-ui-fabric-core/src/sass/_Fabric.Common';
    @import "node_modules/office-ui-fabric-js/src/components/Overlay/Overlay";
</style>
