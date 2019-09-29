import Vue from 'vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMinusCircle, faPlug, faSave, faSpinner, faSync, faTimes } from '@fortawesome/free-solid-svg-icons'

// Add the icons to the library
library.add(
  faMinusCircle,
  faPlug,
  faSave,
  faSpinner,
  faSync,
  faTimes
)

// Register it as a component to the vue instance
Vue.component('font-awesome-icon', FontAwesomeIcon)
