<template>
  <v-app id="app">
    <div v-if="this.$route.meta.layout">
      <the-header />
    </div>
    <router-view/>
  </v-app>
</template>

<script>
import TheHeader from "@/components/layouts/TheHeader";
export default {
  name: 'App',
  components: { TheHeader }
}
</script>

<style lang="scss">
</style>
