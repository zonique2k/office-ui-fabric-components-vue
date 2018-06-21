<script>
import textField from "office-ui-fabric-vue/src/components/text_Field/textField.vue";
import { TextField as fabricTextField } from "office-ui-fabric-js/src/components/TextField/TextField"

export default {
    injectCss,
    beforeMount(){
        this.$fabric = {
            TextField : fabricTextField
        };
    },
    extends :  textField
}
</script>
<style lang="scss" scoped>
    @import 'node_modules/office-ui-fabric-core/src/sass/_Fabric.Common';
    @import '../misc/fixThemeVars';
    @import "node_modules/office-ui-fabric-js/src/components/TextField/TextField";
</style>