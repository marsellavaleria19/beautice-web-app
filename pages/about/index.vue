<template>
  <div>
    <section class="mt-[125px] w-full">
      <AboutIndex />
    </section>
    <section class="mt-[-550px] bg-[url('~/assets/image/background-team-about.svg')] bg-no-repeat bg-right">
      <TeamAbout />
    </section>
    <section class="mt-[1300px] sm:mt-[1200px] md:mt-[600px] lg:mt-[600px] xl:mt-[200px]">
      <SloganSection />
    </section>
    <div class="bg-[url('~/assets/image/background-about-page.svg')] bg-no-repeat">
      <section class="mt-[112px]" data-aos="fade-left" :data-aos-once="true">
        <VisionMissionSection>
          <template>
            <img :src="require(`~/assets/image/ilustration/${vision.image}`)" loading="lazy" class="mb-[20px] mx-auto">
            <div class="text-center lg:text-left">
              <BaseTitle :title="vision.title" class="mb-[12px]" />
              <BaseSubtitle
                :subtitle="vision.subtitle"
                class="lg:max-w-[411px] mb-[24px]"
              />
              <div class="lg:max-w-[475px]" v-html="vision.description" />
            </div>
          </template>
        </VisionMissionSection>
      </section>
      <section class="mt-[50px] md:[100px]" data-aos="fade-right" :data-aos-once="true">
        <VisionMissionSection :reverse="true">
          <template #mission>
            <img :src="require(`~/assets/image/ilustration/${mission.image}`)" loading="lazy" class="mb-[20px] mx-auto">
            <div class="text-center lg:text-left order-first">
              <BaseTitle :title="mission.title" class="mb-[12px]" />
              <BaseSubtitle :subtitle="mission.subtitle" class="lg:max-w-[545px] mb-[24px]" />
              <div class="lg:max-w-[475px]" v-html="mission.description" />
            </div>
          </template>
        </VisionMissionSection>
      </section>
      <section class="mt-[134px]">
        <ClientSection />
      </section>
    </div>
  </div>
</template>

<script>
import AboutIndex from '~/components/About'
import TeamAbout from '~/components/About/Team'
import SloganSection from '~/components/About/Slogan'
import VisionMissionSection from '~/components/About/VisionMission'
import ClientSection from '~/components/About/ClientSection'
import { vision, mission } from '~/constant/about-page-data.ts'
import aosMixin from '~/mixins/aos'

export default {
  components: {
    AboutIndex,
    TeamAbout,
    SloganSection,
    VisionMissionSection,
    ClientSection
  },
  mixins: [aosMixin],
  layout: 'BaseLayout',
  data () {
    return {
      vision, mission
    }
  },
  mounted () {
    this.$store.commit('setActivePage', 'About')
  }
}
</script>
