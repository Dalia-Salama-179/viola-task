<template>
  <div class="text-center">
    <p class="main-color-text text-xl mb-3">Book your appointment </p>
    <p class="font-light main-title-m main-color-text">Book now Buy Letar!</p>
    <v-form @submit.prevent="submit" ref="form" class="px-5 px-lg-12">
      <v-text-field
          outlined
          v-model="form.name"
          :rules="nameRules"
          label="Full name *"
      >
      </v-text-field>

      <v-text-field
          outlined
          v-model="form.mobile"
          type="number"
          :rules="mobileRules"
          label="Mobile number *"
      >
      </v-text-field>

      <v-text-field
          outlined
          v-model="form.email"
          :rules="emailRules"
          label="Email *"
      >
      </v-text-field>

      <v-textarea outlined v-model="form.note"
                  hide-details
                  label="Note"
      >
      </v-textarea>

      <v-btn block color="primary" elevation="false" height="46" type="submit"
             class="my-5 text-capitalize sub-title-s">Create Account
      </v-btn>
    </v-form>

  </div>
</template>

<script>
export default {
  name: "BookForm",
  data() {
    return {
      form: {},
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length > 10) || 'Name must be more than 10 characters',
      ],
      mobileRules: [
        v => !!v || 'Mobile is required',
        v => (v && v.length == 11) || 'Mobile must be 11 number',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }
  },
  methods: {
    submit() {

    }
  }
}
</script>

<style scoped>

</style>