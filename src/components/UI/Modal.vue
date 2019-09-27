<template>
  <div
    :class="{'opacity-0': !openModal}"
    class="modal pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center"
  >
    <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

    <div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">

      <div
        @click="clickClose"
        class="cursor-pointer absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
      >
        <svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
          <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
        </svg>
        <span class="text-sm">(Esc)</span>
      </div>

      <!-- Add margin if you want to see some of the overlay behind the modal-->
      <div class="modal-content py-4 text-left px-6">
        <!-- Title -->
        <div class="flex justify-between items-center pb-3">
          <p class="text-2xl font-bold">Simple Modal!</p>
          <div class="modal-close cursor-pointer z-50">
            <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
          </div>
        </div>

        <!-- Body -->
        <slot></slot>

        <!-- Footer -->
        <div class="flex justify-end pt-2">
          <button @click="clickClose" class="bg-afas-blue cursor-pointer hover:bg-afas-red text-white px-4 py-2 leading-none rounded focus:outline-none focus:shadow-outline">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { CLOSE_MODAL, OPEN_MODAL } from '../../store/types'

  export default {
    name: 'Modal',
    data() {
      return {}
    },
    computed: {
      openModal() {
        return this.$store.getters.openModal
      }
    },
    methods: {
      clickOpen() {
        this.$store.dispatch(OPEN_MODAL)
      },
      clickClose() {
        console.log('close')
        this.$store.dispatch(CLOSE_MODAL)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
