<template>
  <div class="h-[1028.89px]">
    <div class="container mx-auto max-w-[1291px] pt-[200px] md:pt-[354.44px] lg:pt-[400px]">
      <div class="grid grid-cols-1 lg:grid-cols-2 place-items-center">
        <div>
          <BaseTitle title="About Us" />
          <BaseSubtitle subtitle=" We are the best beauty clinic" class="mt-3" />
          <BaseDetail class="mt-[12px] justify-start lg:max-w-[483px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.

            Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.
          </BaseDetail>
          <div class="sm:flex items-center justify-center mt-[49px]">
            <BaseButton class="h-[58px] w-full sm:w-[200px] mr-[44px] mb-[20px] sm:mb-0">
              Learn More
            </BaseButton>
            <nuxt-link to="#">
              <div class="flex items-center justify-center">
                <div class="rounded-full h-[49px] w-[49px] bg-[#091156] text-center p-[14.7px] mr-[13px]">
                  <PolygonPlay class="text-center h-[20px] w-[20px]" />
                </div>
                <span class="text-[16px] text-[#8B8B8B] font-semibold tracking-widest">Watch Video</span>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="lg:pt-3">
          <img src="~/assets/image/about-landing-page.svg" alt="about" loading="lazy" class="w-full h-full" height="350">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PolygonPlay from '~/assets/icons/polygon-play.svg?inline'
export default {
  name: 'AboutLandingPage',
  components: {
    PolygonPlay
  }
}
</script>

<style scoped>
.about-section{
    background-image: url('~/assets/image/background-header-about.svg');
    background-repeat: no-repeat;
    background-position:right;
  }
</style>
