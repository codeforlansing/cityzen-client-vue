<template>
  <form id="cfl-volunteer-tasks" class="cfl-volunteer-tasks">
    <output v-if="tasksError" class="error">
      {{ tasksError }}
    </output>
    <TaskList v-else :tasks="tasks" v-model="selectedTaskIds" />

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
import validEmail from '@/util/valid-email'

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
  props: {
    tasksHref: {
      type: String,
      required: true
    }
  },
  beforeMount () {
    this.loadTasks()
  },
  data () {
    return {
      FormState,
      formState: FormState.INITIAL,
      message: '',
      contactMethod: { email: '' },
      selectedTaskIds: [],
      tasks: [],
      tasksError: ''
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

      if (!this.validate()) {
        this.formState = FormState.ERROR
      }

      if (this.formState !== FormState.ERROR) {
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
    },
    validate () {
      if (!validEmail(this.contactMethod.email)) {
        this.message = 'Please enter a valid email address.'
        return false
      }
      return true
    },
    async loadTasks () {
      try {
        const response = await fetch(this.tasksHref)
        const responseJson = await response.json()
        if (!response.ok) {
          throw new Error(
            `Server returned an error: ${JSON.stringify(responseJson)}`
          )
        }
        this.tasks = responseJson
      } catch (error) {
        this.tasksError =
          'The tasks couldn\'t be loaded. Please try again later.'
        console.error(this.tasksError, error)
      }
    }
  }
})
</script>

<style>
.cfl-volunteer-tasks output.error {
  display: block;
  color: red;
  margin-bottom: 0.5rem;
}
</style>
