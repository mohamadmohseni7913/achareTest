<template>
  <!--  main title -->
  <h2>ثبت آدرس</h2>
  <div class="main-Content-Form">
    <!--  form  title -->
    <span class="main-Content-Form-Title"> لطفا مشخصات و آدرس خود را وارد کنید</span>
    <!-- label and  validat section -->
    <div class="main-Content-Form-Section">
      <div class="main-Content-Form-Section-Label">
        <span>نام </span>
        <span v-if="errors.firstName" class="error">{{ errors.firstName }}</span>
      </div>
      <input type="text" v-model="formData.firstName" placeholder="مثال : محمد" />
    </div>
    <div class="main-Content-Form-Section">
      <!-- label and  validat section -->
      <div class="main-Content-Form-Section-Label">
        <span>نام خانوادگی :</span>
        <span v-if="errors.lastName" class="error">{{ errors.lastName }}</span>
      </div>
      <input type="text" v-model="formData.lastName" placeholder="مثال : محسنی" />
    </div>
    <div class="main-Content-Form-Section">
      <!-- label and  validat section -->
      <div class="main-Content-Form-Section-Label">
        <span>شماره تلفن همراه </span>
        <span v-if="errors.phoneNumber" class="error">{{ errors.phoneNumber }}</span>
      </div>
      <input type="number" v-model="formData.phoneNumber" placeholder="093...." />
    </div>
    <div class="main-Content-Form-Section">
      <!-- label and  validat section -->
      <div class="main-Content-Form-Section-Label">
        <span>شماره تلفن ثابت(اختیاری) </span>
        <span v-if="errors.phone" class="error">{{ errors.phone }}</span>
      </div>
      <input type="number" v-model="formData.phone" placeholder="093...." />

    </div>
    <div class="main-Content-Form-Section">
      <!-- label and  validat section -->

      <div class="main-Content-Form-Section-Label">
        <span>آدرس </span>
        <span v-if="errors.address" class="error">{{ errors.address }}</span>
      </div>
      <textarea name="" v-model="formData.address" id=""></textarea>
    </div>
    <div class="main-Content-Form-Section">
      <!-- label and  validat section -->

      <div class="main-Content-Form-Section-Label">
        <span>جنسیت </span>
        <span v-if="errors.address" class="error">{{ errors.address }}</span>
      </div>
      <div class="main-Content-Form-Section-Label">
        <input type="radio" id="male" value="male" v-model="formData.gender" />
        <label for="male">مرد</label>
      </div>

      <div class="main-Content-Form-Section-Label">
        <input type="radio" id="female" value="female" v-model="formData.gender" />
        <label for="female">زن</label>
      </div>
    </div>
  </div>
  <div class="main-Content-Submit">
    <button @click="validateForm">ثبت و ادامه</button>
  </div>
</template>
<script>
export default {
  name: 'FormComponent',
  props: {
    formValidator: { type: Function, required: true }
  },
  data() {
    return {
      formData:
      {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        phone: '',
        address: '',
        gender: ''
      },
      errors: {}
    };
  },
  // form validator conditions
  methods: {
    validateForm() {

      this.errors = {}
      if (this.formData.firstName.length <= 3) {
        this.errors.firstName = 'اجباری : حداقل 3 حرف';
      }
      if (this.formData.lastName.length <= 3) {
        this.errors.lastName = 'اجباری : حداثل 3 حرف';
      }
      if (this.formData.phoneNumber.length < 11 || this.formData.phoneNumber.length > 11 || this.formData.phoneNumber === '') {
        this.errors.phoneNumber = 'اجباری: حداقل 11 رقم';
      }
      if (this.formData.phone.length < 11 || this.formData.phone.length > 11 || this.formData.phone === '') {
        this.errors.phone = 'اجباری: حداقل 11 رقم';
      }
      if (this.formData.address.length <= 10) {
        this.errors.address = 'اجباری: حداقل 10 حرف';
      }
      if (Object.keys(this.errors).length === 0) {
        this.formValidator(this.formData, true);
      }
    }
  }
}
</script>