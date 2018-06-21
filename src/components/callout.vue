<script>
import callout from "office-ui-fabric-vue/src/components/callout/callout.vue";
import { Callout as fabricCallout } from "office-ui-fabric-js/src/components/callout/callout"

export default {
    injectCss,
    beforeMount(){
        this.$fabric = {
            Callout : fabricCallout
        };
    },
    extends :  callout
}
</script>
<style lang="scss" scoped>
    @import 'node_modules/office-ui-fabric-core/src/sass/_Fabric.Common';
    @import '../misc/fixThemeVars';
    @import "node_modules/office-ui-fabric-js/src/components/Callout/Callout";
</style>
<style lang="scss">
    @import 'node_modules/office-ui-fabric-core/src/sass/_Fabric.Common';
    @import "node_modules/office-ui-fabric-js/src/components/ContextualHost/ContextualHost";
</style>
