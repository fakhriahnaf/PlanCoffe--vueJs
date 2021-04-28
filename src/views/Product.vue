<template>
  <div>
    <Header />
    <div class="breacrumb-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb-text product-more">
              <a href="./home.html"><i class="fa fa-home"></i> Home</a>
              <span>Detail</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="product-shop spad page-details">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-6">
                <div class="product-pic-zoom">
                  <img class="product-big-img" :src="gambar_default" alt="" />
                </div>
                <div
                  class="product-thumbs"
                  v-if="productDetail.galleries.length > 0"
                >
                  <carousel
                    class="product-thumbs-track ps-slider"
                    :nav="false"
                    :dots="false"
                    :loop="false"
                  >
                    <div
                      v-for="ss in productDetail.galleries"
                      :key="ss.id"
                      class="pt"
                      @click="changeImage(ss.photo)"
                      :class="ss.photo == gambar_default ? 'active' : ''"
                    >
                      <img :src="ss.photo" alt="" />
                    </div>
                  </carousel>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="product-details">
                  <div class="pd-title">
                    <span>{{ productDetail.type }}</span>
                    <h3>{{ productDetail.name }}</h3>
                  </div>
                  <div class="pd-desc">
                    <p v-html="productDetail.description"></p>
                    <h4>Rp {{ productDetail.price }}</h4>
                  </div>
                  <div class="quantity">
                    <a @click="saveKeranjang(productDetail.id, productDetail.name, productDetail.price, productDetail.galleries[0].photo)" href="#" class="primary-btn pd-cart"
                      >Add To Cart</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Product Shop Section End -->

    <!-- Related Products Section End -->
    <div class="related-products spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <h2>Related Products</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 col-sm-6">
            <div class="product-item">
              <div class="pi-pic">
                <img src="img/products/women-1.jpg" alt="" />
                <ul>
                  <li class="w-icon active">
                    <a href="#"><i class="icon_bag_alt"></i></a>
                  </li>
                  <li class="quick-view"><a href="#">+ Quick View</a></li>
                </ul>
              </div>
              <div class="pi-text">
                <div class="catagory-name">Coat</div>
                <a href="#">
                  <h5>Pure Pineapple</h5>
                </a>
                <div class="product-price">
                  $14.00
                  <span>$35.00</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="product-item">
              <div class="pi-pic">
                <img src="img/products/women-2.jpg" alt="" />
                <ul>
                  <li class="w-icon active">
                    <a href="#"><i class="icon_bag_alt"></i></a>
                  </li>
                  <li class="quick-view"><a href="#">+ Quick View</a></li>
                </ul>
              </div>
              <div class="pi-text">
                <div class="catagory-name">Shoes</div>
                <a href="#">
                  <h5>Guangzhou sweater</h5>
                </a>
                <div class="product-price">$13.00</div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="product-item">
              <div class="pi-pic">
                <img src="img/products/women-3.jpg" alt="" />
                <ul>
                  <li class="w-icon active">
                    <a href="#"><i class="icon_bag_alt"></i></a>
                  </li>
                  <li class="quick-view"><a href="#">+ Quick View</a></li>
                </ul>
              </div>
              <div class="pi-text">
                <div class="catagory-name">Towel</div>
                <a href="#">
                  <h5>Pure Pineapple</h5>
                </a>
                <div class="product-price">$34.00</div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="product-item">
              <div class="pi-pic">
                <img src="img/products/women-4.jpg" alt="" />
                <ul>
                  <li class="w-icon active">
                    <a href="#"><i class="icon_bag_alt"></i></a>
                  </li>
                  <li class="quick-view"><a href="#">+ Quick View</a></li>
                </ul>
              </div>
              <div class="pi-text">
                <div class="catagory-name">Towel</div>
                <a href="#">
                  <h5>Converse Shoes</h5>
                </a>
                <div class="product-price">$34.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import carousel from "vue-owl-carousel";
import axios from "axios";

export default {
  name: "Product",
  components: {
    Header,
    Footer,
    carousel,
  },
  data() {
    return {
      gambar_default: "img/mickey1.jpg",
      thumbs: [
        "img/mickey1.jpg",
        "img/mickey2.jpg",
        "img/mickey3.jpg",
        "img/mickey4.jpg",
      ],
      productDetail: [],
      keranjangUser: [],
    };
  },
  methods: {
    changeImage(urlImage) {
      this.gambar_default = urlImage;
    },
    setDataDetail(data) {
      //replace object product details dengan data dari API
      this.productDetail = data;
      // replace value gambar  default dengan data galleries
      this.gambar_default = data.galleries[0].photo;
    },
    saveKeranjang(idProduct, nameProduct, priceProduct, photoProduct) {

        var producedStored = {
            'id': idProduct,
            'name' : nameProduct,
            'price': priceProduct,
            'photo': photoProduct,
        }
        this.keranjangUser.push(producedStored);
        const parsed =JSON.stringify(this.keranjangUser);
        localStorage.setItem('keranjangUser', parsed);
    }
  },
  mounted() {
    if( localStorage.getItem('keranjangUser')){
        try{
            this.keranjangUser = JSON.parse(localStorage.getItem('keranjangUser'));
        } catch(e) {
            localStorage.removeItem('keranjangUser');
        }
    }
    axios
      .get("http://localhost:8000/api/product", {
        params: {
          id: this.$route.params.id,
        },
      })
      .then((res) => this.setDataDetail(res.data.data))
      //eslint disable
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.product-thumbs .pt {
  margin-right: 13px;
}
</style>