<template>
    <div>
        test vue component
        <hr>
        <uiButton type="primary">dimmer <icon-airplane></icon-airplane></uiButton>
        <uiButton>dimmer <icon-airplane></icon-airplane></uiButton>
        <hr>
        <ui-callout
            title='All of your favorite people'
            content='Message body is optional. If help documentation is available, consider adding a link to learn more at the bottom.'>
            <ui-button slot='actions'>Learn more</ui-button>
            <ui-button>Open Callout</ui-button>
        </ui-callout>
        <hr>
        <uiCheckbox v-model='checkboxChecked'></uiCheckbox>
        <hr>
        <uiPersona type='available' initials='AD' primaryText='Aide Woode' />
        <hr>
        <uiSearchbox placeholder='Search' :clearOnBlur="false" v-model='defaultSearch'/>
        <hr>
        <uiTextField label='Name' />
        <hr>
        <uiSpinner label='Loading...' />
        <hr>
        <uiMessagebar icon='ErrorBadge' type='error'>
            Lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.
            <br />
            <!-- <ou-link>Hyperlink string</ou-link> -->
        </uiMessagebar>
        <hr>
        <uiButton @click='dialogVisible=true'>Open Dialog</uiButton>
        <uiDialog
            type='lgHeader'
            title='All emails together'
            v-model='dialogVisible'
            subText='Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.'>
            <div slot='actions'>
                <uiButton type='primary' @click='dialogVisible=false'>Save</uiButton>
                <uiButton @click='dialogVisible=false'>Cancel</uiButton>
            </div>
        </uiDialog>
        <hr>
        <!-- *beware: requires jquery o.O<br>
        <uiDatepicker label='Start date' placeholder='Select a date...' v-model='date'/> -->
        <hr>
        <uiContextualMenu>
            <uiButton type='primary'>Open Example</uiButton>
            <div slot='list'>
                <uiContextualMenuItem name='Animals' />
                <uiContextualMenuItem name='Books' />
                <uiContextualMenuItem name='Education' />
                <uiContextualMenuItem name='Music' />
                <uiContextualMenuItem name='Sports' disabled />
            </div>
        </uiContextualMenu>
        <hr>
        <uiDropdown v-model='select' label='Dropdown label'>
            <uiDropdownitem value='dog'>Dog barking</uiDropdownitem>
            <uiDropdownitem value='wind'>Wind blowing</uiDropdownitem>
            <uiDropdownitem value='duck'>Duck quacking</uiDropdownitem>
            <uiDropdownitem value='cow'>Cow mooing</uiDropdownitem>
        </uiDropdown>
    </div>
</template>

<script>
import { 
    button, 
    persona,
    callout, 
    checkbox,
    searchbox,
    textfield,
    spinner,
    messagebar,
    dialog,
    datepicker,
    contextualmenu,
    contextualmenuitem,
    dropdown,
    dropdownitem,
    iconAirplane 
} from "bs-ui-fabric-vue"

export default {
    components : {
        uiButton: button,
        uiPersona : persona,
        uiCallout : callout,
        uiCheckbox : checkbox,
        uiSearchbox : searchbox,
        uiTextField : textfield,
        uiSpinner : spinner,
        uiMessagebar : messagebar,
        uiDialog : dialog,
        uiDatepicker : datepicker,
        uiContextualMenu : contextualmenu,
        uiContextualMenuItem : contextualmenuitem,
        uiDropdown : dropdown,
        uiDropdownitem : dropdownitem,
        iconAirplane
    },
    data : function(){
        return { 
            checkboxChecked : true,
            dialogVisible: false,
            date : ''
        }
    }
}
</script>