<template>
  <div v-if="selectedGetConnector" class="">
    Make request
  </div>
  <div v-else class="text-center">
    {{ 'Please select a connector' }}
  </div>
</template>

<script>

  export default {
    data() {
      return {}
    }
  }
</script>
