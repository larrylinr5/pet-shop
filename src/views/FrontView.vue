<template>
  <!-- 導覽列 -->
  <FrontNavbar></FrontNavbar>
  <router-view></router-view>
  <FooterComponent></FooterComponent>
</template>

<script>
import FrontNavbar from '@/components/FrontNavbar.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    FrontNavbar,
    FooterComponent
  },
  mounted () {
    this.$router.push('/home')
  }
}
</script>
