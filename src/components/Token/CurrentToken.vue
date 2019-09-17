<template>
  <div class="text-xs">
    <label class="uppercase text-gray-700 font-bold">
      Current token:
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
