<template>
  <v-carousel class="home-slider"
      :continuous="false"
      :cycle="cycle"
      :show-arrows="false"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      :height="height"
  >
    <v-carousel-item
        v-for="(slide, i) in data"
        :key="slide.id"
        :src="slide.image"
        class="d-flex align-center"
    >
      <div class="full-height d-flex align-center slider-content">
        <v-row>
          <v-col cols="12" lg="8" xl="6">
            <p class="text-xxl white-text">{{slide.title}}</p>
            <p class="sub-title white-text mb-8">{{slide.description}}</p>
            <v-btn elevation="false" class="sub-title-s text-capitalize"
                   :width="$vuetify.breakpoint.mdAndUp? '242': '180'" height="46">
              {{slide.action.label}}
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "HomeSlider",
  data() {
    return {
      colors: [
        'green',
        'secondary',
        'yellow darken-4',
        'red lighten-2',
        'orange darken-1',
      ],
      cycle: false,
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
      data: [
        {
          id: 1,
          title: 'Just one Step and you can Book your Appointment',
          description: '2 free consultation visits after the first diagnoses visit',
          action: {
            label: 'Subscribe Now!',
            link: '/'
          },
          image: require('../assets/images/home-slider-img.png')
        },
        {
          id: 2,
          title: 'Just one Step and you can Book your Appointment',
          description: '2 free consultation visits after the first diagnoses visit',
          action: {
            label: 'Subscribe Now!',
            link: '/'
          },
          image: require('../assets/images/home-slider-img.png')
        },
        {
          id: 3,
          title: 'Just one Step and you can Book your Appointment',
          description: '2 free consultation visits after the first diagnoses visit',
          action: {
            label: 'Subscribe Now!',
            link: '/'
          },
          image: require('../assets/images/home-slider-img.png')
        }

      ]
    }
  },
  computed: {
    height() {
      return window.innerHeight - 130
    }
  }
}
</script>

<style scoped lang="scss">
.home-slider {
  ::v-deep {
    .v-carousel {
      border-radius: 12px;
    }

    .v-carousel__controls__item {
      .mdi:before {
        font-size: 48px;
        border-radius: 12px;
      }

      &:before {
        display: none;
      }

      &.v-item--active {
        i {
          opacity: 1;
        }
      }
    }
  }

  .slider-content {
    padding: 70px;
  }
}

@media screen and (max-width: 960px){

  .home-slider {
    .slider-content {
      padding: 30px;
    }
  }
}
</style>