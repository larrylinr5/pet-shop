<template>
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
            <router-link type="button" class="btn btn-light ml-1" to="/products" @click="logOut">登出</router-link>
          </div>
        </nav>
      </div>
    </div>
</template>

<script>

export default {
  methods: {
    logOut () {
      this.$http
        .post(`${process.env.VUE_APP_API}logout`)
        // 成功
        .then(() => {
          alert('登出成功')
          document.cookie = 'larryToken="";expires=""; path=/'
        })
        // 失敗
        .catch(() => {
          alert('登出失敗')
        })
    }
  }
}

</script>
