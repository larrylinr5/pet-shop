<template>
  <div id="productModal" ref="productModal" class="modal fade" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <!-- header -->
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span>新增產品</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <!-- body -->
        <div class="modal-body">
          <div class="row">
            <!-- 左邊圖片區塊 -->
            <div class="col-sm-4">
              <!-- 主要圖片區塊 -->
              <div class="mb-2">
                <div class="mb-3">
                  <h3 class="mb-3">主要圖片</h3>
                  <label for="imageUrl" class="form-label">輸入圖片網址</label>
                  <input type="text" class="form-control" placeholder="請輸入圖片連結" v-model="product.imageUrl">
                </div>
                <img class="img-fluid" :src="product.imageUrl">
              </div>

              <!-- 多圖新增 -->
              <h3 class="mb-3">多圖新增</h3>
              <!-- 預設顯示 點擊按鈕，在暫存產品物件內建立 imagesUrl多圖陣列 -->
              <div v-if="!(Array.isArray(product.imagesUrl))">
                <button class="btn btn-outline-primary btn-sm d-block w-100" @click="createImages">
                  新增多圖
                </button>
              </div>
              <!-- 暫存產品物件有建立 imagesUrl多圖陣列時開啟 否則隱藏 -->
              <div v-else>
                <!-- 顯示陣列所有的圖 -->
                <div class="mb-1" v-for="(image, key) in product.imagesUrl" :key="key">
                  <div class="mb-3">
                    <label for="imageUrl" class="form-label">圖片網址</label>
                    <input v-model="product.imagesUrl[key]" type="text" class="form-control" placeholder="請輸入圖片連結">
                  </div>
                  <img class="img-fluid" :src="image">
                </div>
                <!-- 在多圖陣列長度為0時 或者 當下的輸入框有值時顯示 [新增圖片] -->
                <div v-if="!product.imagesUrl.length || product.imagesUrl[product.imagesUrl.length - 1]">
                  <button class="btn btn-outline-primary btn-sm d-block w-100" @click="product.imagesUrl.push('')">
                    新增圖片
                  </button>
                </div>
                <!-- 當下的輸入框有值時顯示 [刪除圖片] -->
                <div v-if="product.imagesUrl[product.imagesUrl.length - 1]">
                  <button class="btn btn-outline-danger btn-sm d-block w-100" @click="product.imagesUrl.pop()">
                    刪除圖片
                  </button>
                </div>
              </div>
            </div>

            <!-- 右邊資料區塊 -->
            <div class="col-sm-8">
              <!-- 標題 -->
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input id="title" type="text" class="form-control" placeholder="請輸入標題" v-model="product.title">
              </div>

              <!-- 左邊=>分類 ; 右邊=>單位 -->
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">分類</label>
                  <input id="category" type="text" class="form-control" placeholder="請輸入分類" v-model="product.category">
                </div>
                <div class="mb-3 col-md-6">
                  <label for="unit" class="form-label">單位</label>
                  <input id="unit" type="text" class="form-control" placeholder="請輸入單位" v-model="product.unit">
                </div>
              </div>

              <!-- 左邊=>原價 ; 右邊=>售價 -->
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價</label>
                  <input id="origin_price" type="number" min="0" class="form-control" placeholder="請輸入原價" v-model="product.origin_price">
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價</label>
                  <input id="price" type="number" min="0" class="form-control" placeholder="請輸入售價" v-model.number="product.price">
                </div>
              </div>
              <hr>

              <!-- 產品描述 -->
              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                <textarea id="description" type="text" class="form-control" placeholder="請輸入產品描述" v-model="product.description">
                </textarea>
              </div>

              <!-- 說明內容 -->
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                  <textarea id="content" type="text" class="form-control" placeholder="請輸入說明內容" v-model="product.content">
                  </textarea>
              </div>

              <!-- 是否啟用 -->
              <div class="mb-3">
                <div class="form-check">
                  <input id="is_enabled" class="form-check-input" type="checkbox" :true-value="1" :false-value="0" v-model="product.is_enabled">
                  <label class="form-check-label" for="is_enabled">是否啟用</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <!-- isNew:true => 新增 ; isNew:false => 編輯 -->
          <button type="button" class="btn btn-primary" @click="isNew?createProduct():editProduct()">
            確認
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
  props: ['product_input', 'isNew', 'current_page'],
  // 元件的資料
  data () {
    return {
      productModal: null,
      product: {}
    }
  },
  // 在這個生命週期設定Modal
  mounted () {
    this.productModal = new Modal(this.$refs.productModal)
    this.product = this.product_input
    console.log('a', this.product_input)
  },
  watch: {
    product_input () {
      this.product = this.product_input
    }
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
    // 新增產品
    createProduct () {
      this.$http.post(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`, { data: this.product })
        // 成功的結果
        .then(() => {
          // 彈出成功新增訊息
          alert('新增成功')
          // 關閉Modal
          this.productModal.hide()
          // 重新抓畫面的List
          this.$emit('update')
        })
        // 失敗的結果
        .catch(() => {
          alert('新增產品失敗')
        })
    },
    // 編輯選取到的產品
    editProduct () {
      this.$http.put(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.product.id}`, { data: this.product })
        // 成功的結果
        .then((response) => {
        // 若成功編輯
          if (response.data.success) {
            // 彈出成功編輯訊息
            alert('編輯成功')
            // 關閉Modal
            this.productModal.hide()
            // 重新抓畫面的List
            this.$emit('update', this.current_page)
          }
        })
        // 失敗的結果
        .catch(() => {
          alert('編輯產品失敗')
        })
    },
    // 在props進來的產品物件內建立 imagesUrl多圖陣列
    createImages () {
      this.product.imagesUrl = []
      this.product.imagesUrl.push('')
    },

    // 開啟modal
    show () {
      this.productModal.show()
    }
  }
}
</script>
