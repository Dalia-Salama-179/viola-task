<template>
  <header class="py-9">
    <v-container fluid class="py-0 d-flex justify-space-between align-center">
      <img src="@/assets/images/logo.svg" alt="">


      <nav class="sub-title-s d-none d-md-block">
        <router-link class="mx-3 mx-lg-4"
                     v-for="(page, index) in pages"
                     :key="index"
                     :to="page.link">
          {{page.name}}
        </router-link>
      </nav>

      <div class="d-none d-md-block">
        <v-btn class="white-text sub-title-s" color="primary" :width="$vuetify.breakpoint.lgAndUp? '240': '120'" height="46" elevation="false"
        to="/auth">LOGIN</v-btn>
      </div>

      <div class="d-block d-md-none">
        <v-btn @click="drawer = !drawer" icon>
          <v-icon icon-color="#000"
                  bg-color="#F5F5F5"
                  size="25">
            mdi-menu
          </v-icon>
        </v-btn>
      </div>
      <v-navigation-drawer
          v-model="drawer"
          absolute
          temporary
      >
        <div class="pa-2">
          <img src="@/assets/images/logo.svg" alt="">
        </div>
        <v-list>
          <template v-for="(page, index) in pages">
            <v-list-item :key="index">
              {{page.name}}
            </v-list-item>
            <v-divider />
          </template>
        </v-list>

        <div class="pa-4">
          <v-btn class="white-text sub-title-s" color="primary" block  elevation="false"
                 to="/auth">LOGIN</v-btn>
        </div>
      </v-navigation-drawer>
    </v-container>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      drawer: false,
      pages: [
        { name: 'Home', link: '/'},
        { name: 'About us', link: '/'},
        { name: 'Services', link: '/'},
        { name: 'Covid 19', link: '/'},
        { name: 'Contact us', link: '/'},
        { name: 'Blogs', link: '/'},
        { name: 'Help', link: '/'},
      ]
    }
  }
}
</script>

<style scoped lang="scss">

</style>