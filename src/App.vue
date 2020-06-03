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
        :class="{ 'cfl-task-selected': isAnyTaskSelected }"
        class="cfl-volunteer-button"
        @click="submit"
      >Submit</button>
    </div>
  </form>
</template>

<script lang="ts">
import TaskList from './components/TaskList.vue'
import ContactMethod from './components/ContactMethod.vue'
import validEmail from './util/valid-email'
import requestJson from './util/http/request-json'
import postJson from './util/http/post-json'

const FormState = {
  INITIAL: 0,
  SUBMITTING: 1,
  SUCCESS: 2,
  ERROR: 3
}

export default {
  name: 'App',
  components: {
    TaskList, ContactMethod
  },
  props: {
    tasksHref: {
      type: String,
      default: '/api/tasks'
    },
    volunteerHref: {
      type: String,
      default: '/api/users/:id/tasks/claim'
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
  computed: {
    isAnyTaskSelected () {
      return this.selectedTaskIds.length > 0
    }
  },
  methods: {
    reset () {
      this.selectedTaskIds.splice(0)
      this.contactMethod.email = ''
    },
    validate () {
      if (!validEmail(this.contactMethod.email)) {
        this.message = 'Please enter a valid email address.'
        return false
      }
      return true
    },
    async submit () {
      this.message = ''
      this.formState = FormState.SUBMITTING

      if (!this.validate()) {
        this.formState = FormState.ERROR
      }

      if (this.formState !== FormState.ERROR) {
        try {
          const contactId = encodeURIComponent(this.contactMethod.email)
          const volunteerUrl = this.volunteerHref.replace(':id', contactId)
          await postJson(volunteerUrl, { tasks: this.selectedTaskIds })

          this.reset()
          this.message = 'Thank you for volunteering! We\'ll contact you soon.'
          this.formState = FormState.SUCCESS
        } catch (error) {
          this.message = 'An error occurred while submitting the form.'
          this.formState = FormState.ERROR
          console.error(this.message, error)
        }
      }
    },
    async loadTasks () {
      try {
        this.tasks = await requestJson(this.tasksHref)
      } catch (error) {
        this.tasksError =
          'The tasks couldn\'t be loaded. Please try again later.'
        console.error(this.tasksError, error)
      }
    }
  }
}
</script>

<style>
.cfl-volunteer-tasks output.error {
  display: block;
  color: red;
  margin-bottom: 0.5rem;
}
</style>
