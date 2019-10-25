<template>
  <div v-if="selectedGetConnector" class="">
    <form class="w-full" @submit.prevent="execute">

      <div class="flex flex-wrap mb-2">

        <div class="md:w-1/5 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
            for="skip"
          >
            Skip
          </label>
          <input
            v-model="skip"
            :class="{'border-red-500': $v.skip.$error, 'border-green-500': !$v.skip.$error && $v.skip.$dirty}"
            @blur="$v.skip.$touch()"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white"
            id="skip"
            type="text"
            placeholder=""
          >
          <p v-if="$v.skip.$error" class="text-red-500 text-xs italic">Skip can only be a positive field</p>
        </div>

        <div class="md:w-1/5 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
            for="take"
          >
            take
          </label>
          <input
            v-model="take"
            :class="{'border-red-500': $v.take.$error, 'border-green-500': !$v.take.$error && $v.take.$dirty}"
            @blur="$v.take.$touch()"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white"
            id="take"
            type="text"
            placeholder=""
          >
          <p v-if="$v.take.$error" class="text-red-500 text-xs italic">Skip can only be a positive field</p>
        </div>

        <div class="md:w-1/5 px-3">
          <label class="block uppercase tracking-wide text-xs font-bold">
            <span class="text-gray-700">Select filter</span>
            <select
              v-if="fields.length > 0"
              v-model="filter"
              @blur="selectFilter"
              class="form-select mt-1 appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white"
            >
              <option value="" disabled selected>Select filter</option>
              <option v-for="field in fields" :key="field.id" :value="field.id">{{ field.label }}</option>
            </select>
            <div class="" v-else>No fields to filter</div>
          </label>
        </div>
      </div>

      <div v-if="filters.length > 0" class="flex flex-wrap mb-2">
        {{ filters }}
      </div>


      <div class="md:w-1/5 mt-5">
        <button
          :disabled="$v.$invalid"
          :class="{'opacity-50 cursor-not-allowed': $v.$invalid, 'hover:bg-afas-red': !$v.$invalid}"
          @click="execute"
          class="bg-afas-blue text-white py-3 px-4 leading-none rounded focus:outline-none focus:shadow-outline"
        >
          <font-awesome-icon class="font-awesome-icon" icon="play"/>
          Execute
        </button>
      </div>


    </form>

    <div v-if="!executingGetConnector">
      <div v-if="responseGetConnector">
        <json-viewer
          :value="responseGetConnector"
          :expand-depth=3
          copyable
        ></json-viewer>
      </div>
    </div>
    <div v-else>
      <font-awesome-icon class="font-awesome-icon" icon="spinner" spin/>
    </div>

  </div>
  <div v-else class="text-center">
    {{ 'Please select a connector' }}
  </div>
</template>

<script>
  import { minLength, numeric } from 'vuelidate/lib/validators'
  import { EXECUTE_GET_CONNECTOR } from '../../store/types'
  import JsonViewer from 'vue-json-viewer'

  export default {
    props: ['selectedGetConnector'],
    components: {
      JsonViewer
    },
    data() {
      return {
        skip: 0,
        take: 100,
        filter: null,
        filters: [],
        directions: ['asc', 'desc']
      }
    },
    computed: {
      executingGetConnector() {
        return this.$store.getters.executingGetConnector
      },
      responseGetConnector() {
        return this.$store.getters.responseGetConnector
      },
      getConnectorMetaInfo() {
        return this.$store.getters.getConnectorMetaInfo
      },
      fields() {
        if (this.getConnectorMetaInfo) {
          let fields = this.getConnectorMetaInfo.fields

          if (this.filters.length > 0) {

            let filters = this.filters

            fields = fields.filter(x => {
              return filters.findIndex(t => t.id === x.id) === -1
            })
          }

          return fields
        }
        return []
      }
    },
    validations: {
      skip: {
        numeric,
        minLen: minLength(1)
      },
      take: {
        numeric,
        minLen: minLength(1)
      }
    },
    methods: {
      selectFilter() {
        let filter = this.filter
        let filterObject = this.fields.find(x => x.id === filter)
        this.filters.push(filterObject)
        this.filter = null // Reset the filter
      },
      execute() {
        this.$store.dispatch(EXECUTE_GET_CONNECTOR, {
          token: JSON.parse(localStorage.getItem('afas_token')),
          getConnector: this.selectedGetConnector,
          skip: this.skip,
          take: this.take
        })
      }
    }

  }
</script>
