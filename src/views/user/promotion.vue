<template>
  <div style="background: #f5f5f5">
    <!-- --------------nav------------ -->
    <Nav />
    <!-- --------------nav------------ -->
    <br /><br /><br />
    <br />
    <div style="margin-top: 0px; margin-right: 10px; margin-left: 10px">
      <b-row>
        <b-col cols="12" lg="6"
          ><b-input-group class="mb-2">
            <b-input-group-prepend is-text>
              <b-icon icon="search"></b-icon>
            </b-input-group-prepend>
            <b-form-input
              type="search"
              v-model="search"
              @keyup="serchProduct()"
              placeholder="ค้นหา"
            ></b-form-input> </b-input-group
        ></b-col>
      </b-row>
      <div align="left" style="font-size: 1.2rem; margin-top: 10px">
        <b>สินค้าโปรโมชั่น</b>
      </div>
    </div>
    <div style="margin-top: 0px; margin-right: 20px; margin-left: 20px">
      <b-row>
        <b-col
          v-for="item in product1"
          :key="item.PRODUCT_ID"
          cols="6"
          lg="2"
          style="padding: 5px"
        >
          <b-card-group
            deck
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
            border-variant="light"
          >
            <b-card style="padding: 0px" class="card55">
              <b-card-img @click="godetail(item)" :src="item.IMG"> </b-card-img>
              <b-card-text class="text1" style="padding: 20px">
                <div align="left">
                  <div style="line-height: 0.7">
                    <b style="font-size: 12px">{{ item.PRODUCT_NAME }}</b>
                  </div>
                </div>
                <div style="margin-top: 15px">
                  <b-row>
                    <b-col cols="6">
                      <div align="left">
                        <div style="line-height: 1.8">
                          <h6 style="font-size: 18px">฿{{ item.PRICE }}</h6>
                        </div>
                      </div>
                    </b-col>
                    <b-col cols="6">
                      <div v-if="item.checklike > 0" align="right">
                        <b-icon
                          icon="heart-fill"
                          style="width: 30px; height: 30px"
                          @click="Like(item)"
                          variant="danger"
                        ></b-icon>
                      </div>
                      <div v-else align="right">
                        <b-icon
                          icon="heart"
                          style="width: 30px; height: 30px"
                          @click="Like(item)"
                          variant="danger"
                        ></b-icon>
                      </div>
                    </b-col>
                  </b-row>
                </div>
              </b-card-text>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>

    <!-- footer -->
    <br /><br />
    <div class="footerr">
      <b-row>
        <b-col cols="6">
          <div @click="backindex()" style="padding-top: 10px">
            <b-icon
              icon="chevron-left"
              variant="light"
              font-scale="1.5"
            ></b-icon>
          </div>
          <font color="#FFFFF">ย้อนกลับ</font>
        </b-col>
        <b-col cols="6">
          <div @click="gocart()" style="padding-top: 10px">
            <b-icon
              icon="basket-fill"
              variant="light"
              font-scale="1.5"
            ></b-icon>
          </div>
          <font color="#FFFFF">รถเข็น</font>
        </b-col>
      </b-row>
    </div>
    <!-- footer -->
  </div>
</template>
<script>
import Nav from "../../components/Nav";
import axios from "axios";
import firebase from "firebase";
const api_url = require("../../../utilities/api");
export default {
  components: {
    Nav,
  },
  data: () => ({
    product1: null,
    search: "",
  }),
  async created() {
    // สินค้าโปรโมชั่น
    let p1 = await axios.post(`${api_url.api_url}/selectproduct3s`,{
      search:this.search
    });
    this.product1 = p1.data;
    var order1 = [];
    for (let index = 0; index < p1.data.length; index++) {
      const element = p1.data[index];
      console.log(element.PRODUCT_ID);
      order1.push(element);
      let check = await axios.post(`${api_url.api_url}/selectproductlike`, {
        PRODUCT_ID: element.PRODUCT_ID,
        MEMBER_ID: localStorage.getItem("IDMEMBER"),
      });
      console.log(check.data.length);
      order1[index].checklike = check.data.length;
    }
    console.log(order1);
    this.product1 = order1;
  },
  methods: {
    serchProduct() {
      // สินค้า;
      axios
        .post(`${api_url.api_url}/selectproduct3s`, {
          search: this.search,
        })
        .then((response) => {
          console.log(response.data);
          this.product1 = response.data;
        });
    },
    backindex() {
      this.$router.push({ path: "/" });
    },
    godetail(item) {
      localStorage.setItem("IDPRODUCT", item.PRODUCT_ID);
      this.$router.push({ path: "/userdetail" });
    },
    async reset() {
      // สินค้าโปรโมชั่น
      let p1 = await axios.post(`${api_url.api_url}/selectproduct3s`, {
          search: this.search,
        });
      this.product1 = p1.data;
      // checklike
      var order1 = [];
      for (let index = 0; index < p1.data.length; index++) {
        const element = p1.data[index];
        console.log(element.PRODUCT_ID);
        order1.push(element);
        let check = await axios.post(`${api_url.api_url}/selectproductlike`, {
          PRODUCT_ID: element.PRODUCT_ID,
          MEMBER_ID: localStorage.getItem("IDMEMBER"),
        });
        console.log(check.data.length);
        order1[index].checklike = check.data.length;
      }
      console.log(order1);
      this.product1 = order1;
    },
    Like(x) {
      console.log(x);
      if (x.checklike > 0) {
        axios
          .post(`${api_url.api_url}/updateLike`, {
            PRODUCT_ID: x.PRODUCT_ID,
          })
          .then((response) => {
            console.log(response.data);
            this.reset(response);
          });
      } else {
        axios
          .post(`${api_url.api_url}/insertLike`, {
            PRODUCT_ID: x.PRODUCT_ID,
            MEMBER_ID: localStorage.getItem("IDMEMBER"),
          })
          .then((response) => {
            console.log(response.data);
            this.reset(response);
          });
      }
    },
  },
};
</script>
