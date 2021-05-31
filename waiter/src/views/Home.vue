<template>
  <div class="home">
    <h1>Home</h1>
    <ToolsSearchBar :placeholder="placeholder" />
    <!-- <p>{{ searchText }}</p> -->
    <ToolsText :text="toolsText" />
    <ToolsButton :value="toolsButtonVal" :route="toolsTo" />
  </div>
</template>

<script>
import ToolsButton from "../components/tools/ToolsButton.vue";
import ToolsSearchBar from "../components/tools/ToolsSearchBar.vue";
import ToolsText from "../components/tools/ToolsText.vue";
export default {
  components: { ToolsSearchBar, ToolsText, ToolsButton },
  name: "Home",
  data() {
    return {
      placeholder: "pholder",
      toolsText: "ptext",
      toolsButtonVal: "pbutton",
      toolsTo: "/tables",
    };
  },
};
</script>
