import Vue from 'vue'
import App from './App.vue'
import i18n from './plugins/i18n'

Vue.config.productionTip = false

const mountElement = document.getElementById('cfl-volunteer-tasks')
if (!mountElement) {
  console.warn(
    'Unable to render Cityzen client.',
    '#cfl-volunteer-tasks element does not exist.'
  )
} else {
  new Vue({
    i18n,
    render (createElement) {
      return createElement(App, {
        props: mountElement.dataset
      })
    }
  }).$mount(mountElement)
}
