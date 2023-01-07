<template>
  <div>
    <section class="mt-[125px]">
      <GallerySection />
    </section>
    <section class="mt-[126px]">
      <VideoTour />
    </section>
    <section class="h-[390px] bg-[url('~/assets/image/background-get-the-quota.svg')] bg-no-repeat bg-right">
      <GetTheQuotaSection />
    </section>
  </div>
</template>

<script>
import GallerySection from '~/components/Gallery'
import VideoTour from '~/components/Gallery/VideoTour'
import GetTheQuotaSection from '~/components/Gallery/GetTheQuota'

export default {
  components: {
    GallerySection, VideoTour, GetTheQuotaSection
  },
  layout: 'BaseLayout'
}
</script>
