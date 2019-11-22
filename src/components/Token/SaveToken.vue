<template>
  <div>
    <form @submit.prevent="testConnection">
      <div class="col-md-6">
        <div class="form-group">
          <label for="id">AFAS ID</label>
          <input
            type="text"
            class="form-control"
            id="id"
            aria-describedby="idHelp"
            v-model="id"
            :class="{'border-red-500': $v.id.$error, 'border-green-500': !$v.id.$error && $v.id.$dirty}"
            @blur="$v.id.$touch()"
            placeholder="123456"
          >
          <small id="idHelp" class="form-text text-muted">Your AFAS environment ID</small>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="token">Token</label>
          <textarea
            class="form-control"
            id="token"
            aria-describedby="tokenHelp"
            v-model="token"
            :class="{'border-red-500': $v.token.$error, 'border-green-500': !$v.token.$error && $v.token.$dirty}"
            @blur="$v.token.$touch()"
            placeholder="123456"
          ></textarea>
          <small id="tokenHelp" class="form-text text-muted">Copy paste your token here</small>
        </div>
      </div>

      <button
        :disabled="$v.$invalid"
        :class="{'opacity-50 cursor-not-allowed': $v.$invalid}"
        type="submit"
        class="btn btn-primary"
      >
        <font-awesome-icon class="font-awesome-icon" icon="plug"/>
        Test connection
        <font-awesome-icon v-if="tokenConnection.status === STATUS_LOADING" class="font-awesome-icon" icon="spinner" spin/>
      </button>
    </form>
  </div>

  <!--  <div class="sm:flex sm:items-center px-6 py-6">-->
  <!--    <form class="w-full">-->
  <!--      <div class="flex flex-wrap mb-2">-->
  <!--        <div class="md:w-1/2 px-3 md:mb-0">-->
  <!--          <div class="md:w-1/2 px-3">-->
  <!--            <label class="block uppercase tracking-wide text-xs font-bold">-->
  <!--              <span class="text-gray-700">Environment</span>-->
  <!--              <select-->
  <!--                v-model="environment"-->
  <!--                :class="{'border-red-500': $v.environment.$error, 'border-green-500': !$v.environment.$error}"-->
  <!--                @blur="$v.environment.$touch()"-->
  <!--                class="form-select mt-2 appearance-none block w-full bg-gray-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"-->
  <!--              >-->
  <!--                <option v-for="envOption in envOptions" :key="envOption.id" :value="envOption.id">{{ envOption.name }}</option>-->
  <!--              </select>-->
  <!--            </label>-->
  <!--          </div>-->

  <!--          <div v-if="$v.id.$error" class="w-full px-3">-->
  <!--            <p class="text-red-500 text-xs italic">We need your AFAS ID to determine what URL we can send requests to.</p>-->
  <!--          </div>-->
  <!--        </div>-->

  <!--    </form>-->
  <!--  </div>-->
</template>

<script>
  import { minLength, required } from 'vuelidate/lib/validators'
  import { STATUS_LOADING, TEST_CONNECTION } from '../../store/types'

  export default {
    name: 'SaveToken',
    data() {
      return {
        id: null,
        environment: 'test',
        token: null,
        envOptions: [
          { id: 'test', 'name': 'Testing' },
          { id: 'accept', 'name': 'Acceptance' },
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
