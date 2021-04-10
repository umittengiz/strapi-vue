<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <First/> 
  </div>
</template>

<script>
import First from '../components/First.vue'

export default {
  name: 'Home',
  components: {
    First
  }
}
</script>
