<template>

  <!--  main title -->
  <h2>ثبت آدرس</h2>
  <div class="main-Content-Form">
    <!--  form  title -->
    <span class="main-Content-Form-Title"> لطفا مشخصات و آدرس خود را وارد کنید</span>
    <!-- label and  validat section -->
    <div class="main-Content-Form-Section">
      <span>نام </span>
      <input type="text" v-model="formData.firstName" :class="{ 'error-border': errors.firstName }" placeholder="مثال : محمد" />
      <span v-if="errors.firstName" class="error">{{ errors.firstName }}</span>
      <button v-if="formData.firstName" class="clear" @click="formData.firstName = ''"><i class="bi bi-x"></i> </button>

    </div>
    <div class="main-Content-Form-Section">
      <!-- label and  validat section -->
      <span>نام خانوادگی :</span>
      <input type="text" v-model="formData.lastName" :class="{ 'error-border': errors.lastName }" placeholder="مثال : محسنی" />
      <span v-if="errors.lastName" class="error">{{ errors.lastName }}</span>
      <button  v-if="formData.lastName" class="clear" @click="formData.lastName = ''"><i class="bi bi-x"></i> </button>

    </div>
    <div class="main-Content-Form-Section">
      <!-- label and  validat section -->
      <span>شماره تلفن همراه </span>
      <input type="number" v-model="formData.phoneNumber" :class="{ 'error-border': errors.phoneNumber }" placeholder="093...." />
      <span v-if="errors.phoneNumber" class="error">{{ errors.phoneNumber }}</span>
      <button v-if="formData.phoneNumber " class="clear" @click="formData.phoneNumber = ''"><i class="bi bi-x"></i> </button>
    </div>
    <div class="main-Content-Form-Section">
      <!-- label and  validat section -->
      <span>شماره تلفن ثابت(اختیاری) </span>
      <input type="number" v-model="formData.phone" :class="{ 'error-border': errors.phone }" placeholder="093...." />
      <span v-if="errors.phone" class="error">{{ errors.phone }}</span>
      <button  v-if="formData.phone " class="clear" @click="formData.phone = ''"><i class="bi bi-x"></i> </button>

    </div>
    <div class="main-Content-Form-Section">
      <!-- label and  validat section -->
      <span>آدرس </span>
      <textarea name=""  v-model="formData.address" :class="{ 'error-border': errors.address }" id=""></textarea>
      <span v-if="errors.address" class="error">{{ errors.address }}</span>
      <button v-if="formData.address"  class="clear" @click="formData.address = ''"><i class="bi bi-x"></i> </button>

    </div>
    <div class="main-Content-Form-Section">
      <!-- label and  validat section -->

      <span>جنسیت </span>
      <div class="gender">
        <div class="main-Content-Form-Section-Label">
        <input type="radio" id="male" value="male" v-model="formData.gender" />
        <label for="male">مرد</label>
      </div>

      <div class="main-Content-Form-Section-Label">
        <input type="radio" id="female" value="female" v-model="formData.gender" />
        <label for="female">زن</label>
      </div>
      </div>
      
      <span v-if="errors.address" class="error">{{ errors.address }}</span>

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