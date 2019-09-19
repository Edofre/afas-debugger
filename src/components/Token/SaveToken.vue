<template>
  <div class="sm:flex sm:items-center px-6 py-6">
    <form class="w-full" @submit.prevent="testConnection">
      <div class="flex flex-wrap mb-2">
        <div class="md:w-1/2 px-3 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="id"
          >
            AFAS ID
          </label>
          <input
            v-model="id"
            :class="{'border-red-500': $v.id.$error, 'border-green-500': !$v.id.$error && $v.id.$dirty}"
            @blur="$v.id.$touch()"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="id"
            type="text"
            placeholder="123456"
          >
        </div>
        <div class="md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-xs font-bold">
            <span class="text-gray-700">Environment</span>
            <select
              v-model="environment"
              :class="{'border-red-500': $v.environment.$error, 'border-green-500': !$v.environment.$error}"
              @blur="$v.environment.$touch()"
              class="form-select mt-2 appearance-none block w-full bg-gray-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            >
              <option v-for="envOption in envOptions" :key="envOption.id" :value="envOption.id">{{ envOption.name }}</option>
            </select>
          </label>
        </div>

        <div v-if="$v.id.$error" class="w-full px-3">
          <p class="text-red-500 text-xs italic">We need your AFAS ID to determine what URL we can send requests to.</p>
        </div>
      </div>

      <div class="flex flex-wrap mt-3">
        <div class="w-full px-3 md:mb-0">
          <label
            class="block resize-y uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="token"
          >
            Token
          </label>
          <textarea
            v-model="token"
            :class="{'border-red-500': $v.token.$error, 'border-green-500': !$v.token.$error && $v.token.$dirty}"
            @blur="$v.token.$touch()"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            rows="4"
            id="token"
            placeholder="Your AFAS token"
          ></textarea>
        </div>

        <div v-if="$v.token.$error" class="w-full px-3">
          <p class="text-red-500 text-xs italic">Please enter your token.</p>
        </div>
      </div>

      <div class="flex flex-wrap mt-3">
        <div class="w-full px-3 md:mb-0">
          <button
            :disabled="$v.$invalid"
            :class="{'opacity-50 cursor-not-allowed': $v.$invalid, 'hover:bg-afas-red': !$v.$invalid}"
            type="submit"
            class="bg-afas-blue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            <font-awesome-icon class="font-awesome-icon" icon="plug"/>
            Test connection
            <font-awesome-icon v-if="tokenConnection.status === STATUS_LOADING" class="font-awesome-icon" icon="spinner" spin/>
          </button>

          <button
            v-if="tokenConnection.success"
            :disabled="$v.$invalid"
            :class="{'opacity-50 cursor-not-allowed': $v.$invalid, 'hover:bg-afas-red': !$v.$invalid}"
            @click="save"
            class="bg-afas-blue text-white font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline float-right"
          >
            <font-awesome-icon class="font-awesome-icon" icon="save"/>
            Save token
          </button>
        </div>
      </div>

    </form>
  </div>
</template>

<script>
  import { minLength, required } from 'vuelidate/lib/validators'
  import { SAVE_TOKEN, TEST_CONNECTION, STATUS_LOADING } from '../../store/types'

  export default {
    name: 'SaveToken',
    data() {
      return {
        id: null,
        environment: 'test',
        token: null,
        envOptions: [
          { id: 'test', 'name': 'Testing' },
          { id: 'acceptance', 'name': 'Acceptance' },
          { id: 'production', 'name': 'Production' }
        ],
        STATUS_LOADING
      }
    },
    computed: {
      tokenConnection() {
        return this.$store.getters.tokenConnection
      }
    },
    validations: {
      id: {
        required,
        minLen: minLength(3)
      },
      environment: {
        required
      },
      token: {
        required,
        minLen: minLength(3)
      }
    },
    methods: {
      save() {
        const token = {
          id: this.id,
          environment: this.environment,
          token: this.token
        }

        this.$store.dispatch(SAVE_TOKEN, token)
      },
      testConnection() {
        const token = {
          id: this.id,
          environment: this.environment,
          token: this.token
        }

        this.$store.dispatch(TEST_CONNECTION, token)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
