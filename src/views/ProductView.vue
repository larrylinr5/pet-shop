<template>
  <div class="container" style="margin-bottom:calc(100vh - 42rem)">
      <div :style="{backgroundImage:`url(${product.imageUrl})`}" style="min-height: 400px;background-repeat:no-repeat;
      background-position: center center;">
      </div>
      <div class="row justify-content-between mt-4 mb-7">
        <div class="col-md-7">
          <h2 class="mb-0">{{product.title}}</h2>
          <p class="fw-bold">NT${{product.price}}</p>
          <p>{{product.description}}</p>
        </div>
        <div class="col-md-4">
          <div class="input-group mb-3 border mt-3">
            <div class="input-group-prepend">
              <button class="btn btn-outline-dark rounded-0 border-0 py-3" type="button" id="button-addon1" @click="minusNum">
                <i class="bi bi-dash"></i>
              </button>
            </div>
            <input type="text" class="form-control border-0 text-center my-auto shadow-none" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"  v-model="qty">
            <div class="input-group-append">
              <button class="btn btn-outline-dark rounded-0 border-0 py-3" type="button" id="button-addon2" @click="addNum">
                <i class="bi bi-plus"></i>
              </button>
            </div>
          </div>
          <button class="btn btn-dark btn-block rounded-0 py-3" @click="addToCart()">
            <span class="spinner-border spinner-border-sm" v-show="isLoadingItem===product.id"></span>
            加到購物車
            </button>
        </div>
      </div>
    </div>
</template>

<script>
import emitter from '@/libs/emitter'

export default {
  data () {
    return {
      product: {},
      isLoadingItem: '',
      qty: '1'
    }
  },
  methods: {
    getProduct () {
      const { id } = this.$route.params
      this.$http(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`).then(
        (res) => {
          this.product = res.data.product
        }
      )
    },
    // 新增購物車內容
    addToCart () {
      const data = {
        product_id: this.product.id,
        qty: Number(this.qty)
      }
      this.isLoadingItem = this.product.id
      this.$http.post(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`, { data })
        // 成功的結果
        .then((response) => {
          this.isLoadingItem = ''
          emitter.emit('get-cart')
        })
        // 失敗的結果
        .catch(() => {
          alert('新增購物失敗')
          this.isLoadingItem = ''
        })
    },
    // +1
    addNum () {
      this.qty = Number(this.qty) + 1
    },
    // -1
    minusNum () {
      if (Number(this.qty) <= 1) {
        this.qty = 1
      } else this.qty = Number(this.qty) - 1
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>
