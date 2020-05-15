<template>
  <div id="cfl-volunteer-tasks" class="cfl-volunteer-tasks">
    <TaskList :tasks="tasks" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TaskList from './components/TaskList.vue'

export default Vue.extend({
  name: 'App',
  components: {
    TaskList
  },
  data () {
    return {
      tasks: [
        {
          taskId: '11111',
          name: 'Wash dishes (evening)',
          description: '',
          status: 'todo'
        },
        {
          taskId: '22222',
          name: 'Water the plants daily',
          description: '',
          status: 'todo'
        },
        {
          taskId: '33333',
          name: 'Feed and water chickens',
          description: '',
          status: 'todo'
        },
        {
          taskId: '44444',
          name: 'Vacuum the sidewalk',
          description: '',
          status: 'todo'
        },
        {
          taskId: '55555',
          name: 'Keep Alexa company',
          description: '',
          status: 'todo'
        },
        {
          taskId: '66666',
          name: 'Reboot the flux capacitor',
          description: '',
          status: 'todo'
        },
        {
          taskId: '77777',
          name: 'Respool all of the 3D printer filament daily (yes, all of it)',
          description: '',
          status: 'todo'
        },
        {
          taskId: '88888',
          name: 'Weed',
          description: '',
          status: 'todo'
        },
        {
          taskId: '99999',
          name: 'Eject the warp core',
          description: '',
          status: 'todo'
        },
        {
          taskId: '00000',
          name: 'Collect more Vespene gas',
          description: '',
          status: 'todo'
        },
        {
          taskId: 'aaaaa',
          name: 'Restock nutribars',
          description: 'Spread one scoop of feed outside of coop',
          status: 'todo'
        }
      ]
    }
  }
})
</script>
