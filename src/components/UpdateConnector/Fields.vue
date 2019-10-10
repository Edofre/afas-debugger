<template>
  <div v-if="selectedUpdateConnector" class="">
    <div v-if="loadingUpdateConnectorMetaInfo" class="text-center">
      <font-awesome-icon class="font-awesome-icon" icon="spinner" spin/>
    </div>
    <div v-else>
      <div class="text-lg mb-3">
        {{ updateConnectorMetaInfo.name }}
        <span class="text-sm italic">
                    ({{ updateConnectorMetaInfo.description }})
                  </span>
        <span class="float-right">
                    <input type="text" class="appearance-none block text-sm w-full bg-gray-200 text-gray-700 border rounded leading-tight px-2 py-1 focus:outline-none focus:bg-white" placeholder="Search" v-model="search">
                  </span>
      </div>

      <template v-if="fields.length">
        <div class="border-2 border-afas-blue rounded">
          <app-field
            v-for="field in fields"
            :key="field.id"
            :field="field"
          ></app-field>
        </div>
      </template>
      <template v-else>
        <div class="text-center font-bold">
          {{ search ? 'No fields found' : 'No fields available' }}
          <hr/>
        </div>
      </template>
    </div>
  </div>
  <div v-else class="text-center">
    {{ 'Please select a connector' }}
  </div>
</template>

<script>
  import Field from '@/components/UpdateConnector/Field.vue'

  export default {
    components: {
      'app-field': Field
    },
    props: ['selectedUpdateConnector'],
    data() {
      return {
        search: ''
      }
    },
    computed: {
      loadingUpdateConnectorMetaInfo() {
        return this.$store.getters.loadingUpdateConnectorMetaInfo
      },
      fields() {
        if (this.updateConnectorMetaInfo) {
          let fields = this.updateConnectorMetaInfo.fields
          let search = this.search.toLowerCase()
          if (search) {
            fields = fields.filter(element =>
              element.label.toLowerCase().indexOf(search) !== -1 ||
              element.fieldId.toLowerCase().indexOf(search) !== -1
            )
          }

          return fields
        }
        return []
      },
      updateConnectorMetaInfo() {
        return this.$store.getters.updateConnectorMetaInfo
      }
    }
  }
</script>
