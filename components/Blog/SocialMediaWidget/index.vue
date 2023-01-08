<template>
  <CardWidget title-widget="Social Connect" class="pb-[49px]">
    <template #tag>
      <div class="mt-[23px]">
        <div class="flex mt-[50px] justify-center ">
          <nuxt-link class="h-[43px] w-[43px] bg-white rounded-full shadow-[_-2px_6px_16px_-1px_#E6E9FD] mr-[21px] p-[9px]" to="#">
            <TwitterIcon class="h-[25px] w-[25px]" />
          </nuxt-link>
          <nuxt-link class="h-[43px] w-[43px] bg-white rounded-full mr-[21px] p-[9px] shadow-[_-2px_6px_16px_-1px_#E6E9FD]" to="#">
            <FacebookIcon />
          </nuxt-link>
          <nuxt-link class="h-[43px] w-[43px] bg-white rounded-full p-[9px] mr-[21px] shadow-[_-2px_6px_16px_-1px_#E6E9FD]" to="#">
            <InstagramIcon class="h-[25px] w-[25px]" />
          </nuxt-link>
          <nuxt-link class="h-[43px] w-[43px] bg-white rounded-full p-[9px] shadow-[_-2px_6px_16px_-1px_#E6E9FD]" to="#">
            <LinkedinIcon class="h-[25px] w-[25px] social-media-icon" />
          </nuxt-link>
        </div>
      </div>
    </template>
  </CardWidget>
</template>

<script>
import CardWidget from '~/components/Blog/CardWidget'
import InstagramIcon from '~/assets/icons/instagram.svg?inline'
import FacebookIcon from '~/assets/icons/facebook.svg?inline'
import TwitterIcon from '~/assets/icons/twitter.svg?inline'
import LinkedinIcon from '~/assets/icons/linkedin.svg?inline'

export default {
  name: 'CategoryWidget',
  components: {
    CardWidget, InstagramIcon, FacebookIcon, TwitterIcon, LinkedinIcon
  }
}
</script>

<style scoped>
  .social-media-icon path{
    fill:black
  }
</style>
