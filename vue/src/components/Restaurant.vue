<template>
  <div>
    <p>RESTAURANTS</p>
    <div class="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-center">
        <ul class="uk-navbar-nav">
          <li v-for="restaurant in restaurants" v-bind:key="restaurant.id">
            <router-link
              :to="{ path: '/restaurant/' + restaurant.id }"
              :key="restaurant.id"
            >
              {{ restaurant.name }}
            </router-link>
            <p>{{ count }}</p>
            <button @click="tgl()">Toggle</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "Restaurant",
  data() {
    return {
      restaurants: [],
      count: false
    };
  },
  methods: {
    tgl() {
      this.count = !this.count
    }
  },
  computed: {
    toggle: function() {
      let vm = this;
      if (this.restaurants[0].name === "Biscotte Restaurante") {
        vm.count = !vm.count;
      }
      return vm.count;
    }
  },
  apollo: {
    restaurants: {
      query: gql`
        query Restaurants {
          restaurants {
            id
            name
          }
        }
      `,
      pollInterval: 5000
    },
  },
};
</script>

<style lang="css">
a {
  text-decoration: none;
}

h1 {
  font-family: Staatliches;
  font-size: 120px;
}

#category {
  font-family: Staatliches;
  font-weight: 500;
}

#title {
  letter-spacing: 0.4px;
  font-size: 22px;
  font-size: 1.375rem;
  line-height: 1.13636;
}

#banner {
  margin: 20px;
  height: 800px;
}

#editor {
  font-size: 16px;
  font-size: 1rem;
  line-height: 1.75;
}

.uk-navbar-container {
  background: #fff !important;
  font-family: Staatliches;
}

img:hover {
  opacity: 1;
  transition: opacity 0.25s cubic-bezier(0.39, 0.575, 0.565, 1);
}
</style>
