<template>
  <div>
    <router-link :to="route">
      <input type="button" :value="value" />
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'ToolsButton',
    props: {
      placeholder: {
        type: String,
        default: 'test'
      },
      value: {
        type: String,
        default: 'buttonVal'
      },
      route: {
        type: String,
        default: '/orders'
      },
    },
    data() {
      return {
        searchText: ""
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>