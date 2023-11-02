<script setup>
import { ref } from 'vue'
import SideBar from '../../components/SideBar.vue'
import NavBar from '../../components/NavBar.vue'

const showDropDown = ref()
const showSide = ref(true)

// hide show sidebar
function toggleSideBar() {
  showSide.value = !showSide.value
}

// toggle user
function toggleDrop() {
  showDropDown.value = !showDropDown.value
}
</script>

<template>
  <div class="w-screen h-screen flex" dir="rtl">
    <!-- sideBar -->
    <side-bar :show-side="showSide" />

    <!-- Main -->
    <div class="w-full h-full bg-gray-400">
      <!-- navBar -->
      <nav-bar :toggle-drop="toggleDrop" :toggle-side-bar="toggleSideBar" />

      <!-- router view -->
      <div class="h-[calc(100vh-50px)] bg-gray-50 p-[10px]">
        <div class="border-[2px] border-gray-400 rounded-md p-[20px] h-full overflow-y-scroll">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
div {
  text-align: center;
}
</style>
