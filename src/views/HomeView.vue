<template>
  <div class="container h-full flex flex-col justify-center items-center gap-4 mx-auto rounded-xl shadow p-8 m-10">
     <VueWriter class="hidden md:inline-block text-5xl text-gray-700 dark:text-gray-200 font-bold" :array="['Hi, I am Falana Tolu']" :iterations='1'/>
     <p class="md:hidden text-5xl text-gray-700 font-bold">Hi, I am Falana Tolu</p>
     <p class="text-xl text-gray-700 dark:text-gray-200 mb-8">Fullstack Web Developer passionate about creating dynamic and responsive web applications</p>
     <button class="w-40 bg-[#ff6dcd] hover:bg-[#5a60ea] hover:-translate-y-1 duration-500 text-xl text-white m-4 p-4 rounded-full shadow-md shadow-gray-600/50">
      <router-link to="/about">About Me</router-link>
      </button>
 </div>  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VueWriter from 'vue-writer'


export default defineComponent({
  components: {
    VueWriter,
  },
});
</script>

<style>
.is-typed span.cursor {
  display: inline-block;
  width: 3px;
  background-color: gray;
  animation: blink 1s infinite;
}
</style>