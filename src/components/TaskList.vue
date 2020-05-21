<template>
  <fieldset class="cfl-task-list">
    <legend>Volunteer Opportunities</legend>
    <p v-if="!tasks.length" class="cfl-no-tasks-info">
      We don't have any specific opportunities to show you right now, but if
      you submit your contact information we'll find a way you can help!
    </p>
    <ul v-else>
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

<script>
export default {
  name: 'TaskList',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    tasks: {
      type: Array,
      required: true
    },
    value: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      selectedTaskIds: this.value
    }
  },
  methods: {
    taskFieldId (task) {
      return `cfl-${task.taskId}`
    }
  }
}
</script>

<style>
.cfl-task-list > ul {
  columns: 12rem 3;
  list-style: none;
  margin-block-start: 0;
  margin-block-end: 0;
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
