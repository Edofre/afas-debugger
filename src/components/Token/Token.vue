<template>
  <div v-if="token" class="sm:flex sm:items-center px-6 py-6">
    <div class="md:w-1/4 px-3 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold">
        ID
      </label>
      {{ token.id }}
    </div>
    <div class="md:w-1/4 px-3 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold">
        Environment
      </label>
      {{ token.environment }}
    </div>
    <div v-if="version" class="md:w-1/4 px-3 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold">
        Version
      </label>
      {{ version }}
    </div>
    <div class="md:w-1/4 px-3 md:mb-0">
      <button
        @click="clear"
        class="bg-afas-blue hover:bg-afas-red text-white text-sm px-4 py-2 leading-none leading-none rounded focus:outline-none focus:shadow-outline"
      >
        <font-awesome-icon class="font-awesome-icon" icon="minus-circle"/>
        Clear
      </button>
    </div>
  </div>
</template>

<script>
  import { CLEAR_TOKEN, LOAD_VERSION } from '../../store/types'

  export default {
    name: 'Token',
    data() {
      return {}
    },
    computed: {
      token() {
        return this.$store.getters.token
      },
      version() {
        return this.$store.getters.version
      }
    },
    methods: {
      clear() {
        this.$store.dispatch(CLEAR_TOKEN)
      }
    },
    created() {
      let token = localStorage.getItem('afas_token')
      if (token) {
        this.$store.dispatch(LOAD_VERSION, JSON.parse(token))
      }
    }

  }
</script>

<style lang="scss" scoped>

</style>
