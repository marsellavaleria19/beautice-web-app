<template class="bg-white">
  <div>
    <HeaderLandingPage />
    <!-- MAIN SERVICE -->
    <section
      class="mt-[50px] md:mt-[20px] lg:mt-[131px]"
      data-aos="fade-right"
    >
      <MainService />
    </section>
    <!-- ABOUT -->
    <section
      class="mt-[-50px] md:mt-[-300px] bg-[url('~/assets/image/background-header-about.svg')] bg-right bg-no-repeat"
      data-aos="fade-left"
      data-aos-delay="1000"
      :data-aos-once="true"
    >
      <AboutLandingPage />
    </section>
    <!-- PROFESSIONAL TEAM -->
    <section class="mt-[50px] sm:mt-[-157px] md:pt-[354px] lg:pt-[200px]">
      <BaseProfessionalTeam />
    </section>
    <section class="contact-section h-[1072px] mt-[-50px] md:mt-[-100px] pt-[50px] md:pt-[100px] lg:pt-[207px]">
      <ContactLandingPage />
    </section>
    <BaseFooter class="mt-[69.66px]" />
  </div>
</template>

<script>
import HeaderLandingPage from '~/components/LandingPage/Header'
import MainService from '~/components/LandingPage/MainService'
import AboutLandingPage from '~/components/LandingPage/About'
import ContactLandingPage from '~/components/LandingPage/Contact'
import aosMixin from '~/mixins/aos'

export default {
  name: 'IndexPage',
  components: {
    HeaderLandingPage,
    MainService,
    AboutLandingPage,
    ContactLandingPage
  },
  mixins: [aosMixin],
  mounted () {
    this.$store.commit('setActivePage', 'Home')
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
