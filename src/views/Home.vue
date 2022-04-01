<template>
  <div class="home">
    <v-container fluid class="py-0">
      <home-slider />
    </v-container>
  </div>
</template>

<script>

import HomeSlider from "@/components/HomeSlider";
export default {
  name: 'Home',
  components: {HomeSlider},
}
</script>
