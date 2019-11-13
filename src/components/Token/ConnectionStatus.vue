<template>
  <div class="border rounded relative p-2 mb-3" :class="{'border-red-400 bg-red-400 text-red-700': !tokenConnection.success, 'border-green-400 bg-green-400 text-green-700': tokenConnection.success}">
    <strong class="font-bold">
      Response:
    </strong>
    {{ tokenConnection.message }}
  </div>
</template>

<script>

  export default {
    name: 'ConnectionStatus',
    data() {
      return {}
    },
    computed: {
      tokenConnection() {
        return this.$store.getters.tokenConnection
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
