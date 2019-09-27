<template>
  <div class="home">

    <div class="px-2 mt-4">
      <div class="flex -mx-2">
        <div class="w-5/12 m-auto px-2 border bg-white shadow-lg rounded-lg">
<!--          <button @click="open" class="bg-afas-blue hover:bg-afas-red text-white px-4 py-2 leading-none rounded focus:outline-none focus:shadow-outline">-->
<!--            Test connection-->
<!--          </button>-->
          <app-token v-if="token"></app-token>
          <app-save-token v-else></app-save-token>
        </div>

        <app-modal>
          Testing
        </app-modal>

        <transition appear name="slide">
          <div v-if="tokenConnection.message" class="w-5/12 m-auto p-2 border bg-white shadow-lg rounded-lg">
            <app-connection-status></app-connection-status>
          </div>
        </transition>
      </div>
    </div>

  </div>
</template>

<script>
  import Token from '@/components/Token/Token.vue'
  import Modal from '@/components/UI/Modal.vue'
  import SaveToken from '@/components/Token/SaveToken.vue'
  import ConnectionStatus from '@/components/Token/ConnectionStatus.vue'

  import { OPEN_MODAL } from '../store/types'

  export default {
    name: 'home',
    data() {
      return {
        openModal: false
      }
    },
    components: {
      'app-token': Token,
      'app-modal': Modal,
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
    },
    methods: {
      open() {
        this.$store.dispatch(OPEN_MODAL)
      }
    }
  }
</script>
