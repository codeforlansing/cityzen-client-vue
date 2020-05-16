<template>
  <fieldset class="cfl-contact-method">
    <legend>Contact Method</legend>
    <label for="cfl-email">
      <span>Email address</span>
      <input
        type="email"
        id="cfl-email"
        v-model="contactMethod.email"
        required
      >
    </label>
  </fieldset>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { ContactMethod } from '@types'

export default Vue.extend({
  name: 'ContactMethod',
  model: {
    prop: 'contactMethod',
    event: 'input'
  },
  props: {
    contactMethod: {
      type: Object as PropType<ContactMethod>,
      required: true
    }
  }
})
</script>

<style>
label[for="cfl-email"] > span,
label[for="cfl-email"] > input {
  display: block;
  width: 100%;
  max-width: 16rem;
}
</style>
