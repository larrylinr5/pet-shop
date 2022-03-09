<template>
  <!-- 選項區塊 -->
  <nav class="navbar navbar-expand-lg navbar-light justify-content-center border border-start-0 border-end-0 border-top border-bottom">
    <div class="navbar-nav flex-row overflow-auto navbar-custom-scroll">
      <div class="nav-item nav-link text-nowrap px-2" @click="chooseProduct('')">全部系列</div>
      <div class="nav-item nav-link text-nowrap px-2" @click="chooseProduct('cat')">貓貓系列</div>
      <div class="nav-item nav-link text-nowrap px-2" @click="chooseProduct('dog')">狗狗系列</div>
      <div class="nav-item nav-link text-nowrap px-2" @click="chooseProduct('other')">寵物裝備</div>
    </div>
  </nav>

  <!-- 產品區塊 -->
  <div class="container mt-md-5 mt-3 mb-7">
      <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4">
        <div class="col" v-for="product in chooseProducts" :key="product.id">
          <router-link style="text-decoration:none;" :to="`/product/${product.id}`">
            <div class="card border-0 mb-4 position-relative position-relative">
              <div :style="{backgroundImage:`url(${product.imageUrl})`}" style="height:400px;background-size:cover;background-position:center center"></div>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3" style="color:black">{{ product.title }}</h4>
                <p class="card-text text-muted mb-0" style="height:4.5rem;overflow:hidden">{{ product.description }}</p>
                <p class="text-muted mt-3">NT$ {{ product.price }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      products: [],
      // 分頁物件
      pagination: {},
      // 挑選過的產品
      chooseProducts: []
    }
  },
  methods: {
    getProducts () {
      this.$http(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`).then(
        (res) => {
          console.log(res)
          this.products = res.data.products
          this.chooseProducts = this.products
        }
      )
    },
    chooseProduct (category = '') {
      if (['cat', 'dog', 'other'].includes(category)) {
        this.chooseProducts = this.products.filter(x => x.category === category)
      } else {
        this.chooseProducts = this.products
      }
    },
    goProduct (id) {
      console.log('>>>', id)
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
