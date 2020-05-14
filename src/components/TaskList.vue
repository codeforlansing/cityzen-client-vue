<template>
  <div class="cfl-task-list">
    <ol>
      <li v-for="task in tasks" :key="task.taskId">{{ task.name }}</li>
    </ol>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Task } from '@types'

export default Vue.extend({
  name: 'TaskList',
  props: {
    tasks: {
      type: Array as PropType<Array<Task>>,
      required: true
    }
  }
})
</script>

<style>
.cfl-task-list h3 {
  margin: 40px 0 0;
}

.cfl-task-list ul {
  list-style-type: none;
  padding: 0;
}

.cfl-task-list li {
  display: inline-block;
  margin: 0 10px;
}

.cfl-task-list a {
  color: #42b983;
}
</style>
