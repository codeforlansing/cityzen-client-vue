<template>
  <div id="volunteer-tasks">
    <TaskList msg="Welcome to the Volunteer Tasks!"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TaskList from './components/TaskList.vue'

export default Vue.extend({
  name: 'VolunteerTasks',
  components: {
    TaskList
  }
})
</script>

<style>
#volunteer-tasks {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
