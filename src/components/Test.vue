<template>
  <div>
    <v-toolbar
      dark
      prominent
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>CityZen Volunteer Sign Up</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-toolbar>    
    <Calendar/>
    <Form/>
  </div>
</template>

<script>
import Calendar from './Calendar.vue';
import Form from './SignUpForm.vue';

export default {
    components: {
        'Calendar': Calendar,
        'Form': Form
    }
}
</script>

