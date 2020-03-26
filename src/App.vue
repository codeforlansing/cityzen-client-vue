<template>
  <v-app>
    <v-content>
      <Home v-bind:getTaskPath="getTaskPath" />
    </v-content>
  </v-app>
</template>

<script>
import Home from "./components/Home";
import config from '../public/config'

export default {
  data() { return {
      getTaskPath : "",
    }
  },
  components: {
    Home: Home
  },
  created() {
    this.getTaskPath = config.getTaskPath;
  }
};
</script>