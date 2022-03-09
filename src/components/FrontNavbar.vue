<template>
  <!--<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/home">Larry首頁</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/products">產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cart">購物車</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin">後台</router-link>
          </li>
        </ul>
      </div>
      <router-link type="button" class="btn btn-primary m-2" to="/login">登入</router-link>
      <button type="button" class="btn btn-primary">
        結帳
        <span class="badge rounded-pill bg-danger">{{ cartData?.carts?.length }}</span>
      </button>
    </div>
  </nav> -->

  <div class="bg-white sticky-top">
      <div class="container">
        <nav class="navbar px-0 navbar-expand-lg navbar-light bg-white">
          <!-- 中間標題回首頁 -->
          <router-link class="navbar-brand position-absolute" to="/home" style="left: 50%; transform: translate(-50%, -50%); top: 50%;">Pet Shop</router-link>

          <!-- 手機版標題按鈕 -->
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- 標題連結區塊 -->
          <div class="collapse navbar-collapse bg-white custom-header-md-open" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link" to="/products">產品列表</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/admin">後台</router-link>
              </li>
            </ul>
          </div>

          <!-- 登入結帳區塊 -->
          <div class="d-flex">
            <router-link style="text-decoration:none;color:black;" to="/login">登入</router-link>
            <router-link style="text-decoration:none;margin-left:15px;color:black;" to="/cart">
              <i class="bi bi-cart"></i>
              <span class="badge rounded-pill bg-danger">{{ cartData?.carts?.length }}</span>
            </router-link>
          </div>
        </nav>
      </div>
    </div>
</template>

<script>
import emitter from '@/libs/emitter'

export default {
  data () {
    return {
      login_flg: false,
      cartData: {
        carts: []
      }
    }
  },
  methods: {
    getCart () {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          console.log('cart:', res)
          this.cartData = res.data.data
        })
    }
  },
  mounted () {
    this.getCart()
    emitter.on('get-cart', () => {
      this.getCart()
    })
    emitter.on('login-flgtrue', () => {
      this.login_flg = true
    })
    emitter.on('login-flgfalse', () => {
      this.login_flg = false
    })
  }
}

</script>
