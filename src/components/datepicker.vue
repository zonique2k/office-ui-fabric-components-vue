<script>
import datepicker from "office-ui-fabric-vue/src/components/Date_Picker/DatePicker.vue";
import { DatePicker as fabricDatePicker } from "office-ui-fabric-js/src/components/DatePicker/Jquery.DatePicker"

export default {
    injectCss,
    beforeMount(){
        this.$fabric = {
            DatePicker : fabricDatePicker
        };
    },
    extends :  datepicker
}
</script>
<style lang="scss">
    @import 'node_modules/office-ui-fabric-core/src/sass/_Fabric.Common';
    @import '../misc/fixThemeVars';
    @import "node_modules/office-ui-fabric-js/src/components/TextField/TextField";
    @import "node_modules/office-ui-fabric-js/src/components/DatePicker/DatePicker";
</style>