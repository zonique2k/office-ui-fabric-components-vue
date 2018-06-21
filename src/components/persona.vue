<script>
import persona from "office-ui-fabric-vue/src/components/persona/persona.vue";
import { Persona as fabricPersona } from "office-ui-fabric-js/src/components/persona/persona"

export default {
    injectCss,
    beforeMount(){
        this.$fabric = {
            Persona : fabricPersona
        };
    },
    extends :  persona
}
</script>
<style lang="scss" scoped>
    @import 'node_modules/office-ui-fabric-core/src/sass/_Fabric.Common';
    @import '../misc/fixThemeVars';
    @import "node_modules/office-ui-fabric-js/src/components/Persona/Persona";
</style>