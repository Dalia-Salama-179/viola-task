<template>
  <div class="auth-form">

    <img src="@/assets/images/logo-vertical.svg" alt="">
    <p class="main-color-text text-xl mb-3">Create Your Account</p>
    <p class="font-light main-title-m title-color">It’s Free!</p>
    <v-form @submit.prevent="submit">
      <v-text-field
          class="mb-3"
          outlined
          label="Full name *"
          v-model="form.name"
          hide-details
      >
      </v-text-field>

      <v-text-field
          class="mb-3"
          outlined
          label="Mobile number *"
          v-model="form.mobile"
          hide-details
      ></v-text-field>

      <v-text-field
          class="mb-3"
          outlined
          label="Email *"
          v-model="form.email"
          hide-details
      ></v-text-field>

      <v-btn block color="primary" elevation="false" height="46" type="submit"
             class="my-5 text-capitalize sub-title-s">Book an Appointment
      </v-btn>
    </v-form>

    <div class="auth-or mb-10">
      <span>OR</span>
    </div>
    <div class="d-flex justify-center flex-wrap mb-4 mb-md-11">
      <google-button class="mx-1" />
      <facebook-button class="mx-1" />
    </div>

    <div>
      <p>
        <span class="mx-1 light-gray">Already have Account! </span>
        <router-link to="/" class="mx-1 main-color-text">Login Now!</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import GoogleButton from "@/components/buttons/GoogleButton";
import FacebookButton from "@/components/buttons/FacebookButton";
export default {
  name: "AuthForm",
  components: {FacebookButton, GoogleButton},
  data() {
    return {
      form: {}
    }
  },
  methods: {
    submit() {
      localStorage.setItem('user', JSON.stringify(this.form))
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="scss">
.auth-or {
  span {
    position: relative;
    color: rgba(#000000, 0.3);

    &:after, &:before {
      content: '';
      position: absolute;
      width: 146px;
      height: 1px;
      background-color: rgba(#29B2FE, 0.14);
      border-radius: 8px;
      top: 10px;
    }

    &:before {
      left: 22px;
    }

    &:after {
      right: 22px;
    }

  }
}

@media screen and (max-width: 600px){
  .auth-or {
    span {
      &:after, &:before {
        width: 70px;
      }
    }
  }
}

</style>