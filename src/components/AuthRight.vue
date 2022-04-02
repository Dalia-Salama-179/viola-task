<template>
  <div class="auth-desc">
    <div class="text-right mb-6 mb-lg-12">
      <a>
        <v-icon color="white">mdi-close</v-icon>
      </a>
    </div>
    <p class="text-xxl font-med mb-4 white-text">Just one Step and you can Book your Appointment</p>
    <p class="sub-title white-text mb-7">2 free consultation visits after the first diagnoses visit</p>
    <p class="white-text mb-16">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
      tempor invidunt ut labore
      et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus </p>

    <div>
      <div class="auth-flag d-flex justify-center align-center">
        <img src="@/assets/images/united-states icon.svg" alt="">
      </div>
      <div class="auth-rate">

        <div class="mb-4 mb-md-10">
          <img class="mr-1" src="@/assets/images/complete-star.svg" alt="start" v-for="i in 4" :key="i">
          <img class="mr-1" src="@/assets/images/not-complete-star.svg" alt="start">
        </div>

        <p class="font-light">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
          et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus </p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "AuthRight"
}
</script>

<style scoped lang="scss" src="../assets/styles/auth-page.scss">

</style>