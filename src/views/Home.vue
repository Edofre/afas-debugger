<template>
  <div class="home">

    <div class="border bg-white shadow-lg rounded-lg max-w-lg mx-auto mt-4">
      <app-token-details v-if="tokenDetails"></app-token-details>
      <app-save-token v-else></app-save-token>

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
    },
    computed: {
      tokenDetails() {
        return this.$store.getters.tokenDetails
      }
    }
  }
</script>
