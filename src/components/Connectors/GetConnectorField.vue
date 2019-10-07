<template>
  <div @click="toggleDetails" class="border-b p-2 border-afas-blue hover:bg-gray-200 cursor-pointer">
    <div class="sm:flex sm:items-center pb-2 w-full">
      <div class="md:w-1/3 px-3 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold">
          ID
        </label>
        {{ field.id }}
      </div>
      <div class="md:w-1/3 px-3 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold">
          FieldID
        </label>
        {{ field.fieldId }}
      </div>
      <div class="md:w-1/3 px-3 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold">
          Label
        </label>
        {{ field.label }}
      </div>
    </div>
    <div v-if="shouldShowDetails" class="border-t border-grey pt-2 sm:flex sm:items-center w-full">
      <table class="w-1/2 text-left ml-auto mr-auto">
        <tr class="border-b">
          <td class="w-1/2 uppercase text-right text-xs font-bold">ControlType</td>
          <td class="w-1/2 pl-4">{{ field.controlType }}</td>
        </tr>
        <tr class="border-b">
          <td class="w-1/2 uppercase text-right text-xs font-bold">DataType</td>
          <td class="w-1/2 pl-4">{{ field.dataType }}</td>
        </tr>
        <tr class="border-b">
          <td class="w-1/2 uppercase text-right text-xs font-bold">Length</td>
          <td class="w-1/2 pl-4">{{ field.length }}</td>
        </tr>
        <tr class="border-b">
          <td class="w-1/2 uppercase text-right text-xs font-bold">Decimals</td>
          <td class="w-1/2 pl-4">{{ field.decimals }}</td>
        </tr>
        <tr class="border-b">
          <td class="w-1/2 uppercase text-right text-xs font-bold">DecimalsFieldID</td>
          <td class="w-1/2 pl-4">{{ field.decimalsFieldId }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'getConnectorField',
    props: ['field'],
    data() {
      return {
        shouldShowDetails: false
      }
    },
    methods: {
      toggleDetails() {
        this.shouldShowDetails = !this.shouldShowDetails
      }
    }
  }
</script>
