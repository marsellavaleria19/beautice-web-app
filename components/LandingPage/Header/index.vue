<template>
  <header class="bg-[url('~/assets/image/slide-background-header.svg')] bg-no-repeat pt-[41px] h-[805px] w-full">
    <div class="container mx-auto">
      <BaseNavbar class="mb-[100px] md:mb-[163px]" />
      <swiper
        :slides-per-view="1"
        :space-between="30"
        :loop="false"
        :pagination="{
          clickable: true
        }"
        :autoplay="{
          delay:
            3000
        }"
      >
        <swiper-slide
          v-for="slide in 3"
          :key="slide"
        >
          <div class="md:flex justify-center items-center mb-[100px]">
            <div class="mr-[22px]">
              <h1 class="text-[48px] text-[#091156] font-poppins font-semibold">
                Clinic & beauty consultant
              </h1>
              <p class="text-[16px] font-medium">
                It is a long established fact that a reader will be
                by the readable content of a page.
              </p>
              <BaseButton title-button="More Details" class="w-[200px] h-[58px] mt-[28px]" />
            </div>
            <div class="hidden md:block">
              <img src="~/assets/image/ilustration/header-ilustration.svg" alt="header-ilustration" width="601" height="398">
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </header>
</template>

<script>
import { Navigation, Pagination, Autoplay } from 'swiper'

import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'

// import Swiper styles
import 'swiper/swiper-bundle.css'

import '~/assets/css/swiper-custom.css'

SwiperCore.use([Navigation, Pagination, Autoplay])
export default {
  name: 'LandingPageHeader',
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>
<style scoped>
 .header{
    background-image: url('~/assets/image/slide-background-header.svg');
    background-repeat: no-repeat;
  }
</style>
