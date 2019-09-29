<template>
  <div v-if="open" @click.self="closeModal" class="w-full pin absolute flex justify-center bg-transparent-black">
    <div class="bg-white rounded shadow p-4 m-4 w-5/12 max-h-full overflow-y-scroll">
      <div class="">
        <span class="text-lg">
          {{ 'Header' }}
        </span>
        <span @click="closeModal" class="p-0 float-right cursor-pointer">
          <font-awesome-icon class="font-awesome-icon" icon="times"/>
        </span>
      </div>
      <div class="">
        <slot></slot>
      </div>
    </div>
  </div>
  <!--  <div v-if="open" class="flex -mx-2">-->
  <!--    <div class="w-5/12 m-auto bg-white shadow-lg rounded-lg">-->
  <!--      <div class="animated fadeIn fixed z-50 pin overflow-auto bg-smoke-dark flex">-->
  <!--        <div class="animated fadeInUp fixed shadow-inner max-w-md md:relative pin-b pin-x align-top m-auto justify-end md:justify-center p-8 bg-white md:rounded w-full md:h-auto md:shadow flex flex-col">-->

  <!--          <slot></slot>-->

  <!--          <span @click="closeModal" class="absolute pin-t pin-r pt-4 px-4">-->
  <!--            <svg class="h-12 w-12 text-grey hover:text-grey-darkest" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>-->
  <!--          </span>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<script>
  export default {
    name: 'Modal',
    data() {
      return {
        open: false
      }
    },
    methods: {
      openModal() {
        this.open = true
      },
      closeModal() {
        this.open = false
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
