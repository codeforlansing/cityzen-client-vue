<template>
  <fieldset class="cfl-task-list">
    <legend>Volunteer Opportunities</legend>
    <ul>
      <li v-for="task in tasks" :key="task.taskId">
        <label :for="taskFieldId(task)">
          <input
            type="checkbox"
            :id="taskFieldId(task)"
            :value="task.taskId"
            v-model="selectedTaskIds"
            @change="$emit('change', selectedTaskIds)"
          >
          <span>{{ task.name }}</span>
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
  model: {
    prop: 'selectedTaskIds',
    event: 'change'
  },
  props: {
    tasks: {
      type: Array as PropType<Array<Task>>,
      required: true
    },
    selectedTaskIds: {
      type: Array as PropType<Array<string>>,
      required: true
    }
  },
  methods: {
    taskFieldId (task: Task) {
      return `cfl-${task.taskId}`
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
