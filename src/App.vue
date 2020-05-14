<template>
  <div id="cfl-volunteer-tasks" class="cfl-volunteer-tasks">
    <TaskList :tasks="tasks" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TaskList from './components/TaskList.vue'

export default Vue.extend({
  name: 'VolunteerTasks',
  components: {
    TaskList
  },
  data () {
    return {
      tasks: [{
        taskId: '12345',
        name: 'todo',
        description: 'longer explanation of thing',
        status: 'todo'
      }]
    }
  }
})
</script>

<style>
.cfl-volunteer-tasks {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
