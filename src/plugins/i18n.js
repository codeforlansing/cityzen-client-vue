import Vue from 'vue'
import VueI18n from 'vue-i18n'
import defaultMessages from './default-messages.json'
import merge from 'lodash/merge'

Vue.use(VueI18n)

// Initialize default messages
const messages = Object.assign({}, defaultMessages)

// Attempt to load and use client messages
const clientMessagesScript = document.getElementById('cfl-cityzen-messages')
if (clientMessagesScript) {
  try {
    const clientMessagesJson = clientMessagesScript.textContent
    const clientMessages = JSON.parse(clientMessagesJson)
    merge(messages, clientMessages)
  } catch (error) {
    console.warn(
      'cfl-cityzen-messages exists but cannot be read. Using defaults instead.',
      error
    )
  }
}

const i18n = new VueI18n({
  locale: 'en',
  messages
})

export default i18n
