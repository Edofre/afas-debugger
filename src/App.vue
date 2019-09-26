<template>
  <div id="app">
    <nav class="flex items-center justify-between flex-wrap bg-afas-red border-b-2 p-4">
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">AFAS debugger</span>
      </div>
      <div class="block sm:hidden">
        <button @click="toggle" class="flex items-center px-4 py-2 leading-none border rounded hover:text-white hover:border-white">
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
          <template v-if="token">
            <router-link
              class="no-underline block mt-4 sm:inline-block sm:mt-0 hover:text-white mr-4"
              to="/get-connectors">
              GetConnectors
            </router-link>
            <router-link
              class="no-underline block mt-4 sm:inline-block sm:mt-0 hover:text-white mr-4"
              to="/update-connectors">
              UpdateConnectors
            </router-link>
          </template>
          <router-link
            class="no-underline block mt-4 sm:inline-block sm:mt-0 hover:text-white"
            to="/about">
            About
          </router-link>
        </div>
        <div v-if="token">
          <app-current-token></app-current-token>
        </div>
      </div>
    </nav>

    <transition name="slide" mode="out-in">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  import { LOAD_TOKEN } from './store/types'

  import CurrentToken from '@/components/Token/CurrentToken.vue'

  export default {
    name: 'app',
    data() {
      return {
        open: false
      }
    },
    components: {
      'app-current-token': CurrentToken
    },
    methods: {
      toggle() {
        this.open = !this.open
      }
    },
    computed: {
      token() {
        return this.$store.getters.token
      }
    },
    created() {
      let token = localStorage.getItem('afas_token')
      if (token) {
        this.$store.dispatch(LOAD_TOKEN, JSON.parse(token))
      }
    }
  }
</script>

<style lang="scss">
  a.router-link-exact-active {
    text-decoration: underline;
  }
</style>
