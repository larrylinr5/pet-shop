<template>
  <!-- #region productPage -->
  <div class="container">
    <!-- 新增產品按鈕 -->
    <div class="text-end mt-4">
      <button class="btn btn-primary" @click="openModal('new',{})">
        建立新的產品
      </button>
    </div>

    <!-- 產品table -->
    <table class="table mt-4">
      <!-- tableHead -->
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <!-- tableBody -->
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{product.category}}</td>
          <td>{{product.title}}</td>
          <td class="text-end">{{product.origin_price}}</td>
          <td class="text-end">{{product.price}}</td>
          <td>
            <span class="text-success" v-if="product.is_enabled">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button type="button" class="btn btn-outline-primary btn-sm" @click="openModal('edit', product)">
                編輯
              </button>
              <button type="button" class="btn btn-outline-danger btn-sm" @click="openModal('delete', product)">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 分頁元件 -->
    <PagiNation :pages="pagination" @emit-pages="getProducts"></PagiNation>
  </div>
  <!-- #endregion -->

  <!-- #region Modal -->
  <ProductModal ref="product" :product_input="tempProduct" :is-new="isNew" :current_page="pagination.current_page" @update="getProducts"></ProductModal>
  <DelproductModal ref="delProduct" :item="tempProduct" @update="getProducts"></DelProductModal>
  <!-- #endregion -->
</template>

<script>
import PagiNation from '@/components/PagiNation.vue'
import DelproductModal from '@/components/DelproductModal.vue'
import ProductModal from '@/components/ProductModal.vue'

export default {
  components: {
    PagiNation,
    DelproductModal,
    ProductModal
  },
  data () {
    return {
      /** 產品 */
      products: [],
      /** 產品暫存物件 */
      tempProduct: {
        imagesUrl: []
      },
      // 是否為新增
      isNew: false,
      // 分頁物件
      pagination: {}
    }
  },
  methods: {
    // 取得後臺產品列表
    getProducts (page = 1) {
      this.$http(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`)
        // 成功的結果
        .then((response) => {
          if (response.data.success) {
            this.pagination = response.data.pagination
            this.products = response.data.products
          }
        })
        // 失敗的結果
        .catch(() => {
          alert('取得後臺產品列表失敗')
        })
    },
    // 開啟Modal
    openModal (isNew, item) {
      // 新增
      if (isNew === 'new') {
        this.tempProduct = {
          imagesUrl: []
        }
        this.isNew = true
        // productModal.show()
        this.$refs.product.show()
      } else if (isNew === 'edit') { // 編輯
        this.isNew = false
        this.tempProduct = JSON.parse(JSON.stringify(item))
        // productModal.show()
        this.$refs.product.show()
      } else if (isNew === 'delete') { // 刪除
        this.isNew = false
        this.tempProduct = JSON.parse(JSON.stringify(item))
        this.$refs.delProduct.show()
      }
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
