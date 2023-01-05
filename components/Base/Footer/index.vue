<template>
  <footer class="h-fit pt-[237px]">
    <div class="container mx-auto text-[#D7DBFF] text-[16px] tracking-widest">
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <div class="mb-5">
          <img
            :src="require(`~/assets/logo/${beauticeData.logo}`)"
            alt="logo"
            width="258"
            height="63"
          >
          <p class="mt-[33px]">
            <strong>Beautice</strong> is a Beauty Clinic WordPress Theme.
          </p>
          <p class="text-[14px] italic mt-[26px] font-medium">
            {{ beauticeData.address }}
          </p>
          <div class="md:flex text-[14px] font-medium italic">
            <p class="mr-[28px]">
              {{ beauticeData.phone }}
            </p>
            <p class="underline">
              {{ beauticeData.email }}
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2">
          <ul>
            <h1 class="text-white font-semibold text-[18px] mb-6">
              Pages
            </h1>
            <li v-for="item in pagesMenu" :key="item.name" class="mb-[11px]">
              {{ item.name }}
            </li>
          </ul>
          <ul>
            <h1 class="text-white font-semibold text-[18px] mb-6">
              Information
            </h1>
            <li v-for="item in informationMenu" :key="item.name" class="mb-[11px]">
              {{ item.name }}
            </li>
          </ul>
        </div>
      </div>
      <div class="md:flex justify-between items-center mt-[154px]">
        <div class="flex flex-wrap justify-center">
          <nuxt-link v-for="item in socialMedia" :key="item.name" :to="item.link" class="mr-11">
            <component :is="item.image" class="h-[50px] w-[27.84px] icon-path" />
          </nuxt-link>
        </div>
        <div>© AltDesain Studio 2021 - All right reserved.</div>
      </div>
    </div>
  </footer>
</template>

<script>
import { beauticeData, pagesMenu, informationMenu, socialMedia } from '~/constant/footer-data'
import YoutubeIcon from '~/assets/icons/youtube.svg?inline'
import InstagramIcon from '~/assets/icons/instagram.svg?inline'
import LinkedinIcon from '~/assets/icons/linkedin.svg?inline'
import TwitterIcon from '~/assets/icons/twitter.svg?inline'
import FacebookIcon from '~/assets/icons/facebook.svg?inline'

export default {
  name: 'BaseFooter',
  components: {
    YoutubeIcon, InstagramIcon, LinkedinIcon, TwitterIcon, FacebookIcon
  },
  data () {
    return { beauticeData, pagesMenu, informationMenu, socialMedia }
  }
}
</script>

<style scoped>
 footer{
  background-image: url('~/assets/image/footer-background.svg');
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 200px;
 }
 ul {
  list-style: inside url("~/assets/icons/caret-right.svg");
}
.icon-path path{
  fill: white;
}
</style>
