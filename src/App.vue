<template>
  <div id="app">
    <nav class="navbar navbar-expand-md py-1 navbar-dark bg-dark fixed-top">
      <a class="navbar-brand" href="#">AFAS debugger</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar">
        <ul class="navbar-nav mr-auto">
          <router-link tag="li" active-class="active" class="nav-item" exact to="/">
            <a class="nav-link">Home</a>
          </router-link>
          <template v-if="token">
            <router-link tag="li" active-class="active" class="nav-item" to="/get-connectors">
              <a class="nav-link">GetConnectors</a>
            </router-link>
            <router-link tag="li" active-class="active" class="nav-item" to="/update-connectors">
              <a class="nav-link">UpdateConnectors</a>
            </router-link>
          </template>
          <router-link tag="li" active-class="active" class="nav-item" to="/about">
            <a class="nav-link">About</a>
          </router-link>
        </ul>
        <div v-if="token" class="form-inline my-2 my-lg-0">
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
      return {}
    },
    components: {
      'app-current-token': CurrentToken
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
