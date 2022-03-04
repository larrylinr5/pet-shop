<template>
  <!-- 導覽列 -->
  <FrontNavbar></FrontNavbar>
  <router-view></router-view>
</template>

<script>
import FrontNavbar from '@/components/FrontNavbar.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    FrontNavbar
  }
}
</script>
