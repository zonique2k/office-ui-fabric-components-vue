<script>
import Dropdown from "office-ui-fabric-vue/src/components/Dropdown/Dropdown.vue";
import { Dropdown as fabricDropdown } from "office-ui-fabric-js/src/components/Dropdown/Dropdown"

export default {
    injectCss,
    beforeMount(){
        this.$fabric = {
            Dropdown : fabricDropdown
        };
    },
    extends :  Dropdown
}
</script>
<style lang="scss">
    @import 'node_modules/office-ui-fabric-core/src/sass/_Fabric.Common';
    @import '../misc/fixThemeVars';
    @import "node_modules/office-ui-fabric-js/src/components/Dropdown/Dropdown";
</style>