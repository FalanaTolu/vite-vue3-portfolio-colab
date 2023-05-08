import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { BiMoonStarsFill, FaTwitter, FaLinkedin, FaGithub, FaEnvelope, LaSpinnerSolid, CoSun, SiGmail, MdArrowback, MdArrowforward, OiLogoGithub, ViFileTypeCss, ViFileTypeHtml, ViFileTypeJsOfficial, ViFileTypeReactjs, ViFileTypeTailwind, ViFileTypeTypescriptOfficial, ViFileTypeVue } from 'oh-vue-icons/icons'



addIcons(BiMoonStarsFill, FaTwitter, FaLinkedin, FaGithub, FaEnvelope, LaSpinnerSolid, CoSun, SiGmail, MdArrowback, MdArrowforward, OiLogoGithub, ViFileTypeCss, ViFileTypeHtml, ViFileTypeJsOfficial, ViFileTypeReactjs, ViFileTypeTailwind, ViFileTypeTypescriptOfficial, ViFileTypeVue)



createApp(App).use(router).component('v-icon', OhVueIcon).mount('#app')

