<template>
  <!-- <Layout>
    <router-view v-slot="{ Component }">
      <transition enter-from-class="-translate-x-[150%] opacity-0" enter-active-class="transition duration-2000">
        <component :is="Component" />
      </transition>
    </router-view>
  </Layout> -->
  <Layout>
    <router-view/>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Layout from './components/layouts/LayoutComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    Layout,
  },
})
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');


#app {
  font-family: 'Switzer', sans-serif;
}
</style>
