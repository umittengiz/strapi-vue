<template>
  <div id="app">
    <Layout/>
  </div>
</template>

<script>
import Layout from "./components/molecules/Layout.vue";
export default {
  data() {
    return {
      navbarLinks: [
        {
          title: 'Home',
          slug: '/'
        },
        {
          title: 'About',
          slug: '/about'
        },
        {
          title: 'First',
          slug: '/first'
        },
        {
          title: 'Restaurants',
          slug: '/restaurants'
        },
        {
          title: 'Dashboard',
          slug: '/dashboard'
        },
        {
          title: 'Product Detail',
          slug: '/product-detail'
        },
      ]
    }
  },
  components: {
    Layout
  },
}
</script>


<style lang="scss">
#app {
  font-family: Century Gothic, Staatliches, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
  'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
  'Noto Color Emoji';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
