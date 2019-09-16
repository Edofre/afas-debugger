<template>
  <div v-if="tokenDetails.id" class="border m-6 rounded-lg bg-white mx-auto max-w-lg shadow-lg rounded-lg">
    <div class="sm:flex sm:items-center px-6 py-6">
      <button
        @click="clear"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline"
      >
        Clear
      </button>
    </div>
  </div>
</template>

<script>

  import { CLEAR_TOKEN_DETAILS } from '../../store/types'

  export default {
    name: 'LoadToken',
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
