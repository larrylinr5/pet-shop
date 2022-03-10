<template>
  <div id="navModal" ref="navModal" class="modal fade" tabindex="-1" aria-labelledby="delProductModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-body">
          <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link" style="text-decoration:none;color:black;" @click="navModal.hide()" to="/products">產品列表</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" style="text-decoration:none;color:black;" @click="navModal.hide()" to="/admin">後台</router-link>
              </li>
            </ul>
        </div>
        <div class="modal-footer">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 載入modal
import Modal from 'bootstrap/js/dist/modal'

export default {
  // 元件的資料
  data () {
    return {
      navModal: null
    }
  },
  // 在這個生命週期設定Modal
  mounted () {
    this.navModal = new Modal(this.$refs.navModal)
  },
  // 元件的方法區塊
  methods: {
    // 開啟modal
    show () {
      this.navModal.show()
    }
  }
}
</script>
