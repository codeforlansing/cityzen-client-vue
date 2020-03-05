<template>
  <v-card
    class="mx-auto overflow-hidden"
    height="100%"
  >
    <v-app-bar
      color="deep-orange"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Fledge Volunteer Form</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-orange--text text--accent-4"
        >
          <v-list-item to="/Look1">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Look1</v-list-item-title>
          </v-list-item>

          <v-list-item to="/Look2">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Look2</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <router-view/>
        <v-footer
      color="deep-orange"
      app
    >
      <span class="white--text">&copy; Code For Lansing 2020</span>
    </v-footer>
  </v-card>
</template>

<script>

export default {
    data() {
        return {
            drawer: false,
            group: null
        }
    }
}
</script>