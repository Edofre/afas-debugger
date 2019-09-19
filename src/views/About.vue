<template>
  <div class="about">

    <div class="border mt-4 rounded-lg bg-white mx-auto max-w-lg shadow-lg rounded-lg">
      <div class="px-6 py-4">
        <div class="mb-4">
          <h1 class="text-xl mb-2">About this application</h1>
          <p>You can use this application to debug your AFAS connectors</p>

          <p v-if="version">
            Version: {{ version }}
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import { LOAD_VERSION } from '../store/types'

  export default {
    name: 'about',
    data() {
      return {}
    },
    computed: {
      version() {
        return this.$store.getters.version
      }
    },
    created() {
      let token = localStorage.getItem('afas_token')
      if (token) {
        this.$store.dispatch(LOAD_VERSION, JSON.parse(token))
      }
    }
  }
</script>
