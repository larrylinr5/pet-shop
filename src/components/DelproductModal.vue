<template>
  <div id="delProductModal" ref="delProductModal" class="modal fade" tabindex="-1" aria-labelledby="delProductModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title">
            <span>刪除產品</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          是否刪除：
          <strong class="text-danger">{{item.title}}</strong>商品(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="deleteProduct()">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 載入modal
import Modal from 'bootstrap/js/dist/modal'

export default {
  // 傳入的資料
  props: ['item'],
  // 元件的資料
  data () {
    return {
      delModal: null
    }
  },
  // 在這個生命週期設定Modal
  mounted () {
    this.delModal = new Modal(this.$refs.delProductModal)
  },
  // 元件的方法區塊
  methods: {
    // 刪除選取到的產品
    deleteProduct () {
      this.$http.delete(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.item.id}`)
        // 成功的結果
        .then((response) => {
          // 若成功刪除
          if (response.data.success) {
            // 彈出成功刪除訊息
            alert(response.data.message)
            // 關閉Modal
            this.delModal.hide()
            // 重新抓畫面的List
            this.$emit('update')
          }
        })
        // 失敗的結果
        .catch(() => {
          alert('刪除產品失敗')
        })
    },
    // 開啟modal
    show () {
      this.delModal.show()
    }
  }
}
</script>
