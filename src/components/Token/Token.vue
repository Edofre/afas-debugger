<template>
  <div v-if="token" class="sm:flex sm:items-center px-6 py-6">
    <div class="md:w-1/3 px-3 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold">
        ID
      </label>
      {{ token.id }}
    </div>
    <div class="md:w-1/3 px-3 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold">
        Environment
      </label>
      {{ token.environment }}
    </div>
    <div class="md:w-1/3 px-3 md:mb-0">
      <button
        @click="clear"
        class="bg-afas-blue hover:bg-afas-red text-white text-sm p-2 rounded focus:outline-none focus:shadow-outline"
      >
        <font-awesome-icon class="font-awesome-icon" icon="minus-circle"/>
        Clear
      </button>
    </div>
  </div>
</template>

<script>
  import { CLEAR_TOKEN } from '../../store/types'

  export default {
    name: 'Token',
    data() {
      return {}
    },
    computed: {
      token() {
        return this.$store.getters.token
      }
    },
    methods: {
      clear() {
        this.$store.dispatch(CLEAR_TOKEN)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
