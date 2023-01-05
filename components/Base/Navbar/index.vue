<template>
  <nav class="w-full container mx-auto max-w-[1140px]">
    <div class="flex items-center justify-between">
      <img src="~/assets/logo/logo-beautic.svg" alt="logo" height="36" width="258">
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-blackhover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
      <ul class="hidden lg:flex items-center block text-poppins">
        <li v-for="items in navigator" :key="items.name" class="mr-6">
          <nuxt-link v-if="isActive==items.name" class="text-[#414880] font-bold" :to="items.link">
            {{ items.name }}+
          </nuxt-link>
          <nuxt-link v-else class="text-[#8B8B8B] text-[16px] font-medium hover:text-[#414880] hover:font-bold" :to="items.link">
            {{ items.name }}
          </nuxt-link>
        </li>
        <BaseButton title-button="Contact" />
      </ul>
    </div>
  </nav>
</template>

<script>
import { navigator } from '~/constant/navigation'

export default {
  name: 'BaseNavbar',
  data () {
    return {
      navigator,
      isActive: 'Home'
    }
  }
}
</script>
