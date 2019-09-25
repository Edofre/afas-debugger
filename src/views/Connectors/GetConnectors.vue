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
                class="w-full bg-afas-blue hover:bg-afas-red text-white font-bold text-xs p-2 rounded focus:outline-none focus:shadow-outline"
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
                <div class="text-lg">
                  {{ getConnectorMetaInfo.name }}
                  <span class="text-sm italic">
                    ({{ getConnectorMetaInfo.description }})
                  </span>
                </div>

                <div class="border rounded">
                  <div
                    v-for="field in getConnectorMetaInfo.fields"
                    :key="field.id"
                    class="border-b p-2 last:border-b-0"
                  >
                    <div class="overflow-hidden flex w-full">

                      <div class="w-1/2">
                        <dl class="inline-flex">
                          <dt>{{ 'ID' }}</dt>
                          <dd>{{ field.id }}</dd>
                          <dt>{{ 'FieldID' }}</dt>
                          <dd>{{ field.fieldId }}</dd>
                          <dt>{{ 'Label' }}</dt>
                          <dd>{{ field.label }}</dd>
                          <dt>{{ 'ControlType' }}</dt>
                          <dd>{{ field.controlType }}</dd>
                        </dl>
                      </div>

                      <div class="w-1/2">
                        <dl class="inline-flex">
                          <dt>{{ 'DataType' }}</dt>
                          <dd>{{ field.dataType }}</dd>
                          <dt>{{ 'Length' }}</dt>
                          <dd>{{ field.length }}</dd>
                          <dt>{{ 'DecimalsFieldID' }}</dt>
                          <dd>{{ field.decimals }}</dd>
                          <dt>{{ 'DecimalsFieldID' }}</dt>
                          <dd>{{ field.decimalsFieldId }}</dd>
                        </dl>
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
        selectedGetConnector: null
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

<style scoped>
  dl.inline-flex {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    width: 300px; /* set the container width*/
    overflow: visible;
  }

  dl.inline-flex dt {
    flex: 0 0 50%;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: right;
    padding-right: 10px;
  }

  dl.inline-flex dd {
    font-weight: bold;
    margin-left: auto;
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
    flex: 0 0 50%
  }
</style>
