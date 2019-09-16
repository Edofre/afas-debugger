<template>
  <div class="home">
    <app-token-details></app-token-details>

    <app-save-token></app-save-token>
  </div>
</template>

<script>
  import TokenDetails from '@/components/Token/TokenDetails.vue'
  import SaveToken from '@/components/Token/SaveToken.vue'

  export default {
    name: 'home',
    components: {
      'app-token-details': TokenDetails,
      'app-save-token': SaveToken
    }
  }
</script>
