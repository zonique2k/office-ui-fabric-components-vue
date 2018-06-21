<script>
import Spinner from "office-ui-fabric-vue/src/components/Spinner/Spinner.vue";
import { Spinner as fabricSpinner } from "office-ui-fabric-js/src/components/Spinner/Spinner"

export default {
    injectCss,
    beforeMount(){
        this.$fabric = {
            Spinner : fabricSpinner
        };
    },
    extends :  Spinner
}
</script>
<style lang="scss"> /* the JS adds dom elements, which isnt scoped correctly >.< */
    @import 'node_modules/office-ui-fabric-core/src/sass/_Fabric.Common';
    @import '../misc/fixThemeVars';
    @import "node_modules/office-ui-fabric-js/src/components/Spinner/Spinner";
</style>