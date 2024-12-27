<script setup>
import CreateAddressContainer from './components/createAddressContainer.vue';
import AddressesContainer from './layout/addressesContainer.vue';
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
          <AddressesContainer />
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
