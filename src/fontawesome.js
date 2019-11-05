import Vue from 'vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faMinusCircle,
  faPlay,
  faPlug,
  faPlusCircle,
  faSave,
  faSpinner,
  faSync,
  faTimes,
  faTrash
} from '@fortawesome/free-solid-svg-icons'

// Add the icons to the library
library.add(
  faMinusCircle,
  faPlay,
  faPlug,
  faPlusCircle,
  faSave,
  faSpinner,
  faSync,
  faTimes,
  faTrash
)

// Register it as a component to the vue instance
Vue.component('font-awesome-icon', FontAwesomeIcon)
