<template>
  <div class="container h-full mx-auto p-8 m-10">
    <div class="container flex">
      <div class="w-1/2">
        <p class="text-5xl text-gray-700 font-bold mb-5">Hi, I am Falana Tolu</p>
        <p class="text-gray-500">
          I am Tolu, a full-stack web developer based in Lagos, Nigeria. I am passionate about creating dynamic and
          responsive web applications that provide a great user experience. With 3 years of experience, I have honed my
          skills working with various languages and frameworks, including HTML, CSS, JavaScript, Python, React, Vue.js and
          Django and I'm constantly learning and staying up-to-date with the latest technologies to improve my skills.
        </p>
        <p class="text-gray-500">
          In addition to my technical skills, I also have excellent communication and collaboration skills, which allow me
          to work effectively with clients, stakeholders, and team members at all levels.
        </p>
        <p class="text-gray-500">
          When I'm not coding, I enjoy reading, watching movies, and playing video games.
        </p>
        <p class="text-gray-500">
          I am currently currently open to new opportunities. If you are interested in working with me,
          please feel free to contact me.
        </p>
      </div>
      <div class=" mx-auto ">
        <img src="../assets/me.png" class="h-80 w-80 object-contain rounded-full border border-gray-400" alt="home logo">
      </div>
    </div>
    <!-- Skills Track -->
    <div class="w-full relative flex overflow-x-hidden">
      <div id="box"
        class="w-full flex flex-wrap gap-2 md:gap-0 justify-around items-center py-12 animate-none md:animate-marquee whitespace-nowrap">
        <v-icon name="oi-logo-github" scale="1.5" class="md:scale-[2] lg:scale-[3] flex-[1_1_15%] md:flex-none" />
        <v-icon name="vi-file-type-css" scale="1.5" class="md:scale-[2] lg:scale-[3] flex-[1_1_15%] md:flex-none" />
        <v-icon name="vi-file-type-html" scale="1.5" class="md:scale-[2] lg:scale-[3] flex-[1_1_15%] md:flex-none" />
        <v-icon name="vi-file-type-js-official" scale="1.5"
          class="md:scale-[2] lg:scale-[3] flex-[1_1_15%] md:flex-none" />
        <v-icon name="vi-file-type-reactjs" scale="1.5" class="md:scale-[2] lg:scale-[3] flex-[1_1_15%] md:flex-none" />
        <v-icon name="vi-file-type-tailwind" scale="1.5" class="md:scale-[2] lg:scale-[3] flex-[1_1_15%] md:flex-none" />
        <v-icon name="vi-file-type-typescript-official" scale="1.5"
          class="md:scale-[2] lg:scale-[3] flex-[1_1_15%] md:flex-none" />
        <v-icon name="vi-file-type-vue" scale="1.5" class="md:scale-[2] lg:scale-[3] flex-[1_1_15%] md:flex-none"
          title="Vue" />
      </div>
      <div
        class="hidden absolute top-0 w-full md:flex justify-around items-center py-12 animate-none md:animate-marquee2 whitespace-nowrap">
        <v-icon name="oi-logo-github" scale="1.5" class="md:scale-[2] lg:scale-[3] flex-[1_1_15%] md:flex-none" />
        <v-icon name="vi-file-type-css" scale="1.5" class="md:scale-[2] lg:scale-[3] flex-[1_1_15%] md:flex-none" />
        <v-icon name="vi-file-type-html" scale="1.5" class="md:scale-[2] lg:scale-[3] flex-[1_1_15%] md:flex-none" />
        <v-icon name="vi-file-type-js-official" scale="1.5"
          class="md:scale-[2] lg:scale-[3] flex-[1_1_15%] md:flex-none" />
        <v-icon name="vi-file-type-reactjs" scale="1.5" class="md:scale-[2] lg:scale-[3] flex-[1_1_15%] md:flex-none" />
        <v-icon name="vi-file-type-tailwind" scale="1.5" class="md:scale-[2] lg:scale-[3] flex-[1_1_15%] md:flex-none" />
        <v-icon name="vi-file-type-typescript-official" scale="1.5"
          class="md:scale-[2] lg:scale-[3] flex-[1_1_15%] md:flex-none" />
        <v-icon name="vi-file-type-vue" scale="1.5" class="md:scale-[2] lg:scale-[3] flex-[1_1_15%] md:flex-none"
          title="Vue" />
      </div>
    </div>
  </div>
</template>

<style>
/* #box>* {
  flex: 1 1 15%;
      } */
</style>