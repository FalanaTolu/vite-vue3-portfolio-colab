<template>
  <div class="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
    <p class="text-3xl text-gray-700 font-bold mb-5">
      Welcome!
    </p>
    <p class="text-gray-500 text-lg">
      This is the about page
    </p>
    <!-- Skills Track -->
    <div class="w-full relative flex overflow-x-hidden">
      <div id="box" class="w-full flex flex-wrap gap-2 md:gap-0 justify-around items-center py-12 animate-none md:animate-marquee whitespace-nowrap">
        <v-icon name="oi-logo-github" scale="1.5" class="md:scale-[2] lg:scale-[3] flex-[1_1_15%] md:flex-none"  />
        <v-icon name="vi-file-type-css" scale="1.5" class="md:scale-[2] lg:scale-[3] flex-[1_1_15%] md:flex-none" />
        <v-icon name="vi-file-type-html" scale="1.5" class="md:scale-[2] lg:scale-[3] flex-[1_1_15%] md:flex-none" />
        <v-icon name="vi-file-type-js-official" scale="1.5" class="md:scale-[2] lg:scale-[3] flex-[1_1_15%] md:flex-none" />
        <v-icon name="vi-file-type-reactjs" scale="1.5" class="md:scale-[2] lg:scale-[3] flex-[1_1_15%] md:flex-none" />
        <v-icon name="vi-file-type-tailwind" scale="1.5" class="md:scale-[2] lg:scale-[3] flex-[1_1_15%] md:flex-none" />
        <v-icon name="vi-file-type-typescript-official" scale="1.5" class="md:scale-[2] lg:scale-[3] flex-[1_1_15%] md:flex-none" />
        <v-icon name="vi-file-type-vue" scale="1.5" class="md:scale-[2] lg:scale-[3] flex-[1_1_15%] md:flex-none" title="Vue" />
      </div>
      <div class="hidden absolute top-0 w-full md:flex justify-around items-center py-12 animate-none md:animate-marquee2 whitespace-nowrap">
        <v-icon name="oi-logo-github" scale="1.5" class="md:scale-[2] lg:scale-[3] flex-[1_1_15%] md:flex-none" />
        <v-icon name="vi-file-type-css" scale="1.5" class="md:scale-[2] lg:scale-[3] flex-[1_1_15%] md:flex-none" />
        <v-icon name="vi-file-type-html" scale="1.5" class="md:scale-[2] lg:scale-[3] flex-[1_1_15%] md:flex-none" />
        <v-icon name="vi-file-type-js-official" scale="1.5" class="md:scale-[2] lg:scale-[3] flex-[1_1_15%] md:flex-none" />
        <v-icon name="vi-file-type-reactjs" scale="1.5" class="md:scale-[2] lg:scale-[3] flex-[1_1_15%] md:flex-none" />
        <v-icon name="vi-file-type-tailwind" scale="1.5" class="md:scale-[2] lg:scale-[3] flex-[1_1_15%] md:flex-none" />
        <v-icon name="vi-file-type-typescript-official" scale="1.5" class="md:scale-[2] lg:scale-[3] flex-[1_1_15%] md:flex-none" />
        <v-icon name="vi-file-type-vue" scale="1.5" class="md:scale-[2] lg:scale-[3] flex-[1_1_15%] md:flex-none" title="Vue" />
      </div>
    </div>
  </div>
</template>

<style>
 /* #box>* {
  flex: 1 1 15%;
      } */
</style>