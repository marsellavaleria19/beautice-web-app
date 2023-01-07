<template>
  <BaseBannerSlogan background="background-video-tour.svg">
    <div class="py-[170px] text-center container mx-auto lg:max-w-[555px] h-[628px]">
      <h1 class="text-white text-[36px]">
        Watch the video tour
      </h1>
      <p class="text-[16px] mt-[13px] ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
      </p>
      <div class="flex justify-center mt-[41px]">
        <div class="w-[127px] h-[127px] border-2 border-white rounded-full mr-[28px]">
          <PolygonPlayIcon class="polygon-play-icon w-[65px] h-[65px] mt-[32px] ml-[32px] mr-[30px] mb-[30px]" />
        </div>
      </div>
    </div>
  </BaseBannerSlogan>
</template>

<script>
import PolygonPlayIcon from '~/assets/icons/polygon-play.svg?inline'

export default {
  name: 'VideoTourSection',
  components: {
    PolygonPlayIcon
  }
}
</script>
