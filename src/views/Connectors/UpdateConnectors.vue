<template>
  <div class="update-connectors">

    <div class="px-2 mt-4">
      <div class="flex -mx-2">
        <div class="w-3/12 m-auto px-2 border bg-white shadow-lg rounded-lg">
          <div class=" h-12">
            1
          </div>
        </div>
        <div class="w-8/12 m-auto px-2 border bg-white shadow-lg rounded-lg">
          <div class="h-12">
            2
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import { LOAD_UPDATE_CONNECTORS } from '../../store/types'

  export default {
    name: 'updateConnectors',
    data() {
      return {
        selectedUpdateConnector: null
      }
    },
    components: {},
    computed: {
      updateConnectors() {
        return this.$store.updateters.updateConnectors
      }
    },
    methods: {
      select(connector) {
        this.selectedUpdateConnector = connector
      }
    },
    created() {
      let token = localStorage.getItem('afas_token')
      if (token) {
        this.$store.dispatch(LOAD_UPDATE_CONNECTORS, JSON.parse(token))
      }
    }
  }
</script>
