<template>
  <BaseBannerSlogan background="background-slogan-service.svg">
    <div class="container mx-auto max-w-[1067px] pt-[30px] md:pt-[100px] lg:py-[182px]">
      <div class="lg:flex justify-center items-center">
        <div class="w-full lg:max-w-[600px] text-center lg:text-left">
          <BannerTitle title="Best responsibility and service for our customers" class="mb-[12px]" />
          <BannerDetail>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
          </BannerDetail>
        </div>
        <div class="flex items-center justify-center mt-10 lg:mt-0">
          <div class="w-[127px] h-[127px] border-2 border-white rounded-full mr-[28px]">
            <PolygonPlayIcon class="polygon-play-icon w-[65px] h-[65px] mt-[32px] ml-[32px] mr-[30px] mb-[30px]" />
          </div>
          <span class="font-semibold text-[16px] tracking-widest text-white">Treatments Videos</span>
        </div>
      </div>
    </div>
  </BaseBannerSlogan>
</template>

<script>
import BannerTitle from '~/components/Base/BannerSlogan/Title'
import BannerDetail from '~/components/Base/BannerSlogan/Description'
import PolygonPlayIcon from '~/assets/icons/polygon-play.svg?inline'
export default {
  name: 'SloganSection',
  components: {
    PolygonPlayIcon, BannerDetail, BannerTitle
  }
}
</script>

<style scoped>
    .polygon-play-icon path{
      fill:transparent;
      stroke:white
    }
</style>
