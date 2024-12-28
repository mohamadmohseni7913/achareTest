<script setup>
import FormComponent from './formComponent.vue';
import { ref } from 'vue';
import MapComponent from './mapCoponent.vue';
import CreateAddressApi from '@/api/user/addresses/createAddress';
const currentTab = ref(0);
const form = ref(null)
// change current tab
function setCurrentTab(tab) {
    currentTab.value = tab;
}
// final object and send data to server
 async function SendData(geo) {
    let data = {
            first_name: form.value.firstName,
            last_name: form.value.lastName,
            coordinate_mobile: form.value.phoneNumber,
            coordinate_phone_number: form.value.phone,
            address: form.value.address,
            region: 1,
            gender: 'male',
            lat:geo.lat,
            lng:geo.lng
        }
         let response = await CreateAddressApi(data)
        console.log('data',data);
        console.log('response',response);
        
}
// form validator and check tabstatus
let status = false
 function FormValidator(formData, tabStatus = status) {
    form.value = formData
    if (tabStatus === true) {
        setCurrentTab(1)
    }
}
</script>
<template>

    <div class="map-Container" v-show="currentTab === 0">
        <FormComponent :formValidator="FormValidator" />


    </div>
    <div class="map-Container" v-show="currentTab === 1">

        <MapComponent :GetGeo="SendData" />

    </div>

</template>
<script>

export default {
    name: "CreateAddressContainer",

}
</script>