<template>
  <div class="product-detail">
    <div class="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-center">
        <div v-for="product in products" :key="product.id" class="pr">
          <!-- ID: {{ product.id }}<br> -->
          <!-- SKU: {{ product.sku }}<br>
          Active: {{ product.active }}<br>
          Barcode: {{ product.barcode }}<br>
          OrderID: {{ product.orders[0].id }}<br> -->
          <a 
            :href="product.product_images[0].imageUrl" 
            target="_blank" 
            rel="noopener noreferrer">
          <img 
            :src="product.product_images[0].imageUrl"
            alt="Product image"
            width="300px"
          >
          </a>
          <h3 style="margin-top: 15px; margin-bottom: 0">{{ product.name }}</h3>
          <p>
            <del class="normal-price">
              {{ product.product_prices[0].normalPrice }}
              <span class="currency-sign">{{ product.product_prices[0].currency.sign }}</span>
            </del>
            <span class="sale-price">
              {{ product.product_prices[0].salePrice }}
              <span class="currency-sign">
                {{ product.product_prices[0].currency.sign }}
              </span>
            </span>
          </p><br>
          {{ product.unit.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: 'Product',
  data() {
    return {
      products: []
    };
  },
  apollo: {
    products: {
      query: gql`
        query ProductGetOne {
          products {
            id
            sku
            barcode
            name
            amount
            active
            deletedAt
            unit {
              name
            }
            orders {
              id
            }
            product_images {
              imageUrl
            }
            product_prices(where:{currency: {abbreviation: "TL"}}) {
              salePrice
              normalPrice
              costPrice
              currency {
                sign
                abbreviation
              }
            }
          }
        }
      `,
      pollInterval: 4000
    },
  },
}
</script>

<style lang="css" scoped>
  p {
    font-size: 32px;
  }
  .pr {
    text-align: left;
    padding: 5px;
  }
  .normal-price {
    color: grey;
    font-style: italic;
    font-size: 24px;
  }
  .sale-price {
    color: orange;
  }
  .currency-sign {
    font-family: 'Trebuchet MS', Arial, sans-serif;
  }
</style>