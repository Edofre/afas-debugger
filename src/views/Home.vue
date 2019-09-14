<template>
    <div class="home">
        <app-token></app-token>
    </div>
</template>

<script>
  // @ is an alias to /src
  import Token from '@/components/Token.vue'

  export default {
    name: 'home',
    components: {
      'app-token': Token
    }
  }
</script>
