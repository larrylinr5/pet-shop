<template>
  <!-- banner區塊 -->
  <div class="banner d-flex align-items-end justfy-content-center">
    <h1 class="col offset-1">給寵物一個溫暖的家</h1>
  </div>

  <!-- 產品區塊 -->
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-6 mt-md-4" v-for="demoProduct in demoProducts" :key="demoProduct.id">
        <div class="card border-0 mb-4">
          <img
            :src="demoProduct.imageUrl"
            class="card-img-top rounded-0"
            alt="..."
            style="width:50%;height50%;margin:auto"
          />
          <div class="card-body p-0">
            <div class="d-flex justify-content-center">
              <h4 class="mb-0 mt-4 ">{{demoProduct.title}}</h4>
            </div>
            <div class="d-flex justify-content-center mt-3">
              <p class="card-text text-muted mb-0 w-75" style="height:4.5rem;overflow:hidden">
                {{ demoProduct.description }}
              </p>
            </div>
            <div class="d-flex justify-content-center">
            <router-link class="btn btn-outline-dark text-nowrap mt-3" style="text-decoration:none;" :to="`/product/${demoProduct.id}`">點我看更多</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 敘述區塊
  <div class="bg-light mt-7">
      <div class="container">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row justify-content-center py-7">
                <div class="col-md-8 d-flex">
                  <img src="https://images.unsplash.com/photo-1545529468-42764ef8c85f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" alt="" class="rounded-circle me-5" style="width: 160px; height: 160px; object-fit: cover;">
                  <div class="d-flex flex-column">
                    <p class="h5">“寵物是您孤獨時的伴侶<br>在櫥窗中等待著有命定的主人，痴痴的痴痴的等著<br>有一天彼此相遇”</p>
                    <p class="mt-auto text-muted">讓我們在這裡巧遇</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  -->

    <!-- 前往產品區塊 -->
    <div class="bg-light py-7" style="margin-bottom:15px">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-4 text-center">
            <h3 style="margin-top:15px">Pet Shop</h3>
            <p class="text-muted">毛寵與您相知相惜，在您回家時守在門口等待，在您難過時撫慰心靈</p>
            <button class="btn btn-dark mt-4 rounded-0" @click="goProducts">找寵去</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      products: [],
      demoProducts: []
    }
  },
  methods: {
    getProducts () {
      this.$http(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`).then(
        (res) => {
          this.products = res.data.products
          for (let i = 0; i < 4; i++) {
            this.demoProducts.push(this.products[i])
          }
        }
      )
    },
    goProducts () {
      this.$router.push('/products')
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>

<style>
.banner{
  height:calc(100vh - 58px);
  background-image:url(https://images.unsplash.com/photo-1508675801627-066ac4346a61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80);
  background-size:cover;
  background-repeat:no-repeat;
  background-position:center;
}
</style>
