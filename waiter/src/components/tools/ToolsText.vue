<template>
  <div>
    <p v-text="text"></p>
  </div>
</template>

<script>
  export default {
    name: "ToolsText",
    props: {
      text: {
        type: String,
        default: "Text"
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>