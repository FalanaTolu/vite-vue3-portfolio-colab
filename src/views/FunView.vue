<template>
  <div class="container flex flex-col justify-center mx-auto p-8 m-10 text-gray-500">
    <div class="mx-auto" v-if="isLoading">
      <v-icon name="la-spinner-solid" animation="spin-pulse" scale="2.5" />
    </div>
    <div @click="getJokes" title="Click to change jokes" class="container text-center italic font-bold text-transparent  text-lg md:text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-10" v-else>
      <transition name="fade" mode="out-in">
        <div :key="joke">
          {{ joke }}
        </div>
      </transition>
    </div>
    <div class="flex flex-col md:flex-row justify-center items-center mt-10 gap-2">
      <img src="../assets/jacqueline-munguia-unsplash.jpg" alt="happy" class="h-80 w-80 object-contain flex-1"/>
      <p class="text-base md:text-xl dark:text-gray-300 p-4 md:-ml-10 flex-1">I think that everyone deserves a chance at finding true happiness at life. So I've included some unfunny jokes here. I hope that you really love them.</p>
    </div>
    <!-- <div>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg shadow-gray-600/50 duration-500 hover:-translate-y-1"
        @click="getJokes">
        Get Another Joke
      </button>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DadJokesMore',
  data() {
    return {
      joke: "",
      // data: {} as jokeState,
      isLoading: true,
      apiEndpoint: 'https://icanhazdadjoke.com/',
      requestOptions: {
        headers: { Accept: 'application/json' }
      },
    }
  },
  mounted() {
    this.getJokes()
    setInterval(() => { this.getJokes() }, 10000)
    // setInterval(this.getJokes, 10000);
  },
  methods: {
    async getJokes() {
      // fetch(this.apiEndpoint, this.requestOptions)
      //   .then((res) => res.json())
      //   .then((data) => (this.data = data))
      //   .catch((error) => console.log(error))
      //   .finally(() => (this.isLoading = false));

      try {
        // this.isLoading = true
        const response = await fetch(this.apiEndpoint, this.requestOptions)
        const json = await response.json()
        this.joke = json.joke
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>