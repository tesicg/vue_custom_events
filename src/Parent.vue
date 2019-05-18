<template>
  <div class="bg-secondary text-white text-center m-2 p-2 h5">
    <h2>{{ message }}</h2>
    <child-component :initial-product="product" @productSubmit="updateProduct">
    </child-component>
  </div>
</template>

<script>
  import ChildComponent from "./components/Child";

  export default {
    name: 'Parent',
    components: {
      ChildComponent
    },
    data: function () {
      return {
        message: "Ready",
        product: {
          name: "Kayak",
          category: "Watersports",
          price: 275
        }
      }
    },
    methods: {
      updateProduct(newProduct) {
        this.message = JSON.stringify(newProduct);
      }
    }
  }
</script>

<style>
</style>