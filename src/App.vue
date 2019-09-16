<template>
  <div id="app">
    <nav class="flex items-center justify-between flex-wrap bg-afas-red border-b-2 p-4">
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">AFAS debugger</span>
      </div>
      <div class="block sm:hidden">
        <button @click="toggle" class="flex items-center px-3 py-2 border rounded hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
          </svg>
        </button>
      </div>
      <div :class="open ? 'block': 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
        <div class="text-sm sm:flex-grow">
          <router-link
            class="no-underline block mt-4 sm:inline-block sm:mt-0 hover:text-white mr-4"
            to="/">
            Home
          </router-link>
          <router-link
            class="no-underline block mt-4 sm:inline-block sm:mt-0 hover:text-white"
            to="/about">
            About
          </router-link>
        </div>
      </div>
    </nav>

    <div>
      <transition name="slide" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
  import { LOAD_TOKEN_DETAILS } from './store/types'

  export default {
    name: 'app',
    data() {
      return {
        open: false
      }
    },
    methods: {
      toggle() {
        this.open = !this.open
      }
    },
    created() {
      let tokenDetails = localStorage.getItem('tokenDetails')
      if (tokenDetails) {
        this.$store.dispatch(LOAD_TOKEN_DETAILS, tokenDetails)
      }
    }
  }
</script>

<style lang="scss">
  a.router-link-exact-active {
    text-decoration: underline;
  }

  .slide-enter-active {
    animation: slide-in 200ms ease-out forwards;
  }

  .slide-leave-active {
    animation: slide-out 200ms ease-out forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-30px);
      opacity: 0;
    }
  }
</style>
