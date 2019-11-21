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
            <span class="text-gray-700">Select sortation</span>
            <select
              v-if="fields.length > 0"
              v-model="sortation"
              @change="selectSortation"
              class="form-select mt-1 appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white"
            >
              <option value="" disabled selected>Select sortation</option>
              <option v-for="field in fields" :key="field.id" :value="field.id">{{ field.label }}</option>
            </select>
            <div class="" v-else>No fields to sortation</div>
          </label>
        </div>

        <div class="md:w-1/5 mt-5 px-3">
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
      </div>

      <div v-if="sortations.length > 0" class="w-full max-w-sm">
        <div v-for="(selectedSortation, index) in sortations" :key="index" class="md:flex md:items-center mt-2">
          <div class="md:w-1/3">
            <label class="block text-gray-700 font-bold md:text-right mt-4 pr-4" for="inline-full-name">
              {{ selectedSortation.label }}
            </label>
          </div>
          <div class="md:w-1/3">
            <label class="block uppercase tracking-wide text-xs font-bold">
              <span class="text-gray-700">Direction</span>
              <select
                v-model="selectedSortation.direction"
                class="form-select mt-1 appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white"
              >
                <option value="asc">Asc</option>
                <option value="desc">Desc</option>
              </select>
            </label>
          </div>
          <div class="md:w-1/3 ml-1 mt-5">
            <button
              @click="removeSortation(selectedSortation)"
              class="bg-afas-red hover:bg-afas-blue text-white py-2 px-4 leading-none rounded focus:outline-none focus:shadow-outline"
            >
              <font-awesome-icon class="font-awesome-icon" icon="trash"/>
            </button>
          </div>
        </div>
      </div>

      <div v-for="(filter, index) in filters" :key="index" class="flex flex-wrap mb-2">
        <div class="md:w-1/6 mt-5 px-3">
          <button
            v-if="filter.removable"
            @click="removeFilter(filter)"
            class="bg-afas-blue hover:bg-afas-red text-white py-3 px-4 leading-none rounded focus:outline-none focus:shadow-outline"
          >
            <font-awesome-icon class="font-awesome-icon" icon="minus-circle"/>
            Remove
          </button>
        </div>

        <div class="md:w-1/6 px-3">
          <label v-if="filter.removable" class="block uppercase tracking-wide text-xs font-bold">
            <span class="text-gray-700">Logic</span>
            <select
              v-model="filter.logic"
              class="form-select mt-1 appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white"
            >
              <option v-for="(option, key) in logicOptions" :key="key" :value="key">{{ option }}</option>
            </select>
          </label>
        </div>

        <div class="md:w-1/6 px-3">
          <label class="block uppercase tracking-wide text-xs font-bold">
            <span class="text-gray-700">Field</span>
            <select
              v-model="filter.field"
              class="form-select mt-1 appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white"
            >
              <option value="" disabled selected>Select field</option>
              <option v-for="filterField in filterFields" :key="filterField.id" :value="filterField.id">{{ filterField.label }}</option>
            </select>
          </label>
        </div>

        <div class="md:w-1/6 px-3">
          <label class="block uppercase tracking-wide text-xs font-bold">
            <span class="text-gray-700">Operator</span>
            <select
              v-model="filter.operator"
              class="form-select mt-1 appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white"
            >
              <option value="" disabled selected>Select operator</option>
              <option v-for="(option, key) in operatorOptions" :key="key" :value="key">{{ option }}</option>
            </select>
          </label>
        </div>

        <div class="md:w-1/6 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold"
          >
            Value
            <input
              v-model="filter.value"
              class="form-input appearance-none mt-1 block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder=""
            >
          </label>
        </div>

        <div class="md:w-1/6 mt-5 px-5">
          <button
            @click="addFilter()"
            class="bg-afas-blue hover:bg-afas-red text-white py-3 px-4 leading-none rounded focus:outline-none focus:shadow-outline"
          >
            <font-awesome-icon class="font-awesome-icon" icon="plus-circle"/>
            Add
          </button>
        </div>
      </div>

    </form>

    <div v-if="!executingGetConnector">
      <div v-if="responseGetConnector">
        <pre>{{ JSON.stringify(responseGetConnector, null, 2) }}</pre>
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

  export default {
    props: ['selectedGetConnector'],
    data() {
      return {
        skip: 0,
        take: 100,
        sortation: null,
        sortations: [],
        directions: ['asc', 'desc'],
        filters: [
          { logic: 'or', removable: false, field: null, operator: null, value: null }
        ],
        operatorOptions: {
          1: '= (is equal to) [1]',
          2: '>= (is greater or equal to) [2]',
          3: '<= (is less or equal to) [3]',
          4: '> (is greater than) [4]',
          5: '< (is less than) [5]',
          6: '* (contains text) [6]',
          7: '!= (is not equal to) [7]',
          8: '[] (is empty) [8]',
          9: '![] (is not empty) [9]',
          10: '@ (starts with) [10]',
          11: '!* (does not contain text) [11]',
          12: '!@ (does not start with) [12]',
          13: '& (ends with) [13]',
          14: '!& (does not ends with) [14]',
          15: 'Sf (quickfilter) [15]'
        },
        logicOptions: {
          'or': 'OR',
          'and': 'AND'
        }
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
          if (this.sortations.length > 0) {
            let sortations = this.sortations
            fields = fields.filter(x => {
              return sortations.findIndex(t => t.id === x.id) === -1
            })
          }
          return fields
        }
        return []
      },
      filterFields() {
        if (this.getConnectorMetaInfo) {
          return this.getConnectorMetaInfo.fields
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
      removeSortation(sortation) {
        this.sortations = this.sortations.filter(function(x) {
          return x.id !== sortation.id
        })
      },
      selectSortation() {
        let sortation = this.sortation
        let sortationObject = this.fields.find(x => x.id === sortation)
        sortationObject.direction = 'asc'
        this.sortations.push(sortationObject)
        this.sortation = null // Reset the sortation
      },
      addFilter() {
        this.filters.push(
          {
            logic: 'or', removable: true, field: null, operator: null, value: null
          }
        )
      },
      removeFilter(filter) {
        this.filters.splice(this.filters.indexOf(filter), 1)
      },
      execute() {
        this.$store.dispatch(EXECUTE_GET_CONNECTOR, {
          token: JSON.parse(localStorage.getItem('afas_token')),
          getConnector: this.selectedGetConnector,
          skip: this.skip,
          take: this.take,
          sortations: this.sortations,
          filters: this.filters
        })
      }
    }
  }
</script>
