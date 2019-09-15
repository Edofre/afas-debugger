<template>
  <div class="home">
<!--    <app-load-token></app-load-token>-->

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
    }
  }
</script>
