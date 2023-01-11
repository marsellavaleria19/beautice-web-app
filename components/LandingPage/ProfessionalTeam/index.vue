<template>
  <div class="container mx-auto">
    <BaseTitle title="Professional Teams" class="text-center" />
    <BaseSubtitle subtitle="The Professional expert" class="text-center mt-[12px]" />
    <BaseDetail class="text-[#8B8B8B] text-[16px] text-center mt-[12px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
    </BaseDetail>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:gap-5 xl:gap-14 mt-[50px] sm:mt-[82px]">
      <div v-for="(item,index) in professionalTeam" :key="item.name" class="flex justify-center mb-2">
        <BaseCard
          class=" items-center pt-[40px] sm:pt-[59px] px-[34px] h-[626px] max-w-[424px] md:w-[424px] items-center"
          :class="{'bg-transparent shadow-none' : index!==1 }"
          data-aos="flip-left"
          data-aos-offset="200"
          :data-aos-delay="index * 100"
          :data-aos-once="true"
        >
          <img :src="require(`~/assets/image/user/${item.image}`)" :alt="item.name" class="rounded-full mx-auto" height="166" width="166">
          <div class="text-center">
            <BaseTitle :title="item.position" class="mt-[53px]" />
            <BaseSubtitle :subtitle="item.name" class="text-[18px] mt-[15px]" />
            <BaseDetail class="text-[14px] mt-[6px]">
              {{ item.description }}
            </BaseDetail>
          </div>
          <div class="flex mt-[50px] justify-center ">
            <nuxt-link class="h-[49px] w-[49px] bg-white rounded-full shadow-[_-2px_6px_16px_-1px_#E6E9FD] mr-[34px] p-[12px]" to="#">
              <TwitterIcon class="h-[25px] w-[25px]" />
            </nuxt-link>
            <nuxt-link class="h-[49px] w-[49px] bg-white rounded-full mr-[34px] p-[12px] shadow-[_-2px_6px_16px_-1px_#E6E9FD]" to="#">
              <FacebookIcon />
            </nuxt-link>
            <nuxt-link class="h-[49px] w-[49px] bg-white rounded-full p-[12px] shadow-[_-2px_6px_16px_-1px_#E6E9FD]" to="#">
              <InstagramIcon class="h-[25px] w-[25px]" />
            </nuxt-link>
          </div>
        </BaseCard>
      </div>
    </div>
  </div>
</template>

<script>
import { professionalTeam } from '~/constant/landing-page-data'
import InstagramIcon from '~/assets/icons/instagram.svg?inline'
import FacebookIcon from '~/assets/icons/facebook.svg?inline'
import TwitterIcon from '~/assets/icons/twitter.svg?inline'
import aosMixin from '~/mixins/aos'

export default {
  name: 'ProfessionalTeam',
  components: {
    InstagramIcon, FacebookIcon, TwitterIcon
  },
  mixins: [aosMixin],
  data () {
    return {
      professionalTeam
    }
  }
}
</script>
