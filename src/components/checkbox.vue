<script>
import checkbox from "office-ui-fabric-vue/src/components/checkbox/checkbox.vue";
import { CheckBox as fabricCheckbox } from "office-ui-fabric-js/src/components/checkBox/checkBox"

export default {
    injectCss,
    beforeMount(){ 
        this.$fabric = { 
            CheckBox : fabricCheckbox 
        } 
    },
    extends :  checkbox
}
</script>
<style lang="scss" scoped>
    @import 'node_modules/office-ui-fabric-core/src/sass/_Fabric.Common';
    @import '../misc/fixThemeVars';
    @import "node_modules/office-ui-fabric-js/src/components/checkbox/Checkbox";
</style>