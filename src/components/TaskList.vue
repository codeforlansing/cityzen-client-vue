<template>
  <fieldset class="cfl-task-list">
    <legend>Volunteer Opportunities</legend>
    <ul>
      <li v-for="task in tasks" :key="task.taskId">
        <label :for="task.taskId">
          <input
            type="checkbox"
            :id="task.taskId"
            :value="task.taskId"
            v-model="checkedTaskIds"
          >
          {{ task.name }}
        </label>
      </li>
    </ul>
  </fieldset>
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
  },
  data () {
    return {
      checkedTaskIds: []
    }
  }
})
</script>

<style>
.cfl-task-list > ul {
  columns: 12rem 3;
  list-style: none;
  padding-inline-start: 0;
}

.cfl-task-list > ul > li {
  display: inline-block;
  width: 100%;
}

.cfl-task-list > ul > li > label {
  display: flex;
  align-items: flex-start;
}
</style>
