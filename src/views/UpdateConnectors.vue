<template>
  <div class="update-connectors">
    <div class="px-2 mt-4">
      <div class="flex">
        <div class="w-3/12 mx-auto p-2 border bg-white shadow-lg rounded-lg">
          <div v-if="loadingUpdateConnectors" class="text-center">
            <font-awesome-icon class="font-awesome-icon" icon="spinner" spin/>
          </div>
          <div v-else>
            <div class="text-center mb-2">
              <button
                @click="reload"
                class="w-full bg-afas-blue hover:bg-afas-red text-white font-bold px-4 py-2 leading-none rounded focus:outline-none focus:shadow-outline"
              >
                <font-awesome-icon class="font-awesome-icon" icon="sync"/>
                Refresh
              </button>
            </div>

            <div class="text-center mb-2">
              <input type="text" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded leading-tight px-2 py-1 focus:outline-none focus:bg-white" placeholder="Search" v-model="search">
            </div>

            <div class="border rounded">
              <div
                v-for="updateConnector in updateConnectors"
                :key="updateConnector.id"
                @click="select(updateConnector)"
                class="border-b p-2 last:border-b-0 hover:bg-afas-blue hover:text-white cursor-pointer"
                :class="{'bg-afas-blue text-white' : updateConnector === selectedUpdateConnector }"
              >
                <div class="overflow-hidden font-bold">
                  {{ updateConnector.id }}
                  <div class="text-sm font-normal">
                    {{ updateConnector.description }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-8/12 mx-auto p-2 border bg-white shadow-lg rounded-lg">
          <div v-if="loadingUpdateConnectors" class="text-center">
            <font-awesome-icon class="font-awesome-icon" icon="spinner" spin/>
          </div>
          <div v-else>
            <app-fields :selectedUpdateConnector="selectedUpdateConnector"></app-fields>

            <app-make-request></app-make-request>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import { LOAD_UPDATE_CONNECTOR_META_INFO, LOAD_UPDATE_CONNECTORS } from '../store/types'
  import Fields from '@/components/UpdateConnector/Fields.vue'
  import MakeRequest from '@/components/UpdateConnector/MakeRequest.vue'

  export default {
    name: 'updateConnectors',
    data() {
      return {
        selectedUpdateConnector: null,
        search: '',
      }
    },
    components: {
      'app-fields': Fields,
      'app-make-request': MakeRequest
    },
    computed: {
      loadingUpdateConnectors() {
        return this.$store.getters.loadingUpdateConnectors
      },
      updateConnectors() {
        if (this.$store.getters.updateConnectors.length) {
          let updateConnectors = this.$store.getters.updateConnectors
          let search = this.search.toLowerCase()
          if (search) {
            updateConnectors = updateConnectors.filter(element =>
              element.id.toLowerCase().indexOf(search) !== -1 ||
              element.description.toLowerCase().indexOf(search) !== -1
            )
          }

          return updateConnectors
        }
        return []
      }
    },
    methods: {
      select(updateConnector) {
        this.selectedUpdateConnector = updateConnector

        this.$store.dispatch(LOAD_UPDATE_CONNECTOR_META_INFO, {
          token: JSON.parse(localStorage.getItem('afas_token')),
          updateConnector
        })
      },
      reload() {
        this.selectedUpdateConnector = null
        this.$store.dispatch(LOAD_UPDATE_CONNECTORS, JSON.parse(localStorage.getItem('afas_token')))
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
