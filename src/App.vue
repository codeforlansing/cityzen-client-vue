<template>
  <form id="cfl-volunteer-tasks" class="cfl-volunteer-tasks">
    <TaskList :tasks="tasks" v-model="selectedTaskIds" />
    <ContactMethod v-model="contactMethod" />
    <div>
      <output
        v-if="message"
        :class="{
          success: formState === FormState.SUCCESS,
          error: formState === FormState.ERROR
        }"
      >{{ message }}</output>
      <button
        v-if="formState !== FormState.SUCCESS"
        :disabled="formState === FormState.SUBMITTING"
        @click="submit"
      >Submit</button>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import TaskList from './components/TaskList.vue'
import ContactMethod from './components/ContactMethod.vue'

enum FormState {
  INITIAL,
  SUBMITTING,
  SUCCESS,
  ERROR
}

export default Vue.extend({
  name: 'App',
  components: {
    TaskList, ContactMethod
  },
  data () {
    return {
      FormState,
      formState: FormState.INITIAL,
      message: '',
      contactMethod: { email: '' },
      selectedTaskIds: [],
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
  },
  methods: {
    reset () {
      this.selectedTaskIds.splice(0)
      this.contactMethod.email = ''
    },
    submit () {
      this.message = ''
      this.formState = FormState.SUBMITTING

      setTimeout(() => {
        if (Math.random() < 0.5) {
          this.message = 'An error occurred while submitting the form.'
          this.formState = FormState.ERROR
        } else {
          this.reset()
          this.message = 'Thank you for volunteering! We\'ll contact you soon.'
          this.formState = FormState.SUCCESS
        }
      }, 2000)
    }
  }
})
</script>

<style>
.cfl-volunteer-tasks output.error {
  display: block;
  color: red;
}
</style>
