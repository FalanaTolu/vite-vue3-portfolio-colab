<template>
  <div class="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
    <p class="text-3xl text-gray-700 font-bold mb-5">
      Welcome!
    </p>
    <p class="text-gray-500 text-lg">
      This is the fun page
    </p>
  </div>
  <div class="container">
    <div class="joke">
      <p>{{ data.joke }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export interface jokeState {
  id: string,
  joke: string,
  status: number,
}

export default defineComponent({
  name: 'DadJokesMore',
  data() {
    return {
      data: {} as jokeState,
      isLoading: true,
      apiEndpoint: 'https://icanhazdadjoke.com/',
      requestOptions: {
        headers: { Accept: 'application/json' }
      },

    }
  },
  mounted() {
    this.getJokes()
    setInterval(this.getJokes, 2000);
  },
  methods: {
    async getJokes() {
      fetch(this.apiEndpoint, this.requestOptions)
        .then((res) => res.json())
        .then((data) => (this.data = data))
        .catch((error) => console.log(error))
        .finally(() => (this.isLoading = false));
    }
  },
})
</script>

const url = 'https://dad-jokes.p.rapidapi.com/random/joke';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);