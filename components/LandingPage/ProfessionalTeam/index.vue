<template>
  <div class="container mx-auto">
    <h1 class="text-[#FF64AE] text-center text-[16px] font-semibold">
      Professional Teams
    </h1>
    <h2 class="text-[#091156] text-[36px] text-center font-semibold mt-[12px]">
      The Professional expert
    </h2>
    <p class="text-[#8B8B8B] text-[16px] text-center mt-[12px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:gap-5 xl:gap-14 mt-[50px] sm:mt-[82px]">
      <div v-for="(item,index) in professionalTeam" :key="item.name" class="flex justify-center mb-2">
        <BaseCard class="text-center pt-[40px] sm:pt-[59px] px-[34px] h-[626px] w-[424px] items-center" :class="{'bg-transparent shadow-none' : index!==1 }" data-aos="flip-left" data-aos-offset="200" :data-aos-delay="index * 100">
          <img :src="require(`~/assets/image/${item.image}`)" :alt="item.name" class="rounded-full mx-auto" height="166" width="166">
          <h1 class="text-[#FF64AE] text-[16px] font-semibold mt-[53px]">
            {{ item.position }}
          </h1>
          <h2 class="text-[18px] font-semibold mt-[15px]">
            {{ item.name }}
          </h2>
          <p class="text-[#8B8B8B] text-[14px] mt-[6px]">
            {{ item.description }}
          </p>
          <div class="flex mt-[50px] justify-center ">
            <nuxt-link class="h-[49px] w-[49px] bg-white rounded-full shadow-[_-2px_6px_16px_-1px_#E6E9FD] mr-[34px] p-[12px]" to="#">
              <TwitterIcon class="h-[25px] w-[25px]" />
            </nuxt-link>
            <nuxt-link class="h-[49px] w-[49px] bg-white rounded-full mr-[34px] p-[12px] shadow-[_-2px_6px_16px_-1px_#E6E9FD]" to="#">
              <FacebookIcon />
            </nuxt-link>
            <nuxt-link class="h-[49px] w-[49px] bg-white rounded-full mr-[34px] p-[12px] shadow-[_-2px_6px_16px_-1px_#E6E9FD]" to="#">
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
