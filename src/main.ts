import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const mountElement = document.getElementById('cfl-volunteer-tasks')
if (!mountElement) {
  console.warn(
    'Unable to render Cityzen client.',
    '#cfl-volunteer-tasks element does not exist.'
  )
} else {
  new Vue({
    render (createElement) {
      return createElement(App, {
        props: {
          tasksHref: mountElement.dataset.tasksHref
        }
      })
    }
  }).$mount(mountElement)
}
