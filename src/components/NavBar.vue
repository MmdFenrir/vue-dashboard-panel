<script setup>
defineProps({
  toggleSideBar: Function,
  toggleDrop: Function
})
</script>

<template>
  <div
    class="h-[50px] bg-gray-100 flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b"
  >
    <!-- Hambuger menu -->
    <div class="cursor-pointer w-[30px]" @click="toggleSideBar">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-[25px] h-[25px]">
        <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path
          d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
        />
      </svg>
    </div>
    <!-- end of Hambuger menu -->

    <!-- Search bar -->
    <div class="w-[calc(100%-30px)] flex">
      <div class="w-[calc(100%-200px)] flex justify-center">
        <!-- Search bar -->
        <form class="flex items-center w-[500px]">
          <label for="voice-search" class="sr-only">Search</label>
          <div class="relative w-full">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-auto text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="voice-search"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="جست و جو..."
              required
            />
          </div>
        </form>
      </div>
      <!-- User login -->
      <div class="w-[200px]">
        <div class="flex flex-row-reverse items-center justify-start space-x-4" @click="toggleDrop">
          <div class="font-semibold text-black text-left">
            <div>Mamad ,Dev</div>
            <div class="text-xs text-gray-500 dark:text-gray-400">ادمین</div>
          </div>
        </div>
      </div>
    </div>
    <!-- end of Search bar -->
  </div>
</template>
