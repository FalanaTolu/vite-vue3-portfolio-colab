<template>
  <div class="container h-full flex flex-col justify-center items-center gap-4 mx-auto rounded-xl shadow p-8 m-10">
     <VueWriter class="hidden md:inline-block text-5xl text-gray-700 font-bold" :array="['Hi, I am Falana Tolu']" :iterations='1'/>
     <p class="md:hidden text-5xl text-gray-700 font-bold">Hi, I am Falana Tolu</p>
     <p class="text-gray-700">Fullstack Web Developer functional and responsive Websites and Web Applications with a creative edge</p>
     <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg shadow-gray-600/50 duration-500 hover:-translate-y-1">
      <router-link to="/about">About Me</router-link>
      </button>
 </div>  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VueWriter from 'vue-writer'


export default defineComponent({
  name: 'HomeView',

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