<template>
  <BaseColumn class="gap-5 md:gap-[190px] justify-items-center place-content-stretch">
    <template>
      <img :src="require(`~/assets/image/ilustration/${image}`)" :ält="title" :class="{'md:order-last':reverse}" width="475" height="314">
      <div>
        <h1 class="mb-[12px]">
          {{ title }}
        </h1>
        <h2 class="mb-[12px]">
          {{ subtitle }}
        </h2>
        <p class="mb-[9px]">
          {{ description }}
        </p>
        <nuxt-link class="text-[#091156] text-[16px] font-semibold tracking-widest" :to="link">
          <div class="flex">
            <div class="mr-[13px]">
              Make an Appointment
            </div>
            <AngleDoubleRight class="w-[25px] h-[25px]" />
          </div>
        </nuxt-link>
      </div>
    </template>
  </BaseColumn>
</template>

<script>
import AngleDoubleRight from '~/assets/icons/angle-double-right.svg?inline'
export default {
  name: 'ColumnSection',
  components: {
    AngleDoubleRight
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: '#'
    },
    image: {
      type: String,
      default: ''
    },
    reverse: {
      type: Boolean,
      default: false
    }
  }
}
</script>
