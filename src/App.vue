<template>
  <v-app>
    <v-content>
      <Home/>
    </v-content>
  </v-app>
</template>

<script>

import Home from './components/Home'
export default {
      components: {
        'Home': Home
    }
}
</script>