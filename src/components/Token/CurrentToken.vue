<template>
  <div class="text-light">
    Current token: {{ token.id }}
  </div>
</template>

<script>
  export default {
    name: 'CurrentToken',
    data() {
      return {}
    },
    computed: {
      token() {
        return this.$store.getters.token
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
