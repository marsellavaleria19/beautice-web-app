<template>
  <div class="bg-no-repeat bg-cover h-[529px]" :style="{'background-image': `url(${require(`@/assets/image/slogan/${background}`)})`}">
    <div class="bg-[#09115699] h-[529px]">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SloganSection',
  props: {
    background: {
      type: String,
      default: 'background-slogan.svg'
    }
  }
}
</script>
