<template>
  <table class="w-1/2 text-left">
    <thead>
      <th class="w-1/2 uppercase text-right text-xs font-bold">ID</th>
      <th class="w-1/2 uppercase text-left pl-4 text-xs font-bold">Description</th>
    </thead>
    <tbody>
      <tr v-for="(value, index) in values" :key="index" class="border-b">
        <td class="w-1/2 text-right">{{ value.id }}</td>
        <td class="w-1/2 pl-4">{{ value.description }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: 'fieldValues',
    props: ['values']
  }
</script>
