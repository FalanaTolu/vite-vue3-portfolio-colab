<template>
  <div class="container flex flex-col justify-center mx-auto p-8 m-10 text-gray-500">
    <div class="mx-auto" v-if="isLoading">
      <v-icon name="la-spinner-solid" animation="spin-pulse" scale="2.5" />
    </div>
    <div @click="getJokes" class="container text-2xl text-gray-500 text-center italic mb-5" v-else>
      <transition name="fade" mode="out-in">
        <div :key="joke">
          {{ joke }}
        </div>
      </transition>
    </div>
    <div>
      <!-- <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg shadow-gray-600/50 duration-500 hover:-translate-y-1"
        @click="getJokes">
        Get Another Joke
      </button> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// export interface jokeState {
//   id: string,
//   joke: string,
//   status: number,
// }

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