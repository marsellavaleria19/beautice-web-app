<template>
  <div class="bg-no-repeat bg-cover h-full" :style="{'background-image': `url(${require(`@/assets/image/banner-slogan/${background}`)})`}">
    <div class="bg-[#09115699] h-full">
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
