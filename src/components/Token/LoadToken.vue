<template>
  <div class="border m-6 rounded-lg bg-white mx-auto max-w-lg shadow-lg rounded-lg">
    <div class="sm:flex sm:items-center px-6 py-6">

      <button
        @click="load"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline"
      >
        Load
      </button>

    </div>
  </div>
</template>

<script>

  export default {
    name: 'LoadToken',
    data() {
      return {}
    },
    methods: {
      load() {

        console.log('ww')

        // this.$store.dispatch(SAVE_TOKEN_DETAILS, tokenDetails)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
