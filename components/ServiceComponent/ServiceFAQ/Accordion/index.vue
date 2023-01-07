<template>
  <details class="border-b-2 border-[#FAFAFA]">
    <summary>
      <div class="flex justify-between items-center pb-[16px] pl-[35px] pr-[7.45px]">
        <div class="truncate overflow-hidden min-w-0 flex-1 text-[16px] font-semibold text-[#091156]">
          {{ title }}
        </div>
        <div class="flex-shrink-0 details-icon ml-2">
          <AngleDownIcon class="w-[15.92px] h-[9.28px]" />
        </div>
      </div>
    </summary>
    <!-- eslint-disable vue/no-v-html -->
    <div class="text-[14px] text-[#8B8B8B] my-[16px] mx-[24px] md:my-[52px] md:ml-[76px] md:mr-[63px]" v-html="description" />
  </details>
</template>

<script>
import AngleDownIcon from '~/assets/icons/angle-down.svg?inline'

export default {
  name: 'AccordionDetail',
  components: {
    AngleDownIcon
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  },
  mounted () {
    // Fetch all the details element.
    const accordionDetail = document.querySelectorAll('details')
    // Add the onclick listeners.
    accordionDetail.forEach((targetDetail) => {
      targetDetail.addEventListener('click', () => {
        // Close all the details that are not targetDetail.
        accordionDetail.forEach((detail) => {
          if (detail !== targetDetail) {
            detail.removeAttribute('open')
          }
        })
      })
    })
  }
}
</script>

<style scoped>

  /* details summary{
    padding: 0 16px;
  } */

  details summary::marker {
   content:"";
  }

  .details-icon{
    transform: rotate(0deg);
  }

  /* .arrow svg rect{
    fill:#FAFAFA;
    stroke: #EEEEEE;
  } */

  .arrow svg line{
    stroke: #757575;
  }

  details[open] {
    background-color: #F6F7FF;
    border-radius: 0px 0px 20px 20px;
  }

  details[open] summary{
    border-bottom: 1px solid #091156;
    padding: 0px;
  }

  details[open] > summary div {
    background-color: white;
  }
  details[open] > summary .details-icon {
    transform: rotate(180deg);
    transition: 0.4s;
  }

  /* details[open] > summary .arrow svg line {
    stroke:white;
  }
  details[open] > summary .arrow svg rect {
    fill: #16A75C;
  } */

</style>
