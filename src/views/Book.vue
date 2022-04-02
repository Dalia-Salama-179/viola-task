<template>
  <v-container fluid class="pt-8 min-height-100 d-flex align-center">
    <v-row class="justify-space-between booking-page">
      <v-col cols="12" md="6" lg="7">
        <book-left/>
      </v-col>
      <v-col cols="12" md="6" lg="5">
        <book-form/>
      </v-col>
    </v-row>

    <img src="@/assets/images/Symbols.jpg" alt="Symbol" class="abs-img">
  </v-container>
</template>

<script>
import BookLeft from "@/components/BookLeft";
import BookForm from "@/components/BookForm";

export default {
  name: "Book",
  components: {BookForm, BookLeft}
}
</script>

<style scoped lang="scss">
.booking-page {
  position: relative;
  z-index: 5;
}
.abs-img {
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>