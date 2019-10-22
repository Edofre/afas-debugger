<template>
  <div v-if="selectedGetConnector" class="">
    <form class="w-full" @submit.prevent="testConnection">
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
      </div>

    </form>
  </div>
  <div v-else class="text-center">
    {{ 'Please select a connector' }}
  </div>
</template>

<script>
  import { minLength, numeric } from 'vuelidate/lib/validators'

  export default {
    props: ['selectedGetConnector'],
    data() {
      return {
        'skip': null,
        'take': null
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
      execute() {
        console.log('execute')
      }
    }

  }
</script>
