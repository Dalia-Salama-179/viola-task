<template>
  <div class="auth-page min-height-100">
    <v-row class="min-height-100">
      <v-col cols="12" lg="6" class="text-center min-height-100 d-flex align-center">
        <auth-form />
      </v-col>
      <v-col cols="12" lg="6" class="main-color-bg text-center min-height-100 d-flex align-center">
        <auth-right />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import AuthForm from "@/components/AuthForm";
import AuthRight from "@/components/AuthRight";
export default {
  name: "Auth.vue",
  components: {AuthRight, AuthForm}
}
</script>

<style scoped lang="scss" src="../assets/styles/auth-page.scss">

</style>
