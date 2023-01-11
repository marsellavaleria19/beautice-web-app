<template>
  <div class="container mx-auto max-w-[1140px]">
    <h1 class="text-[#FF64AE] text-center text-[16px] font-semibold">
      Main Service
    </h1>
    <h2 class="text-[#091156] text-[36px] text-center font-semibold mt-[12px]">
      Learn services to focus on your beauty
    </h2>
    <p class="text-[#8B8B8B] text-[16px] text-center mt-[12px]">
      Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:gap-5 xl:gap-14 mt-[82px] w-full">
      <div v-for="(item,index) in mainService" :key="item.name" class="flex justify-center mb-3">
        <BaseCard class="text-center w-full pt-[59px] px-[34px] items-center z-20" data-aos="fade-up" data-aos-offset="200" :data-aos-delay="index * 100" :data-aos-once="true">
          <img :src="require(`~/assets/image/ilustration/${item.image}`)" :alt="item.name" class="rounded-full mx-auto" height="166" width="166">
          <h1 class="text-[18px] font-semibold mt-[58px] text-[#091156] h-[37px]">
            {{ item.name }}
          </h1>
          <p class="text-[#8B8B8B] text-[14px] mt-[6px]">
            {{ item.description }}
          </p>
        </BaseCard>
      </div>
    </div>
  </div>
</template>

<script>
import { mainService } from '~/constant/landing-page-data'
import aosMixin from '~/mixins/aos'

export default {
  name: 'MainServiceLandingPage',
  mixins: [aosMixin],
  data () {
    return {
      mainService
    }
  }
}
</script>
