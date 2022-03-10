"use strict";(self["webpackChunkpet_shop"]=self["webpackChunkpet_shop"]||[]).push([[261],{4261:function(t,e,a){a.r(e),a.d(e,{default:function(){return qt}});var l=a(6252),s=a(3577);const o={class:"container"},r={class:"text-end mt-4"},i={class:"table mt-4"},d=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",{width:"120"},"分類"),(0,l._)("th",null,"產品名稱"),(0,l._)("th",{width:"120"},"原價"),(0,l._)("th",{width:"120"},"售價"),(0,l._)("th",{width:"100"},"是否啟用"),(0,l._)("th",{width:"120"},"編輯")])],-1),c={class:"text-end"},n={class:"text-end"},u={key:0,class:"text-success"},p={key:1},m={class:"btn-group"},h=["onClick"],_=["onClick"];function g(t,e,a,g,b,w){const v=(0,l.up)("PagiNation"),y=(0,l.up)("ProductModal"),f=(0,l.up)("DelproductModal");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",o,[(0,l._)("div",r,[(0,l._)("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=t=>w.openModal("new",{}))}," 建立新的產品 ")]),(0,l._)("table",i,[d,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(b.products,(t=>((0,l.wg)(),(0,l.iD)("tr",{key:t.id},[(0,l._)("td",null,(0,s.zw)(t.category),1),(0,l._)("td",null,(0,s.zw)(t.title),1),(0,l._)("td",c,(0,s.zw)(t.origin_price),1),(0,l._)("td",n,(0,s.zw)(t.price),1),(0,l._)("td",null,[t.is_enabled?((0,l.wg)(),(0,l.iD)("span",u,"啟用")):((0,l.wg)(),(0,l.iD)("span",p,"未啟用"))]),(0,l._)("td",null,[(0,l._)("div",m,[(0,l._)("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:e=>w.openModal("edit",t)}," 編輯 ",8,h),(0,l._)("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:e=>w.openModal("delete",t)}," 刪除 ",8,_)])])])))),128))])]),(0,l.Wm)(v,{pages:b.pagination,onEmitPages:w.getProducts},null,8,["pages","onEmitPages"])]),(0,l.Wm)(y,{ref:"product",product_input:b.tempProduct,"is-new":b.isNew,current_page:b.pagination.current_page,onUpdate:w.getProducts},null,8,["product_input","is-new","current_page","onUpdate"]),(0,l.Wm)(f,{ref:"delProduct",item:b.tempProduct,onUpdate:w.getProducts},null,8,["item","onUpdate"])],64)}var b=a(9963);const w={"aria-label":"Page navigation example"},v={class:"pagination"},y=(0,l._)("span",{"aria-hidden":"true"},"«",-1),f=[y],k={key:0,class:"page-link"},P=["onClick"],U=(0,l._)("span",{"aria-hidden":"true"},"»",-1),M=[U];function x(t,e,a,o,r,i){return(0,l.wg)(),(0,l.iD)("nav",w,[(0,l._)("ul",v,[(0,l._)("li",{class:(0,s.C_)(["page-item",{disabled:1===a.pages.current_page}])},[(0,l._)("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=(0,b.iM)((t=>i.emitPages(a.pages.current_page-1)),["prevent"]))},f)],2),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.pages.total_pages,((t,e)=>((0,l.wg)(),(0,l.iD)("li",{key:e,class:(0,s.C_)(["page-item",{active:t===a.pages.current_page}])},[t===a.pages.current_page?((0,l.wg)(),(0,l.iD)("span",k,(0,s.zw)(t),1)):((0,l.wg)(),(0,l.iD)("a",{key:1,class:"page-link",href:"#",onClick:(0,b.iM)((e=>i.emitPages(t)),["prevent"])},(0,s.zw)(t),9,P))],2)))),128)),(0,l._)("li",{class:(0,s.C_)(["page-item",{disabled:a.pages.current_page===a.pages.total_pages}])},[(0,l._)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[1]||(e[1]=(0,b.iM)((t=>i.emitPages(a.pages.current_page+1)),["prevent"]))},M)],2)])])}var C={props:["pages"],methods:{emitPages(t){this.$emit("emit-pages",t)}}},D=a(3744);const $=(0,D.Z)(C,[["render",x]]);var N=$;const V={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},z={class:"modal-dialog"},H={class:"modal-content border-0"},J=(0,l._)("div",{class:"modal-header bg-danger text-white"},[(0,l._)("h5",{id:"delProductModalLabel",class:"modal-title"},[(0,l._)("span",null,"刪除產品")]),(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),L={class:"modal-body"},O=(0,l.Uk)(" 是否刪除： "),S={class:"text-danger"},Y=(0,l.Uk)("商品(刪除後將無法恢復)。 "),Z={class:"modal-footer"},I=(0,l._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function K(t,e,a,o,r,i){return(0,l.wg)(),(0,l.iD)("div",V,[(0,l._)("div",z,[(0,l._)("div",H,[J,(0,l._)("div",L,[O,(0,l._)("strong",S,(0,s.zw)(a.item.title),1),Y]),(0,l._)("div",Z,[I,(0,l._)("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=t=>i.deleteProduct())}," 確認刪除 ")])])])],512)}var W=a(7424),q=a.n(W),A={props:["item"],data(){return{delModal:null}},mounted(){this.delModal=new(q())(this.$refs.delProductModal)},methods:{deleteProduct(){this.$http.delete(`https://vue3-course-api.hexschool.io/v2/api/larrylinr5/admin/product/${this.item.id}`).then((t=>{t.data.success&&(alert(t.data.message),this.delModal.hide(),this.$emit("update"))})).catch((()=>{alert("刪除產品失敗")}))},show(){this.delModal.show()}}};const E=(0,D.Z)(A,[["render",K]]);var j=E;const B={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},F={class:"modal-dialog modal-xl"},G={class:"modal-content border-0"},Q=(0,l._)("div",{class:"modal-header bg-dark text-white"},[(0,l._)("h5",{id:"productModalLabel",class:"modal-title"},[(0,l._)("span",null,"新增產品")]),(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),R={class:"modal-body"},T={class:"row"},X={class:"col-sm-4"},tt={class:"mb-2"},et={class:"mb-3"},at=(0,l._)("h3",{class:"mb-3"},"主要圖片",-1),lt=(0,l._)("label",{for:"imageUrl",class:"form-label"},"輸入圖片網址",-1),st=["src"],ot=(0,l._)("h3",{class:"mb-3"},"多圖新增",-1),rt={key:0},it={key:1},dt={class:"mb-3"},ct=(0,l._)("label",{for:"imageUrl",class:"form-label"},"圖片網址",-1),nt=["onUpdate:modelValue"],ut=["src"],pt={key:0},mt={key:1},ht={class:"col-sm-8"},_t={class:"mb-3"},gt=(0,l._)("label",{for:"title",class:"form-label"},"標題",-1),bt={class:"row"},wt={class:"mb-3 col-md-6"},vt=(0,l._)("label",{for:"category",class:"form-label"},"分類",-1),yt={class:"mb-3 col-md-6"},ft=(0,l._)("label",{for:"unit",class:"form-label"},"單位",-1),kt={class:"row"},Pt={class:"mb-3 col-md-6"},Ut=(0,l._)("label",{for:"origin_price",class:"form-label"},"原價",-1),Mt={class:"mb-3 col-md-6"},xt=(0,l._)("label",{for:"price",class:"form-label"},"售價",-1),Ct=(0,l._)("hr",null,null,-1),Dt={class:"mb-3"},$t=(0,l._)("label",{for:"description",class:"form-label"},"產品描述",-1),Nt={class:"mb-3"},Vt=(0,l._)("label",{for:"content",class:"form-label"},"說明內容",-1),zt={class:"mb-3"},Ht={class:"form-check"},Jt=(0,l._)("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),Lt={class:"modal-footer"},Ot=(0,l._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function St(t,e,a,s,o,r){return(0,l.wg)(),(0,l.iD)("div",B,[(0,l._)("div",F,[(0,l._)("div",G,[Q,(0,l._)("div",R,[(0,l._)("div",T,[(0,l._)("div",X,[(0,l._)("div",tt,[(0,l._)("div",et,[at,lt,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":e[0]||(e[0]=t=>o.product.imageUrl=t)},null,512),[[b.nr,o.product.imageUrl]])]),(0,l._)("img",{class:"img-fluid",src:o.product.imageUrl},null,8,st)]),ot,Array.isArray(o.product.imagesUrl)?((0,l.wg)(),(0,l.iD)("div",it,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.product.imagesUrl,((t,e)=>((0,l.wg)(),(0,l.iD)("div",{class:"mb-1",key:e},[(0,l._)("div",dt,[ct,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t=>o.product.imagesUrl[e]=t,type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,8,nt),[[b.nr,o.product.imagesUrl[e]]])]),(0,l._)("img",{class:"img-fluid",src:t},null,8,ut)])))),128)),!o.product.imagesUrl.length||o.product.imagesUrl[o.product.imagesUrl.length-1]?((0,l.wg)(),(0,l.iD)("div",pt,[(0,l._)("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[2]||(e[2]=t=>o.product.imagesUrl.push(""))}," 新增圖片 ")])):(0,l.kq)("",!0),o.product.imagesUrl[o.product.imagesUrl.length-1]?((0,l.wg)(),(0,l.iD)("div",mt,[(0,l._)("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:e[3]||(e[3]=t=>o.product.imagesUrl.pop())}," 刪除圖片 ")])):(0,l.kq)("",!0)])):((0,l.wg)(),(0,l.iD)("div",rt,[(0,l._)("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[1]||(e[1]=(...t)=>r.createImages&&r.createImages(...t))}," 新增多圖 ")]))]),(0,l._)("div",ht,[(0,l._)("div",_t,[gt,(0,l.wy)((0,l._)("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":e[4]||(e[4]=t=>o.product.title=t)},null,512),[[b.nr,o.product.title]])]),(0,l._)("div",bt,[(0,l._)("div",wt,[vt,(0,l.wy)((0,l._)("input",{id:"category",type:"text",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":e[5]||(e[5]=t=>o.product.category=t)},null,512),[[b.nr,o.product.category]])]),(0,l._)("div",yt,[ft,(0,l.wy)((0,l._)("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":e[6]||(e[6]=t=>o.product.unit=t)},null,512),[[b.nr,o.product.unit]])])]),(0,l._)("div",kt,[(0,l._)("div",Pt,[Ut,(0,l.wy)((0,l._)("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":e[7]||(e[7]=t=>o.product.origin_price=t)},null,512),[[b.nr,o.product.origin_price]])]),(0,l._)("div",Mt,[xt,(0,l.wy)((0,l._)("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":e[8]||(e[8]=t=>o.product.price=t)},null,512),[[b.nr,o.product.price,void 0,{number:!0}]])])]),Ct,(0,l._)("div",Dt,[$t,(0,l.wy)((0,l._)("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":e[9]||(e[9]=t=>o.product.description=t)},"\r\n                ",512),[[b.nr,o.product.description]])]),(0,l._)("div",Nt,[Vt,(0,l.wy)((0,l._)("textarea",{id:"content",type:"text",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":e[10]||(e[10]=t=>o.product.content=t)},"\r\n                  ",512),[[b.nr,o.product.content]])]),(0,l._)("div",zt,[(0,l._)("div",Ht,[(0,l.wy)((0,l._)("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":e[11]||(e[11]=t=>o.product.is_enabled=t)},null,512),[[b.e8,o.product.is_enabled]]),Jt])])])])]),(0,l._)("div",Lt,[Ot,(0,l._)("button",{type:"button",class:"btn btn-primary",onClick:e[12]||(e[12]=t=>a.isNew?r.createProduct():r.editProduct())}," 確認 ")])])])],512)}var Yt={props:["product_input","isNew","current_page"],data(){return{productModal:null,product:{}}},mounted(){this.productModal=new(q())(this.$refs.productModal),this.product=this.product_input},watch:{product_input(){this.product=this.product_input}},methods:{deleteProduct(){this.$http.delete(`https://vue3-course-api.hexschool.io/v2/api/larrylinr5/admin/product/${this.item.id}`).then((t=>{t.data.success&&(alert(t.data.message),this.delModal.hide(),this.$emit("update"))})).catch((()=>{alert("刪除產品失敗")}))},createProduct(){this.$http.post("https://vue3-course-api.hexschool.io/v2/api/larrylinr5/admin/product",{data:this.product}).then((()=>{alert("新增成功"),this.productModal.hide(),this.$emit("update")})).catch((()=>{alert("新增產品失敗")}))},editProduct(){this.$http.put(`https://vue3-course-api.hexschool.io/v2/api/larrylinr5/admin/product/${this.product.id}`,{data:this.product}).then((t=>{t.data.success&&(alert("編輯成功"),this.productModal.hide(),this.$emit("update",this.current_page))})).catch((()=>{alert("編輯產品失敗")}))},createImages(){this.product.imagesUrl=[],this.product.imagesUrl.push("")},show(){this.productModal.show()}}};const Zt=(0,D.Z)(Yt,[["render",St]]);var It=Zt,Kt={components:{PagiNation:N,DelproductModal:j,ProductModal:It},data(){return{products:[],tempProduct:{imagesUrl:[]},isNew:!1,pagination:{}}},methods:{getProducts(t=1){this.$http(`https://vue3-course-api.hexschool.io/v2/api/larrylinr5/admin/products?page=${t}`).then((t=>{t.data.success&&(this.pagination=t.data.pagination,this.products=t.data.products)})).catch((()=>{alert("取得後臺產品列表失敗")}))},openModal(t,e){"new"===t?(this.tempProduct={imagesUrl:[]},this.isNew=!0,this.$refs.product.show()):"edit"===t?(this.isNew=!1,this.tempProduct=JSON.parse(JSON.stringify(e)),this.$refs.product.show()):"delete"===t&&(this.isNew=!1,this.tempProduct=JSON.parse(JSON.stringify(e)),this.$refs.delProduct.show())}},mounted(){this.getProducts()}};const Wt=(0,D.Z)(Kt,[["render",g]]);var qt=Wt}}]);
//# sourceMappingURL=261.9c8abca7.js.map