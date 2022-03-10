<template>
  <div class="container" style="margin-top:8rem;margin-bottom:calc(100vh - 27rem)">
    <div class="row justify-content-center">
      <!-- 表單 -->
      <div class="col-6">
        <form class="form-signin" @submit.prevent="login">
          <!-- form-floating 是讓label浮在input裡面的class -->
          <!-- email -->
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              v-model="user.username"
              id="floatingInput"
              placeholder="XXX@XXX.com"
              required
              autofocus
            />
            <label for="floatingInput">Email address</label>
          </div>
          <!-- password -->
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              v-model="user.password"
              id="floatingPassword"
              placeholder="Password"
              required
            />
            <label for="floatingPassword">Password</label>
          </div>
          <!-- 登入Btn -->
          <button
            class="btn btn-lg btn-primary w-100 mt-3"
            type="submit"
          >
            登入
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: 'larrylinr5@gmail.com',
        password: 'larrylinr5'
      }
    }
  },
  methods: {
    login () {
      this.$http
        .post(`${process.env.VUE_APP_API}admin/signin`, this.user)
        // 成功
        .then((response) => {
          if (response.data.success) {
            const { token, expired } = response.data
            // 寫入 cookie token
            // expires 設置有效時間
            document.cookie = `larryToken=${token};expires=${new Date(expired)}; path=/`

            // 登入成功回到產品列表
            this.$router.push('/products')
          }
        })
        // 失敗
        .catch(() => {
          alert('登入失敗')
        })
    }
  }
}
</script>
