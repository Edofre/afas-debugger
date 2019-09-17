<template>
  <div class="home">
    <div class="border m-6 rounded-lg bg-white mx-auto max-w-sm shadow-lg rounded-lg">
      <app-token-details></app-token-details>

      <app-save-token></app-save-token>
    </div>
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
