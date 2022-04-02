<template>
  <v-app id="app">
    <div v-if="this.$route.meta.layout">
      <the-header/>
    </div>
    <vue-page-transition name="fade-in-right">
      <router-view/>
    </vue-page-transition>
  </v-app>
</template>

<script>
import TheHeader from "@/components/layouts/TheHeader";

export default {
  name: 'App',
  components: {TheHeader}
}
</script>

<style lang="scss">
</style>
