import Vue from 'vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlug, faSave, faSpinner, faSync } from '@fortawesome/free-solid-svg-icons'

// Add the icons to the library
library.add(
  faPlug,
  faSave,
  faSpinner,
  faSync
)

// Register it as a component to the vue instance
Vue.component('font-awesome-icon', FontAwesomeIcon)
