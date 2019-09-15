<template>
    <div class="border m-6 rounded-lg bg-white mx-auto max-w-lg shadow-lg rounded-lg">
        <div class="sm:flex sm:items-center px-6 py-4">
            <form @submit.prevent="save">
                <div class="flex flex-wrap mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-first-name"
                        >
                            AFAS ID
                        </label>
                        <input
                                v-model="id"
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="grid-first-name"
                                type="text"
                                placeholder="Jane"
                        >
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-xs font-bold">
                            <span class="text-gray-700">Environment</span>
                            <select
                                    v-model="environment"
                                    class="form-select mt-2 appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            >
                                <option v-for="envOption in envOptions" :value="envOption.id">{{ envOption.name }}</option>
                            </select>
                        </label>
                    </div>

                    <div class="w-full px-3">
                        <p class="text-red-500 text-xs italic">We need your AFAS ID to determine what URL we can send requests to.</p>
                    </div>
                </div>

                <div class="flex flex-wrap mb-6">
                    <div class="w-full px-3 mb-6 md:mb-0">
                        <label
                                class="block resize-y uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="token"
                        >
                            Token
                        </label>
                        <textarea
                                v-model="token"
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="token"
                                placeholder="Your AFAS token"
                        ></textarea>
                        <p class="text-red-500 text-xs italic">Please enter your token.</p>
                    </div>
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
        token: null,
        envOptions: [
          { id: 'test', 'name': 'Testing' },
          { id: 'acceptance', 'name': 'Acceptance' },
          { id: 'production', 'name': 'Production' }
        ]
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
