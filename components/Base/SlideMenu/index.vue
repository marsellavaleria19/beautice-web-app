<template>
  <div v-show="isShow" class="bg-white fixed z-10 left-0 top-0 overflow-x-hidden h-full w-full ease-in duration-300">
    <div class="container mx-auto">
      <div class="flex justify-end mt-9" @click="$emit('closeSideMenu')">
        <CloseIcon class="fill-pink-500" />
      </div>
      <div class="mt-16 w-full h-full">
        <ul class="text-center">
          <li v-for="items in navigator" :key="items.name" class="mb-8">
            <nuxt-link v-if="getActivePage==items.name" class="text-[#414880] font-bold" :to="items.link">
              {{ items.name }}+
            </nuxt-link>
            <nuxt-link v-else class="text-[#8B8B8B] text-[16px] font-medium hover:text-[#414880] hover:font-bold" :to="items.link">
              {{ items.name }}
            </nuxt-link>
          </li>
          <BaseButton class="h-[52px] w-full">
            Contact
          </BaseButton>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import CloseIcon from '~/assets/icons/close-icon.svg?inline'

export default {
  name: 'BaseSlideMenu',
  components: {
    CloseIcon
  },
  props: {
    navigator: {
      type: Array,
      default: () => []
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getActivePage () {
      return this.$store.state.page
    }
  }
}
</script>
