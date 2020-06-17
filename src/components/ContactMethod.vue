<template>
  <fieldset class="cfl-contact-method">
    <legend>{{ $t('contactMethodHeading') }}</legend>
    <label for="cfl-email">
      <span>{{ $t('emailInputLabel') }}</span>
      <input
        type="email"
        id="cfl-email"
        v-model="contactMethod.email"
        required
      >
    </label>
  </fieldset>
</template>

<script>
export default {
  name: 'ContactMethod',
  model: {
    prop: 'contactMethod',
    event: 'input'
  },
  props: {
    contactMethod: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
label[for="cfl-email"] > span,
label[for="cfl-email"] > input {
  display: block;
  width: 100%;
  max-width: 16rem;
}
</style>
