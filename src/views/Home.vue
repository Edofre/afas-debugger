<template>
  <div class="home">
    <app-load-token v-if="tokenDetails" :tokenDetails="tokenDetails"></app-load-token>
    <app-save-token></app-save-token>
  </div>
</template>

<script>
  import LoadToken from '@/components/Token/LoadToken.vue'
  import SaveToken from '@/components/Token/SaveToken.vue'

  export default {
    name: 'home',
    components: {
      'app-load-token': LoadToken,
      'app-save-token': SaveToken
    },
    computed: {
      tokenDetails() {
        return localStorage.getItem('tokenDetails') ? JSON.parse(localStorage.getItem('tokenDetails')) : false
      }
    }
  }
</script>
