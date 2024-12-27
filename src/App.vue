<script setup>
import GetAllAddresses from './api/user/addresses/getAllAddresses';
import AddressCard from './components/addressCard.vue';
import FakeData from './fakeData';
import CreateAddressContainer from './components/createAddressContainer.vue';
// call and get user addresses
// cause i have got CORS error , i could not try  both api , then i wrote  what i think right
// and this is my first time to create vue app 
let data;
async function callAddress() {
  data = await GetAllAddresses()
}
callAddress()

</script>
<template>
  <main>
    <div class="main">
      <div class="main-Header">
        <!-- right -->
        <div class="main-Header-Logo">
          <img src="./assets/images/logo.png" alt="">
        </div>
        <!-- left -->
        <div class="main-Header-Links">
          <a @click="currentTab = 1">ثبت آدرس</a>
          <a @click="currentTab = 0">مشاهده آدرس ها</a>
        </div>
      </div>
      <div class="main-Content">
        <div v-show="currentTab === 0">
          <!-- <MapComponent />   -->
          <div class="main-Content-Addresses">
            <h2>آدرس ها و مشخصات</h2>
            <div v-for="(item, index) in FakeData" :key="index">
              <AddressCard :address="item.address" :firstName="item.first_name" :lastName="item.last_name"
                :gender="item.gender" :phone="item.coordinate_mobile" :mobile="item.coordinate_phone_number" />
            </div>

          </div>
        </div>
        <div class="map-Container" v-show="currentTab === 1">
          <CreateAddressContainer />
        </div>       
      </div>
    </div>
  </main>
</template>
<script>

export default {
  name: "app",
  data() {
    return {
      currentTab: 0,
    };
  },
}
</script>
<style lang="scss">
@import "./assets/style/main.scss";
</style>
<style scoped></style>
