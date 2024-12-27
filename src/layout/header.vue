<script setup>
</script>
<template>


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
</template>
<script>

export default {
    name: "headerLayout",
    data() {
        return {
            currentTab: 0,
        };
    },
}
</script>