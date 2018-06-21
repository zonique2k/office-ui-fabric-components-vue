<script>
import MessageBar from "office-ui-fabric-vue/src/components/Message_Bar/MessageBar.vue";

export default {
    injectCss,
    extends :  MessageBar
}
</script>
<style lang="scss" scoped>
    @import 'node_modules/office-ui-fabric-core/src/sass/_Fabric.Common';
    @import '../misc/fixThemeVars';
    @import "node_modules/office-ui-fabric-js/src/components/MessageBar/MessageBar";
</style>