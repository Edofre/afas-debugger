<template>
  <div class="home">
    <div class="px-2 mt-4">
      <div class="flex -mx-2 ">
        <div class="m-auto px-2 border bg-white shadow-lg rounded-lg">
          <app-token v-if="token"></app-token>
          <app-save-token v-else></app-save-token>
          <transition appear name="slide">
            <app-connection-status v-if="tokenConnection.message"></app-connection-status>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Token from '@/components/Token/Token.vue'
  import SaveToken from '@/components/Token/SaveToken.vue'
  import ConnectionStatus from '@/components/Token/ConnectionStatus.vue'

  export default {
    name: 'home',
    data() {
      return {}
    },
    components: {
      'app-token': Token,
      'app-save-token': SaveToken,
      'app-connection-status': ConnectionStatus
    },
    computed: {
      token() {
        return this.$store.getters.token
      },
      tokenConnection() {
        return this.$store.getters.tokenConnection
      }
    }
  }
</script>
