<template>
  <div>
    <input v-model="searchText" type="text" :placeholder="placeholder" />
  </div>
</template>

<script>
  export default {
    name: 'ToolsSearchBar',
    props: {
      placeholder: {
        type: String,
        default: 'test'
      }
    },
    data() {
      return {
        searchText: ''
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>