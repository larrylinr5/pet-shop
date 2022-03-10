<template>
<div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 bg-white py-5" style="min-height: calc(100vh - 56px - 76px);">
          <div class="d-flex justify-content-between">
            <h2 class="mt-2">Cart Detail</h2>
          </div>
          <!-- 產品列表 -->
          <div class="d-flex mt-4 bg-light" v-for="item in cartData.carts" :key="item.id">
            <CartObj :item="item" @get-cart="getCart()"></CartObj>
          </div>

          <table class="table mt-4 text-muted">
            <tbody>
              <tr v-for="item in cartData.carts" :key="item.id+'1'">
                <th scope="row" class="border-0 px-0 font-weight-normal">{{item.product.title}}</th>
                <td class="text-end border-0 px-0">{{Number(item.final_total)}}</td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-between mt-4">
            <p class="mb-0 h4 fw-bold">總金額</p>
            <p class="mb-0 h4 fw-bold">NT${{totalMoney}}</p>
          </div>
          <router-link class="btn btn-dark btn-block mt-4 rounded-0 py-3" style="text-decoration:none;" to="/table">前往結帳</router-link>
        </div>
      </div>
    </div>
</template>

<script>
import CartObj from '@/components/CartObj.vue'

export default {
  data () {
    return {
      cartData: {
        carts: []
      }
    }
  },
  components: {
    CartObj
  },
  methods: {
    getCart () {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.cartData = res.data.data
          console.log('this.cartData', this.cartData)
        })
    }
  },
  computed: {
    totalMoney () {
      let money = 0
      this.cartData.carts.forEach(x => {
        money += Number(x.final_total) * Number(x.qty)
      })
      return money
    }
  },
  mounted () {
    this.getCart()
  }
}

</script>
