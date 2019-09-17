<template>
  <div class="md:w-1/3 px-3 md:mb-0">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold">
      Current
    </label>
    {{ tokenDetails.id }}
  </div>
</template>

<script>
  export default {
    name: 'CurrentToken',
    data() {
      return {}
    },
    computed: {
      tokenDetails() {
        return this.$store.getters.tokenDetails
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
