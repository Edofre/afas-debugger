<template>
  <div class="text-xs font-bold">
    <label class="uppercase text-white">
      Current token:
    </label>
    {{ token.id }}
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
