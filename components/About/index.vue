<template>
  <div>
    <h1 class="text-[16px] text-[#FF64AE] font-semibold mb-3">
      About
    </h1>
    <h2 class="text-[36px] font-semibold text-[#091156] max-w-[732px] mb-[12px]">
      We are a leading beauty clinic that has been around since 2002
    </h2>
    <p class="text-[#8B8B8B] text-[16px] tracking-widest max-w-[680px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
    </p>
    <div class="relative">
      <img scr="~/assets/image/about-image.svg" alt="about" height="540" width="1140">
      <div class="absolute rounded-full h-[88px] w-[88px] bg-[#091156] text-center pt-[26.4px] pl-[26.4px] pr-[24.93px] pb-[24.93px]">
        <PolygonPlay class="text-center h-[36.67px] w-[36.67px]" />
      </div>
    </div>
    </h2>
  </div>
</template>

<script>
import PolygonPlay from '~/assets/icons/polygon-play.svg?inline'

export default {
  name: 'AboutIndex',
  components: {
    PolygonPlay
  }
}
</script>
