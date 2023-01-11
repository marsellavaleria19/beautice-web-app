<template>
  <BaseBannerSlogan background="background-video-tour.svg">
    <div class="py-[100px] md:py-[170px] text-center container mx-auto lg:max-w-[555px] h-[628px]">
      <BannerTitle title=" Watch the video tour" />
      <BannerDescription class=" mt-[13px] ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
      </BannerDescription>
      <div class="flex justify-center mt-[41px]">
        <PlayButton />
      </div>
    </div>
  </BaseBannerSlogan>
</template>

<script>

import BannerTitle from '~/components/Gallery/VideoTour/Title'
import BannerDescription from '~/components/Gallery/VideoTour/Description'
import PlayButton from '~/components/Gallery/VideoTour/PlayButton'

export default {
  name: 'VideoTourSection',
  components: {
    PlayButton, BannerTitle, BannerDescription
  }
}
</script>
