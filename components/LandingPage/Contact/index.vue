<template>
  <div class="container mx-auto max-w-[1290px]">
    <div class="grid grid-cols-1 lg:grid-cols-2 place-items-center">
      <div class="hidden lg:block h-[614px] w-[520px]">
        <img src="~/assets/image/ilustration/contact-ilustration.svg" alt="contact-animation" height="402" width="519" class="mt-[50px]">
      </div>
      <div class="container mx-auto text-center lg:text-left">
        <BaseTitle title="Contact Us" />
        <BaseSubtitle subtitle="Send your inquiry to our expert team" class="mt-[12px] lg:max-w-[404px]" />
        <BaseDetail class="mt-[12px]">
          Lorem ipsum dolor sit amet nulla turapis tellus.
        </BaseDetail>
        <div class="mt-[44px] mb-[69.66px] md:max-w-[520px]">
          <BaseContactForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ContactLandingPage'
}
</script>

<style scoped>
 .contact-section{
    background-image: url('~/assets/image/slide-background-contact.svg');
    background-repeat: no-repeat;
  }
</style>
