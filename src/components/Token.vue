<template>
    <div class="border m-6 rounded-lg bg-white mx-auto max-w-lg shadow-lg rounded-lg">
        <div class="sm:flex sm:items-center px-6 py-4">
            <form @submit.prevent="save">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="id">
                        AFAS ID
                    </label>
                    <input
                            v-model="id"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="id"
                            type="text"
                            placeholder="AFAS ID"
                    >
                </div>
                <div class="flex items-center justify-between">
                    <button
                            type="submit"
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Token',
    data () {
      return {
        id: null,
        environment: 'test',
        token: null
      }
    },
    methods: {
      save () {
        console.log(this.id)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
