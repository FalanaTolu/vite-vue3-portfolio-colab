<template>
  <!-- <div class="flex justify-between items-center h-16 w-full transition" :class="{'-translate-y-full':!showNavigationBar}"> -->
    <div class="flex justify-evenly items-center h-16 w-full bg-white bg-opacity-50 shadow-none md:shadow-md md:ring md:ring-gray-500 fixed ease-out duration-500 z-10" :class="{'md:-translate-y-20':!showNavigationBar}">
    <nav class="flex justify-between md:justify-evenly items-center h-16 w-full text-md text-gray-500 md:text-lg md:mx-auto m-4 md:m-0 p-2 md:p-0 bg-transparent">
      <!-- <nav class="flex w-2xl lg:w-1/3 p-2 text-md md:text-lg text-blue-500 mx-auto m-4 rounded-3xl bg-white bg-opacity-50 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur whitespace-nowrap z-10"> -->
        <router-link to="/"><img src="/me-icon.png" class="h-10 w-10 ml-4 rounded-full border border-gray-400"
        alt="home logo"></router-link>
        <div class="md:h-full w-full md:w-3/4 flex justify-evenly md:justify-center md:items-center flex-col md:flex-row gap-4 md:gap-16 fixed md:static top-16 left-0 md:m-0 text-center bg-white md:bg-transparent whitespace-nowrap" :class="{'max-[540px]:-translate-x-full': !isActive}">
        <router-link to="/about" class="border-b-2 md:border-none py-4 md:py-0">About</router-link>
        <router-link to="/projects" class="border-b-2 md:border-none py-4 md:py-0">Projects</router-link>
        <router-link to="/fun" class="border-b-2 md:border-none py-4 md:py-0">Fun Page</router-link>
        <button @click="toggleDark()" class="md:mr-10 md:absolute md:mr-16 md:right-20 w-3/5 md:w-0 self-center p-2 m-2 bg-pink-500 md:bg-transparent rounded-full">
            <p class="md:hidden inline">Theme</p>
            <v-icon v-if="isDark" name="co-sun" />
            <v-icon v-else name="bi-moon-stars-fill" />
          </button>
      </div>
    </nav>
     <!-- Hamburger -->
     <div class="md:hidden h-14 w-14 flex justify-center rounded-full bg-blue-500 p-4 mr-8">
        <div class="self-start tham tham-e-squeeze tham-w-8 m-auto" :class="{'tham-active': isActive}" @click="toggleActive()" title="Menu">
        <div class="tham-box">
          <div class="tham-inner bg-white" />
        </div>
      </div>
    </div>
    <!-- Hamburger -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavigationBar',
  data() {
    return {
      isActive: false,
      showNavigationBar: true,
      prevScrollPosition: 0,
    };
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
    },
    onScroll() {
    const currentScrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (currentScrollPosition < 0) {
      return
    }

    // if (Math.abs(currentScrollPosition) - this.prevScrollPosition < 60) { 
    // if (Math.abs(currentScrollPosition) - this.prevScrollPosition < 60) { 
    //   return
    // }

    this.showNavigationBar = currentScrollPosition < this.prevScrollPosition
    this.prevScrollPosition = currentScrollPosition
  }
  },
  // computed: {
  //   showSideBar() {
  //     // return this.isActive ? '-top-72': 'top-full'
  //     return this.isActive ? 'translate-y-0' : '-translate-y-60'
  //   }
  // },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    this.isActive
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }
})
</script>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
</style>
