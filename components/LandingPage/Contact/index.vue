<template>
  <div class="container mx-auto max-w-[1290px]">
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="hidden md:block">
        <img src="~/assets/image/ilustration/contact-ilustration.svg" alt="contact-animation" height="402" width="519" class="mt-[268.44px]">
      </div>
      <div>
        <h1 class="text-[#FF64AE] text-[16px] font-semibold">
          Contact Us
        </h1>
        <h2 class="text-[#091156] text-[36px] font-semibold mt-[12px]">
          Send your inquiry to our expert team
        </h2>
        <p class="text-[16px] text-[#8B8B8B] mt-[12px]">
          Lorem ipsum dolor sit amet nulla turapis tellus.
        </p>
        <form class="mt-[44px] mb-[69.66px]">
          <div class="mb-[38px] md:flex">
            <BaseInput placeholder="Firstname" class="mr-[36px] md:w-1/2 mb-[38px] md:mb-0" />
            <BaseInput placeholder="Lastname" class="md:w-1/2" />
          </div>
          <div class="mb-[38px]">
            <BaseInput placeholder="Email Address" />
          </div>
          <div class="mb-[38px]">
            <BaseInput placeholder="Subject Message" />
          </div>
          <div class="mb-[38px]">
            <BaseInput placeholder="Email Address" />
          </div>
          <div class="mb-[38px]">
            <BaseTextArea placeholder="Your inquiry here" class="h-[239px]" />
          </div>
          <BaseButton class="w-[248px] h-[58px]">
            Send Message
          </BaseButton>
        </form>
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
