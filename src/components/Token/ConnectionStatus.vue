<template>
  <div>
    Testing
  </div>
</template>

<script>
  import { CLEAR_TOKEN } from '../../store/types'

  export default {
    name: 'ConnectionStatus',
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
