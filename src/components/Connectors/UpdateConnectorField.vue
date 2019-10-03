<template>
  <div>
    <div class="sm:flex sm:items-center pb-2 w-full">
      <div class="md:w-1/6 px-3 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold">
          ControlType
        </label>
        {{ field.controlType }}
      </div>
      <div class="md:w-1/6 px-3 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold">
          DataType
        </label>
        {{ field.dataType }}
      </div>
      <div class="md:w-1/6 px-3 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold">
          DecimalFieldId
        </label>
        {{ field.decimalFieldId }}
      </div>
      <div class="md:w-1/6 px-3 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold">
          Decimals
        </label>
        {{ field.decimals }}
      </div>
      <div class="md:w-1/6 px-3 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold">
          FieldId
        </label>
        {{ field.fieldId }}
      </div>
      <div class="md:w-1/6 px-3 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold">
          Label
        </label>
        {{ field.label }}
      </div>
    </div>

    <div class="sm:flex border-t border-grey pt-2 sm:items-center w-full">
      <div class="md:w-1/5 px-3 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold">
          Length
        </label>
        {{ field.length }}
      </div>
      <div class="md:w-1/5 px-3 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold">
          Mandatory
        </label>
        {{ field.mandatory }}
      </div>
      <div class="md:w-1/5 px-3 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold">
          Notzero
        </label>
        {{ field.notzero }}
      </div>
      <div class="md:w-1/5 px-3 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold">
          primaryKey
        </label>
        {{ field.primaryKey }}
      </div>
      <div class="md:w-1/5 px-3 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold">
          values
        </label>
        {{ field.values }}
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'updateConnectorField',
    props: ['field'],
    methods: {
      test() {
        console.log('w')
      }
    }
  }
</script>
