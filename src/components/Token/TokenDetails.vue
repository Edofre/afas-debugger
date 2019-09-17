<template>
  <div v-if="tokenDetails" class="sm:flex sm:items-center px-6 py-6">
    <div class="md:w-1/3 px-3 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold">
        ID
      </label>
      {{ tokenDetails.id }}
    </div>
    <div class="md:w-1/3 px-3 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold">
        Environment
      </label>
      {{ tokenDetails.environment }}
    </div>
    <div class="md:w-1/3 px-3 md:mb-0">
      <button
        @click="clear"
        class="bg-afas-blue hover:bg-afas-red text-white font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline"
      >
        Clear
      </button>
    </div>
  </div>
</template>

<script>
  import { CLEAR_TOKEN_DETAILS } from '../../store/types'

  export default {
    name: 'TokenDetails',
    data() {
      return {}
    },
    computed: {
      tokenDetails() {
        return this.$store.getters.tokenDetails
      }
    },
    methods: {
      clear() {
        this.$store.dispatch(CLEAR_TOKEN_DETAILS)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
