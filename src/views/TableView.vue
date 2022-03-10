<template>
  <div class="container">
    <div class="row justify-content-between">
      <!-- 表單資訊 -->
      <div class="col-md-5 bg-white py-6 px-5" style="height: 100vh;">
        <div class="my-5 row justify-content-center">
          <v-form ref="form" class="col-md-6" v-slot="{ errors }" @submit="onSubmit">
            <!-- Email -->
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <v-field id="email" name="email" type="email" class="form-control" :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" rules="email|required" v-model="user.email"></v-field>
              <error-message name="email" class="invalid-feedback"></error-message>
            </div>

            <!-- 收件人姓名 -->
            <div class="mb-3">
              <label for="name" class="form-label">收件人姓名</label>
              <v-field id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }" placeholder="請輸入姓名" rules="required" v-model="user.name"></v-field>
              <error-message name="姓名" class="invalid-feedback"></error-message>
            </div>

            <!-- 收件人電話 -->
            <div class="mb-3">
              <label for="tel" class="form-label">收件人電話</label>
              <v-field id="tel" name="電話" type="text" class="form-control" :class="{ 'is-invalid': errors['電話'] }" placeholder="請輸入電話" :rules="isPhone" v-model="user.phone"></v-field>
              <error-message name="電話" class="invalid-feedback"></error-message>
            </div>

            <!-- 收件人地址 -->
            <div class="mb-3">
              <label for="address" class="form-label">收件人地址</label>
              <v-field id="address" name="地址" type="text" class="form-control" :class="{ 'is-invalid': errors['地址'] }" placeholder="請輸入地址" rules="required" v-model="user.address"></v-field>
              <error-message name="地址" class="invalid-feedback"></error-message>
            </div>

            <!-- 留言 -->
            <div class="mb-3">
              <label for="message" class="form-label">留言</label>
              <textarea id="message" class="form-control" cols="30" rows="10" v-model="user.msg"></textarea>
            </div>

            <div class="text-end">
              <button type="submit" class="btn btn-danger" :disabled="cartData.carts.length===0">送出訂單</button>
              <router-link class="btn btn-dark btn-block mt-4 rounded-0 py-3" style="text-decoration:none;" to="/table">確認結帳</router-link>
            </div>
          </v-form>
        </div>
      </div>

      <!-- 購物車資料 -->
      <div class="col-md-5 bg-white py-6 px-5" style="height: 100vh;">
        <div class="d-flex mt-4 bg-light" v-for="item in cartData.carts" :key="item.id">
          <img :src="item.product.imageUrl" alt="" style="width: 120px; height: 120px; object-fit: cover;">
          <div class="w-100 p-3 position-relative">
            <p class="mb-0 fw-bold">{{item.product.title}}</p>
            <p class="mb-1 text-muted" style="height:1.5rem;overflow:hidden">{{item.product.description}}</p>
            <div class="d-flex justify-content-between align-items-center w-100">
              <div class="input-group w-50 align-items-center">
                <input type="text" class="form-control border-0 text-center my-auto shadow-none bg-light px-0" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" disabled :value="item.qty">
              </div>
              <p class="mb-0 ms-auto">NT${{item.product.price}}</p>
            </div>
          </div>
        </div>

        <div style="margin-left: 124px;">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cartData: {
        carts: []
      },
      // 使用者表單資訊
      user: {
        // 電子郵件
        email: '',
        // 收件人姓名
        name: '',
        // 地址
        address: '',
        // 電話
        phone: '',
        // 留言
        msg: ''
      }
    }
  },
  methods: {
    isRequired (value) {
      return value ? true : 'This field is required'
    },
    getCart () {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.cartData = res.data.data
        })
    },
    // 電話檢核規則
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    },
    // 送出表單
    onSubmit () {
      console.log(this.user)
      alert('表單送出')
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
