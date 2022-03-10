<template>
  <img :src="item.product.imageUrl" alt="" style="width: 120px; height: 120px; object-fit: cover;">
  <div class="w-100 p-3 position-relative">
    <a href="#" class="position-absolute" style="top: 16px; right: 16px;" @click.prevent="removeCartItem"><i class="bi bi-x-lg"></i></a>
    <p class="mb-0 fw-bold">{{item.product.title}}</p>
    <p class="mb-1 text-muted" style="height:1.5rem;overflow:hidden">{{item.product.description}}</p>
    <div class="d-flex justify-content-between align-items-center w-100">
      <div class="input-group w-50 align-items-center">
        <div class="input-group-prepend pe-1">
          <a href="#" style="text-decoration:none;color:black;" @click.prevent="minusNum"><i class="bi bi-dash"></i></a>
        </div>

        <input type="text" class="form-control border-0 text-center my-auto shadow-none bg-light px-0" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" v-model="qty">

        <div class="input-group-append ps-1">
          <a href="#" style="text-decoration:none;color:black;" @click.prevent="addNum"><i class="bi bi-plus"></i></a>
        </div>
      </div>
      <p class="mb-0 ms-auto">NT${{item.product.price}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  data () {
    return {
      qty: '1'
    }
  },
  methods: {
    // 移除單筆購物車內容
    removeCartItem () {
      console.log('z', (`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${this.item.id}`))
      this.$http.delete(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${this.item.id}`)
        // 成功的結果
        .then(() => {
          this.$emit('get-cart')
        })
        // 失敗的結果
        .catch(() => {
          alert('刪除失敗')
        })
    },
    // +1
    addNum () {
      this.qty = Number(this.qty) + 1
      this.UpdateCartItem()
    },
    // -1
    minusNum () {
      if (Number(this.qty) <= 1) {
        this.qty = 1
      } else this.qty = Number(this.qty) - 1
      this.UpdateCartItem()
    },
    // 更新購物車
    UpdateCartItem () {
      const data = {
        product_id: this.item.id,
        qty: Number(this.qty)
      }
      this.$http.put(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${this.item.id}`, { data })
        // 成功的結果
        .then((response) => {
          this.$emit('get-cart')
        })
        // 失敗的結果
        .catch(() => {
          alert('更新失敗')
        })
    }
  },
  mounted () {
    this.qty = this.item.qty
  }
}
</script>
