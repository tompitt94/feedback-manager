import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import './../node_modules/bulma/css/bulma.css'

const feedbackmanager = createApp(App).use(router).mount('#app')

// Function to make components with filename beginning with "Base" globally available on the app
const requireComponent = require.context('./components', true, /Base[A-Z]\w+\.(vue|js)$/)
requireComponent.keys().forEach(function (fileName) {
  let baseComponentConfig = requireComponent(fileName)
  baseComponentConfig = baseComponentConfig.default || baseComponentConfig
  const baseComponentName = baseComponentConfig.name || (
    fileName
      .replace(/^.+\//, '')
      .replace(/\.\w+$/, '')
  )
  feedbackmanager.component(baseComponentName, baseComponentConfig)
})

feedbackmanager.mount('#app')
