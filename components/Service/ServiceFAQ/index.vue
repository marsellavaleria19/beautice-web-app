<template>
  <div class="container mx-auto max-w-[972px]">
    <h1 class="text-[36px] text-[#091156] font-semibold text-center mt-8 md:mt-[116px] mb-[21px]">
      Services FAQ’s
    </h1>
    <div class="flex justify-center mb-[68px]">
      <div class="border-b-[5px] border-[#FF64AE] w-[40px] rounded-sm" />
    </div>

    <div>
      <Accordion v-for="item in dataServiceFaq" :key="item.title" :title="item.title" :description="item.description" class="mb-[31px]" />
    </div>
  </div>
</template>

<script>
import { dataServiceFaq } from '~/constant/service-page-data'
import Accordion from '~/components/Service/ServiceFAQ/Accordion'

export default {
  name: 'ServiceFaq',
  components: {
    Accordion
  },
  data () {
    return {
      dataServiceFaq
    }
  }
}
</script>
