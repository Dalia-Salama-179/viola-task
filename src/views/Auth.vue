<template>
  <div class="auth-page min-height-100">
    <v-row class="min-height-100">
      <v-col cols="12" lg="6" class="text-center min-height-100 d-flex align-center">
        <auth-form />
      </v-col>
      <v-col cols="12" lg="6" class="main-color-bg text-center min-height-100 d-flex align-center">
        <div class="auth-desc">
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
      </v-col>
    </v-row>
  </div>
</template>

<script>
import AuthForm from "@/components/AuthForm";
export default {
  name: "Auth.vue",
  components: {AuthForm}
}
</script>

<style scoped lang="scss" src="../assets/styles/auth-page.scss">

</style>
