<template>
  <div class="home">
    <app-token></app-token>
  </div>
</template>

<script>
  import Token from '@/components/Token.vue'

  export default {
    name: 'home',
    components: {
      'app-token': Token
    }
  }
</script>
