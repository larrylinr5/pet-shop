<template>
  <!-- 導覽列 -->
  <DashboardNavbar></DashboardNavbar>
  <router-view></router-view>
</template>

<script>
import DashboardNavbar from '@/components/DashboardNavbar.vue'

export default {
  components: {
    DashboardNavbar
  },
  methods: {
    // 檢查是否為管理者
    checkAdmin () {
      /** 檢查是否有Token */
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)larryToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      )

      if (token) {
        // Axios 預設值
        this.$http.defaults.headers.common.Authorization = `${token}`

        this.$http
          .post('https://vue3-course-api.hexschool.io/v2/api/user/check', { api_token: this.token })
          // 成功的結果
          .then((res) => {
            this.$router.push('/admin/products')
          })
          // 失敗的結果
          .catch(() => {
            // 檢查失敗回登入頁面
            this.$router.push('/login')
          })
      } else {
        this.$router.push('/login')
        alert('您尚未登入。')
      }
    }
  },
  mounted () {
    this.checkAdmin()
  }
}
</script>
