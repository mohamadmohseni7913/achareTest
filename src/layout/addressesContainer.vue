<script setup>
// import GetAllAddresses from '@/api/user/addresses/getAllAddresses';
import AddressCard from '@/components/addressCard.vue';
import FakeData from '@/fakeData';
// call and get user addresses
// cause i have got CORS error , i could not try  both api , then i wrote  what i think right
// and this is my first time to create vue app 
// let data;
// async function callAddress() {
//   data = await GetAllAddresses()
// }
// callAddress()

</script>
<template>

    <div class="main-Content-Addresses">
        <h2>آدرس ها و مشخصات</h2>
        <div class="main-Content-Addresses-Section">
            <div v-for="(item, index) in FakeData" :key="index">
                <AddressCard :address="item.address" :firstName="item.first_name" :lastName="item.last_name"
                    :gender="item.gender" :phone="item.coordinate_mobile" :mobile="item.coordinate_phone_number" />
            </div>
        </div>


    </div>
</template>
