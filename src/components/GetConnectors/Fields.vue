<template>
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
                    <input type="text" class="appearance-none block text-sm w-full bg-gray-200 text-gray-700 border rounded leading-tight px-2 py-1 focus:outline-none focus:bg-white" placeholder="Search" v-model="search">
                  </span>
      </div>

      <template v-if="fields.length">
        <div class="border-2 border-afas-blue rounded">
          <app-get-connector-field
            v-for="field in fields"
            :key="field.id"
            :field="field"
          ></app-get-connector-field>
        </div>
      </template>
      <template v-else>
        <div class="text-center font-bold">
          {{ search ? 'No fields found' : 'No fields available' }}
          <hr/>
        </div>
      </template>
    </div>
  </div>
  <div v-else class="text-center">
    {{ 'Please select a connector' }}
  </div>
</template>

<script>
  import { LOAD_GET_CONNECTOR_META_INFO, LOAD_GET_CONNECTORS } from '../../store/types'
  import GetConnectorField from '@/components/Connectors/GetConnectorField.vue'

  export default {

  }
</script>


