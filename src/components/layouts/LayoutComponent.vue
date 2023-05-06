<template>
    <div class="h-full flex flex-col">
      <header>
        <NavigationBar />
      </header>
      <main class="flex-grow p-16 text-gray-400 bg-[#e8f0fa] dark:bg-black dark:text-white">
        <slot></slot>
        <LinkComponent />
      </main>
      <footer class="flex-shrink-0">
        <FooterComponent />
      </footer>
    </div>
  </template>

<script lang="ts">
import NavigationBar from '../NavigationBar.vue';
import LinkComponent from '../LinkComponent.vue';
import FooterComponent from '../FooterComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: "LayoutComponent",
    components: { 
      NavigationBar,
      LinkComponent, 
      FooterComponent,
    }
})
</script>

<style scoped>
/* v-footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
} */

</style>
