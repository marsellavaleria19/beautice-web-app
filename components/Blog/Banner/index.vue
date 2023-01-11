<template>
  <BaseBannerSlogan background="background-blog-banner.svg">
    <div class="container mx-auto max-w-[1142px]">
      <div class="sm:flex justify-between items-center h-[289px]">
        <BannerTitle title="Blog" />
        <BannerDetail>
          Home • Blog
        </bannerdetail>
      </div>
    </div>
  </BaseBannerSlogan>
</template>

<script>
import BannerTitle from '~/components/Base/BannerSlogan/Title'
import BannerDetail from '~/components/Base/BannerSlogan/Description'
export default {
  name: 'SloganSection',
  components: {
    BannerDetail, BannerTitle
  }
}
</script>

<style scoped>
    .polygon-play-icon path{
      fill:transparent;
      stroke:white
    }
</style>
