<template>
  <div class="container h-full mx-auto p-8 m-10">
    <div class="md:h-3/4 container flex flex-col items-center gap-10 md:gap- flex-wrap">
      <div class="md:w-1/2 flex-[0_1_10%]">
        <p class="text-5xl text-gray-700 dark:text-gray-200 font-bold mb-5">Hi, I am Falana Tolu</p>
      </div>
      <div class="md:w-1/2 text-gray-500 dark:text-gray-200 text-sm lg:text-base font-light flex-[0_1_10%] order-2 md:order-none">
        <p>
          I am Tolu, a full-stack web developer based in Lagos, Nigeria. I am passionate about creating dynamic and
          responsive web applications that provide a great user experience. With 3 years of experience, I have honed my
          skills working with various languages and frameworks, including HTML, CSS, JavaScript, Python, React, Vue.js and
          Django and I'm constantly learning and staying up-to-date with the latest technologies to improve my skills.
        </p>
        <p>
          In addition to my technical skills, I also have excellent communication and collaboration skills, which allow me
          to work effectively with clients, stakeholders, and team members at all levels.
        </p>
        <p>
          When I'm not coding, I enjoy reading, watching movies, and playing video games.
        </p>
        <p>
          I am currently currently open to new opportunities. If you are interested in working with me,
          please feel free to contact me.
        </p>
      </div>
      <div class="mx-auto">
        <img src="../assets/me.png" class="h-30 md:h-80 w-30 md:w-80 object-contain rounded-full border border-gray-400 dark:border-gray-700" alt="home logo">
        <div class="flex justify-evenly items-center py-10 text-gray-500 dark:text-gray-200">
          <a :href="twitter" target="_blank" rel="noopener noreferrer"><v-icon name="fa-twitter" scale="1.5"
              class="hover:text-blue-500 transition" /></a>
          <a :href="linkedin" target="_blank" rel="noopener noreferrer"><v-icon name="fa-linkedin" scale="1.5"
              class="hover:text-blue-900 transition" /></a>
          <a :href="github" target="_blank" rel="noopener noreferrer"><v-icon name="fa-github" scale="1.5"
              class="hover:text-gray-100 dark:hover:text-gray-700 rounded-full hover:bg-gray-900 dark:hover:bg-gray-100 transition" /></a>
          <a :href="'mailto:' + email" target="_blank" rel="noopener noreferrer"><v-icon name="si-gmail" scale="1.5"
              class="hover:text-red-500 transition" /></a>
        </div>
      </div>
    </div>
    <!-- Skills Track -->
    <SkillTracks />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SkillTracks from '../components/SkillTracks.vue';

export default defineComponent({
  data() {
    return {
      twitter: "https://www.twitter.com/Tea_R3x",
      linkedin: "https://www.linkedin.com/in/tolureal",
      github: "https://www.github.com/FalanaTolu",
      email: "falanatolulope@gmail.com",
      isHomePage: false,
    }
  },
  components: {
    SkillTracks,
  },
});
</script>