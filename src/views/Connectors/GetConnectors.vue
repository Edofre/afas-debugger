<template>
  <div class="get-connectors">

    <div class="px-2 mt-4">
      <div class="flex -mx-2">
        <div class="w-3/12 m-auto px-2 border bg-white shadow-lg rounded-lg">
          <h2>Select GetConnector</h2>
          <div class="border rounded">
            <div v-for="getConnector in getConnectors" :key="getConnector.id" @click="select(getConnector)" class="border-b p-2 last:border-b-0 hover:bg-afas-blue hover:text-white cursor-pointer">
              <div class="overflow-hidden font-bold">
                {{ getConnector.id }}
                <div class="text-sm font-normal">
                  {{ getConnector.description }}
                </div>
              </div>
            </div>
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
  import { LOAD_GET_CONNECTORS } from '../../store/types'

  export default {
    name: 'getConnectors',
    components: {},
    computed: {
      getConnectors() {
        return this.$store.getters.getConnectors
      }
    },
    methods: {
      select(connector) {
        console.log(connector)
      }
    },
    created() {
      let token = localStorage.getItem('afas_token')
      if (token) {
        this.$store.dispatch(LOAD_GET_CONNECTORS, JSON.parse(token))
      }
    }
  }
</script>
