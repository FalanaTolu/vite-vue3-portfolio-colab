<template>
    <!-- <div v-show ="!isHomePage" class="container mx-auto w-max bg-gray-200 flex flex-col gap-2 fixed top-1/2 right-0 float-right shadow-md shadow-gray-600/50 border p-3 before:absolute before:w-0.5 before:h-14 before:bg-gray-400 before:bottom-full before:left-2/4 after:absolute after:w-0.5 after:h-14 after:bg-gray-400 after:top-full after:left-2/4"> -->
    <div v-show ="!isAboutPage" class="container mx-auto w-max text-gray-500 dark:text-gray-200 bg-gray-200 dark:bg-gray-600 flex flex-col gap-2 fixed top-1/2 right-0 float-right shadow-md shadow-gray-600/50 border dark:border-none p-3">
        <a :href="twitter" target="_blank" rel="noopener noreferrer"><v-icon name="fa-twitter" scale="1.5" class="hover:text-blue-500 transition" /></a>
        <a :href="linkedin" target="_blank" rel="noopener noreferrer"><v-icon name="fa-linkedin" scale="1.5" class="hover:text-blue-900 transition" /></a>
        <a :href="github" target="_blank" rel="noopener noreferrer"><v-icon name="fa-github" scale="1.5" class="hover:text-gray-100 rounded-full hover:bg-gray-900 transition" /></a>
        <!-- <a :href="'mailto:' + email" target="_blank" rel="noopener noreferrer"><v-icon name="fa-envelope" scale="1.5" /></a> -->
        <a :href="'mailto:' + email" target="_blank" rel="noopener noreferrer"><v-icon name="si-gmail" scale="1.5" class="hover:text-red-500 transition" /></a>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import OhVueIcon from "oh-vue-icons";

export default defineComponent({
    name: "LinkComponent",
    data() {
        return {
            twitter: "https://www.twitter.com/Tea_R3x",
            linkedin: "https://www.linkedin.com/in/tolureal",
            github: "https://www.github.com/FalanaTolu",
            email: "falanatolulope@gmail.com",
            isAboutPage: false,
        }        
    },
    components: {
        // "v-icon": OhVueIcon,
    },
    watch: {
  $route: {
     immediate: true,
     handler() {
         if(this.$route.path == '/about') {
           this.isAboutPage = true;
         } else {
            this.isAboutPage = false;
         }
     }
  }
}
})
</script>

<style>
/* div:before {
  content: '';
  width: 2px;
  height: 50px;
  background: #000;
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -2px;
} */
</style>