<template>
    <div class="address-Card">
        <div class="address-Card-Section">
            <span>نام و نام خانوادگی</span>
            <span>{{ firstName + " " + lastName }}</span>
        </div>
        <div class="address-Card-Section">
            <span>جنسیت</span>
            <span>{{ gender == 0 ? "اقا" : "خانوم" }}</span>
        </div>
        <div class="address-Card-Section">
            <span>شماره تلفن همراه </span>
            <span>{{ mobile }}</span>
        </div>
        <div class="address-Card-Section">
            <span>شماره تلفن ثابت </span>
            <span>{{ phone }}</span>
        </div>
        <div class="address-Card-Main-Address">
            <span>آدرس</span>
            <p>
                {{ address }}
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AddressCard',
    props: {
        address: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        gender: { type: Number, required: true },
        mobile: { type: Number, required: true },
        phone: { type: Number, required: true }
    }
}; </script>
