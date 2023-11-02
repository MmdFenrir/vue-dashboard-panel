<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

defineProps({
  showSide: Boolean
})

const router = useRouter()
const showUser = ref(true)

// log out
function logOut() {
  localStorage.removeItem('token')
  router.replace('/login')
}

function dropDown() {
  document.querySelector('#arrow').classList.toggle('rotate-180')
  showUser.value = !showUser.value
}
</script>
<template>
  <!-- side bar -->
  <div class="w-[400px] h-full bg-gray-200 text-white" v-show="showSide">
    <div class="h-[50px] bg-gray-900 flex justify-start items-center">
      <div class="px-[20px]">
        <h3 class="font-bold text-xl">پنل ادمین</h3>
      </div>
    </div>

    <div class="h-[calc(100vh-50px)] bg-gray-800 py-[20px]">
      <div class="flex flex-col justify-between h-full px-[20px] space-y-[10px]">
        <div class="flex flex-col justify-between space-y-[10px]">
          <!-- RouterLink -->
          <router-link
            :to="{ name: 'dashboard' }"
            class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out"
          >
            <svg
              aria-hidden="true"
              class="mr-2 w-[25px] h-[25px] fill-current"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="pr-[5px]">داشبورد</span>
          </router-link>
          <!-- end of RouterLink -->

          <!-- dropdown -->
          <div
            class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out cursor-pointer"
            @click="dropDown"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="mr-3 w-[20px] h-[20px] fill-current"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"
              />
            </svg>
            <div class="flex justify-between w-full items-center">
              <span class="pr-[10px]">کاربران</span>
              <span class="transition text-sm rotate-0" id="arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="w-[18px] h-[18px] fill-current"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div
            class="leading-7 flex flex-col text-left text-sm font-thin mt-2 w-4/5 mx-auto"
            id="submenu"
            v-show="showUser"
          >
            <router-link
              class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out"
              :to="{ name: 'user.list' }"
              >لیست کاربران</router-link
            >
            <router-link
              class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out"
              :to="{ name: 'user.create' }"
              >ساخت کاربر</router-link
            >
          </div>

          <!-- end of dropdown -->
        </div>
        <div class="h-[50px]">
          <div>
            <!-- RouterLink -->
            <button
              @click="logOut"
              class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800 transition duration-400 ease-in-out"
            >
              <svg
                aria-hidden="true"
                class="mr-2 w-[25px] h-[25px] fill-current"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="pr-2">خروج</span>
            </button>
            <!-- end of RouterLink -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
