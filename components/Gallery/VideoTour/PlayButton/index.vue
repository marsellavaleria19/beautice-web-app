<template>
  <button class="w-[127px] h-[127px] border-2 border-white rounded-full mr-[28px]">
    <PolygonPlayIcon class="polygon-play-icon w-[65px] h-[65px] mt-[32px] ml-[32px] mr-[30px] mb-[30px]" />
  </button>
</template>

<script>
import PolygonPlayIcon from '~/assets/icons/polygon-play.svg?inline'

export default {
  name: 'PlayButton',
  components: {
    PolygonPlayIcon
  }
}
</script>
