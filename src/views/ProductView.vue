<template>
  <div class="container">
    <div class="card" style="width: 64rem;">
      <div class="row">
        <div class="col-6">
          <img :src="product.imageUrl" class="card-img-top" alt="...">
        </div>
        <div class="col-6">
          <div class="card-body">
            <h5 class="card-title">{{product.title}}</h5>
            <p class="card-text">{{ product.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      product: {}
    }
  },
  methods: {
    getProduct () {
      console.log(this.$route)
      const { id } = this.$route.params
      this.$http(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`).then(
        (res) => {
          this.product = res.data.product
        }
      )
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>
