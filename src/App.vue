<template>
  <v-app>
    <v-content>
      <Home :task-path="taskPath" />
    </v-content>
  </v-app>
</template>

<script>
import Home from './components/Home'
import config from '../public/config'

export default {
  components: {
    Home: Home
  },
  data () {
    return {
      taskPath: ''
    }
  },
  created () {
    this.taskPath = config.taskPath
  }
}
</script>
