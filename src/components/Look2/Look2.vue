<template>
  <v-container>
    <v-row>
      <v-carousel
        cycle
        height="400"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
        >
          <v-sheet
            :color="colors[i]"
            height="100%"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <div class="display-3">
                {{ slide }} Slide
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-row>
    <v-row>
      <v-col class="col-xs12">
        <v-card>
          <div>
            <h1 class="pl-6 pt-3">
              Volunteer
            </h1>
          </div>
          <v-col>
            <v-text-field
              value
              placeholder="Enter Full Name Here"
              label="Full Name"
              filled
            />
          </v-col>
          <v-col>
            <v-text-field
              value
              placeholder="fledgevolunteer@thefledge.com"
              label="Email"
              filled
            />
          </v-col>
          <v-col>
            <v-text-field
              value
              placeholder="Any Additional Notes for the Organizer"
              label="Notes"
              filled
            />
          </v-col>
          <v-col>
            <div>
              <v-btn
                large
                color="primary"
              >
                Sign-Up!
              </v-btn>
            </div>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4'
      ],
      slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth']
    }
  }
}
</script>
