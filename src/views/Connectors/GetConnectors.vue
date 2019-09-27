<template>
  <div class="get-connectors">
    <div class="px-2 mt-4">
      <div class="flex">
        <div class="w-3/12 mx-auto p-2 border bg-white shadow-lg rounded-lg">
          <div v-if="loadingGetConnectors" class="text-center">
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

            <div class="border rounded">
              <div
                v-for="getConnector in getConnectors"
                :key="getConnector.id"
                @click="select(getConnector)"
                class="border-b p-2 last:border-b-0 hover:bg-afas-blue hover:text-white cursor-pointer"
                :class="{'bg-afas-blue text-white' : getConnector === selectedGetConnector }"
              >
                <div class="overflow-hidden font-bold">
                  {{ getConnector.id }}
                  <div class="text-sm font-normal">
                    {{ getConnector.description }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-8/12 mx-auto p-2 border bg-white shadow-lg rounded-lg">
          <div v-if="loadingGetConnectors" class="text-center">
            <font-awesome-icon class="font-awesome-icon" icon="spinner" spin/>
          </div>
          <div v-else>
            <div v-if="selectedGetConnector" class="">
              <div v-if="loadingGetConnectorMetaInfo" class="text-center">
                <font-awesome-icon class="font-awesome-icon" icon="spinner" spin/>
              </div>
              <div v-else>
                <div class="text-lg mb-3">
                  {{ getConnectorMetaInfo.name }}
                  <span class="text-sm italic">
                    ({{ getConnectorMetaInfo.description }})
                  </span>
                  <span class="float-right">
                    <input type="text" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded leading-tight px-2 py-1 focus:outline-none focus:bg-white" placeholder="Search" v-model="search">
                  </span>
                </div>

                <div class="border-2 border-afas-blue rounded">
                  <div
                    v-for="field in fields"
                    :key="field.id"
                    class="border-b p-2 border-afas-blue last:border-b-0"
                  >
                    <div class="sm:flex sm:items-center pb-2 w-full">
                      <div class="md:w-1/4 px-3 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                          ID
                        </label>
                        {{ field.id }}
                      </div>
                      <div class="md:w-1/4 px-3 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                          FieldID
                        </label>
                        {{ field.fieldId }}
                      </div>
                      <div class="md:w-1/4 px-3 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                          Label
                        </label>
                        {{ field.label }}
                      </div>
                      <div class="md:w-1/4 px-3 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                          ControlType
                        </label>
                        {{ field.controlType }}
                      </div>
                    </div>
                    <div class="sm:flex border-t border-grey pt-2 sm:items-center w-full">
                      <div class="md:w-1/4 px-3 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                          DataType
                        </label>
                        {{ field.dataType }}
                      </div>
                      <div class="md:w-1/4 px-3 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                          Length
                        </label>
                        {{ field.length }}
                      </div>
                      <div class="md:w-1/4 px-3 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                          Decimals
                        </label>
                        {{ field.decimals }}
                      </div>
                      <div class="md:w-1/4 px-3 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                          DecimalsFieldID
                        </label>
                        {{ field.decimalsFieldId }}
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="text-center">
              {{ 'Please select a connector' }}
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import { LOAD_GET_CONNECTOR_META_INFO, LOAD_GET_CONNECTORS } from '../../store/types'

  export default {
    name: 'getConnectors',
    data() {
      return {
        selectedGetConnector: null,
        search: ''
      }
    },
    components: {},
    computed: {
      loadingGetConnectors() {
        return this.$store.getters.loadingGetConnectors
      },
      getConnectors() {
        return this.$store.getters.getConnectors
      },
      loadingGetConnectorMetaInfo() {
        return this.$store.getters.loadingGetConnectorMetaInfo
      },
      fields() {
        if (this.getConnectorMetaInfo) {
          let fields = this.getConnectorMetaInfo.fields
          let search = this.search.toLowerCase()
          if (search) {
            fields = fields.filter(element =>
              element.label.toLowerCase().indexOf(search) !== -1
              || element.id.toLowerCase().indexOf(search) !== -1
              || element.fieldId.toLowerCase().indexOf(search) !== -1
            )
          }

          return fields
        }
        return []
      },
      getConnectorMetaInfo() {
        return this.$store.getters.getConnectorMetaInfo
      }
    },
    methods: {
      select(getConnector) {
        this.selectedGetConnector = getConnector

        this.$store.dispatch(LOAD_GET_CONNECTOR_META_INFO, {
          token: JSON.parse(localStorage.getItem('afas_token')),
          getConnector
        })
      },
      reload() {
        this.selectedGetConnector = null
        this.$store.dispatch(LOAD_GET_CONNECTORS, JSON.parse(localStorage.getItem('afas_token')))
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
