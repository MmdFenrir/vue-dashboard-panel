<script setup>
import { Api } from '../../libs/axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
// "09030907396"
// "1012"

// states
const mobile = ref()
const password = ref()

const login = ref()
const t = ref(localStorage.getItem('token'))
if (t.value) {
  login.value = true
} else {
  login.value = false
}

async function loginHandler() {
  try {
    const { data } = await Api.post('/login', {
      mobile: mobile.value,
      password: password.value
    })
    // successful

    // save token to localStorage
    console.log(data.data)
    localStorage.setItem('token', data.data.access_token)
    // replace rout
    router.replace('dashboard')
  } catch (e) {
    // error
    console.log('eeeee', e)
  }
}
</script>

<!--  <template>
  <div class="about">
    <h1>This is an login page</h1>
    <p>Number is 09030907396</p>
    <p>password is 1012</p>
    <form v-on:submit.prevent="loginHandler" v-show="!login">
      <input required v-model="mobile" type="text" placeholder="your phon number" />
      <input required v-model="password" type="password" placeholder="password" />
      <input type="submit" />
    </form>
  </div>
</template> -->

<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-white">
    <body class="h-full">
    ```
  -->
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        ورود به حساب کاربری
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form v-on:submit.prevent="loginHandler" class="space-y-6" method="POST">
        <div dir="rtl">
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
            >شماره تلفن</label
          >
          <div class="mt-2">
            <input
              id="email"
              name="email"
              type="text"
              v-model="mobile"
              required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between" dir="rtl">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900"
              >رمز عبور</label
            >
          </div>
          <div class="mt-2">
            <input
              id="password"
              name="password"
              v-model="password"
              type="password"
              autocomplete="current-password"
              required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            ورود
          </button>
        </div>
      </form>
      <p class="mt-10 text-center text-sm text-gray-500">
        شماره موبایل:
        {{ ' ' }}
        <span href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >09030907396</span
        >
      </p>
      <p class="text-center text-sm text-gray-500">
        رمز:
        {{ ' ' }}
        <span href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >1012</span
        >
      </p>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card {
  margin: 1.5rem auto;
}
</style>
