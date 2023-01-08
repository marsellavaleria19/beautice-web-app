<template>
  <div class="mt-[116px]">
    <section class="h-fit bg-[url('~/assets/image/background-service-page.svg')] bg-cover bg-no-repeat mb-[59px]">
      <ServiceSection />
    </section>
    <section v-for="(item,index) in dataService" :key="item.title" class="mb-[92x]">
      <div class="container mx-auto max-w-[1140px]">
        <ColumnSection
          v-if="index==1"
          :title="item.title"
          :subtitle="item.subtitle"
          :description="item.description"
          :image="item.image"
          :reverse="true"
          data-aos="fade-left"
        />
        <ColumnSection
          v-else
          :title="item.title"
          :subtitle="item.subtitle"
          :description="item.description"
          :image="item.image"
          data-aos="fade-right"
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
import ServiceSection from '~/components/ServiceComponent'
import ColumnSection from '~/components/ServiceComponent/ColumnSection'
import { dataService } from '~/constant/service-page-data.ts'
import ServiceSlogan from '~/components/ServiceComponent/ServiceSlogan'
import ServiceFaqSection from '~/components/ServiceComponent/ServiceFAQ'
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
