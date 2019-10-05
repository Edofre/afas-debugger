<template>
  <div @click="toggleDetails" class="border-b p-2 border-afas-blue hover:bg-gray-200 cursor-pointer">
    <div class="sm:flex sm:items-center pb-2 w-full">
      <div class="md:w-1/2 px-3 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold">
          Label
        </label>
        {{ field.label }}
      </div>
      <div class="md:w-1/2 px-3 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold">
          FieldId
        </label>
        {{ field.fieldId }}
      </div>
    </div>
    <div v-if="shouldShowDetails" class="border-t border-grey pt-2">
      <table class="w-1/2 text-left m-2">
        <tr class="border-b">
          <td class="w-1/2 uppercase text-right text-xs font-bold">Decimals</td>
          <td class="w-1/2 pl-4">{{ field.decimals }}</td>
        </tr>
        <tr class="border-b">
          <td class="w-1/2 uppercase text-right text-xs font-bold">DecimalFieldId</td>
          <td class="w-1/2 pl-4">{{ field.decimalFieldId }}</td>
        </tr>
        <tr class="border-b">
          <td class="w-1/2 uppercase text-right text-xs font-bold">DataType</td>
          <td class="w-1/2 pl-4">{{ field.dataType }}</td>
        </tr>
        <tr class="border-b">
          <td class="w-1/2 uppercase text-right text-xs font-bold">ControlType</td>
          <td class="w-1/2 pl-4">{{ field.controlType }}</td>
        </tr>
        <tr class="border-b">
          <td class="w-1/2 uppercase text-right text-xs font-bold">Length</td>
          <td class="w-1/2 pl-4">{{ field.length }}</td>
        </tr>
        <tr class="border-b">
          <td class="w-1/2 uppercase text-right text-xs font-bold">mandatory</td>
          <td class="w-1/2 pl-4">{{ field.mandatory }}</td>
        </tr>
        <tr class="border-b">
          <td class="w-1/2 uppercase text-right text-xs font-bold">Notzero</td>
          <td class="w-1/2 pl-4">{{ field.notzero }}</td>
        </tr>
        <tr class="border-b">
          <td class="w-1/2 uppercase text-right text-xs font-bold">primaryKey</td>
          <td class="w-1/2 pl-4">{{ field.primaryKey }}</td>
        </tr>
        <tr class="border-b">
          <td class="w-1/2 uppercase text-right text-xs font-bold">values</td>
          <td class="w-1/2 pl-4">
            <app-field-values v-if="field.values" :values="field.values"></app-field-values>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import FieldValues from '@/components/Connectors/FieldValues.vue'

  export default {
    name: 'updateConnectorField',
    props: ['field'],
    components: {
      'app-field-values': FieldValues
    },
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
