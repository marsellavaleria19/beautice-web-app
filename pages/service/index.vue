<template>
  <div class="mt-[116px]">
    <section class="h-fit bg-[url('~/assets/image/background-service-page.svg')] bg-cover bg-no-repeat mb-[59px]">
      <ServiceSection />
    </section>
    <section v-for="(item,index) in dataService" :key="item.title" class="mb-[50px] lg:mb-[121px]">
      <div class="container mx-auto max-w-[1140px]">
        <ColumnSection
          v-if="index==1"
          :title="item.title"
          :subtitle="item.subtitle"
          :description="item.description"
          :image="item.image"
          :reverse="true"
          data-aos="fade-left"
          :data-aos-once="true"
        />
        <ColumnSection
          v-else
          :title="item.title"
          :subtitle="item.subtitle"
          :description="item.description"
          :image="item.image"
          data-aos="fade-right"
          :data-aos-once="true"
        />
      </div>
    </section>
    <section class="mt-8 lg:mt-[217.5px]">
      <ServiceSlogan background="background-service-slogan.svg" />
    </section>
    <section>
      <ServiceFaqSection />
    </section>
  </div>
</template>
<script>
import ServiceSection from '~/components/Service/OurService'
import ColumnSection from '~/components/Service/ColumnSection'
import { dataService } from '~/constant/service-page-data.ts'
import ServiceSlogan from '~/components/Service/ServiceSlogan'
import ServiceFaqSection from '~/components/Service/ServiceFAQ'
import aosMixin from '~/mixins/aos'

export default {
  components: {
    ColumnSection,
    ServiceSection,
    ServiceSlogan,
    ServiceFaqSection
  },
  mixins: [aosMixin],
  layout: 'BaseLayout',
  data () {
    return {
      dataService
    }
  },
  mounted () {
    this.$store.commit('setActivePage', 'Service')
  }
}
</script>
