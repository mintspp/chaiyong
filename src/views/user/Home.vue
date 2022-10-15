<template>
  <div style="background: #f9fafb">
    <!-- --------------nav------------ -->
    <Nav />
    <!-- --------------nav------------ -->

    <div>
      <br /><br /><br />
      <div>
        <br />
        <div style="margin-top: 0px; margin-right: 5px; margin-left: 5px">
          <b-row>
            <b-col cols="12" lg="6">
              <b-input-group class="mb-2">
                <b-input-group-prepend is-text>
                  <b-icon icon="search"></b-icon>
                </b-input-group-prepend>
                <b-form-input
                  type="search"
                  v-model="search"
                  @keyup="serchProduct()"
                  placeholder="ค้นหา"
                ></b-form-input>
              </b-input-group>
            </b-col>
          </b-row>
        </div>
      </div>

      <div v-if="divS == 1">
        <div style="margin-right: 20px; margin-left: 20px; margin-top: 10px">
          <b-row>
            <b-col cols="12" lg="3" style="padding: 0px">
              <b-card
                class="card1"
                style="
                  background-color: #faebef;
                  border: 0px;
                  border-radius: 0px;
                "
              >
                <div align="left">
                  <b class="less" style="color: #000">ครีมเปลี่ยนสีผม </b>
                  <h6>ครีมเปลี่ยนสีผม / ผงฟอกสี / น้ำยาดัดผม / น้ำยายืดผม</h6>
                </div>
              </b-card>
            </b-col>
            <b-col cols="12" lg="3" style="padding: 0px">
              <b-card class="card1"> <b> ครีมเปลี่ยนสีผม </b> </b-card>
            </b-col>
            <b-col cols="12" lg="3" style="padding: 0px">
              <b-card class="card1"> <b> ครีมเปลี่ยนสีผม </b> </b-card>
            </b-col>
            <b-col cols="12" lg="3" style="padding: 0px">
              <b-card class="card1"> <b> ครีมเปลี่ยนสีผม </b> </b-card>
            </b-col>
            <!-- <b-col cols="12" lg="3" style="padding: 0px">
            <button class="button2"></button>
          </b-col>
          <b-col cols="12" lg="3" style="padding: 0px">
            <button class="button3"></button>
          </b-col>
          <b-col cols="12" lg="3" style="padding: 0px">
            <button class="button4"></button>
          </b-col> -->
          </b-row>
        </div>

        <div style="margin-right: 5px; margin-left: 5px">
          <b-card border-variant="light" align="left" style="margin-top: 20px">
            <b-row>
              <b-col cols="6" lg="6"
                ><b style="color: #f5365c">สินค้าโปรโมชั่น </b></b-col
              >
              <b-col cols="6" lg="6" align="right">
                <button class="buttonP" @click="gopromotion()">ทั้งหมด</button>
              </b-col>
            </b-row>
            <hr class="style7" />
            <br />
            <div align="center">
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
                      <b-card-img @click="godetail(item)" :src="item.IMG">
                      </b-card-img>
                      <b-card-text class="text1" style="padding: 20px">
                        <div align="left">
                          <div style="line-height: 0.7">
                            <b style="font-size: 12px">{{
                              item.PRODUCT_NAME
                            }}</b>
                          </div>
                        </div>
                        <div style="margin-top: 15px">
                          <b-row>
                            <b-col cols="6">
                              <div align="left">
                                <div style="line-height: 1.8">
                                  <h6 style="font-size: 18px">
                                    ฿{{ item.PRICE }}
                                  </h6>
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
          </b-card>
          <b-card border-variant="light" align="left" style="margin-top: 20px">
            <b-row>
              <b-col cols="6" lg="6"
                ><b style="color: #f5365c">สินค้าขายดี </b></b-col
              >
              <b-col cols="6" lg="6" align="right">
                <button class="buttonP" @click="gobestsale()">ทั้งหมด</button>
              </b-col>
            </b-row>

            <hr class="style7" />
            <br />
            <div align="center">
              <b-row>
                <b-col
                  v-for="item in product2"
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
                      <b-card-img @click="godetail(item)" :src="item.IMG">
                      </b-card-img>
                      <b-card-text class="text1" style="padding: 20px">
                        <div align="left">
                          <div style="line-height: 0.7">
                            <b style="font-size: 12px">{{
                              item.PRODUCT_NAME
                            }}</b>
                          </div>
                        </div>
                        <div style="margin-top: 15px">
                          <b-row>
                            <b-col cols="6">
                              <div align="left">
                                <div style="line-height: 1.8">
                                  <h6 style="font-size: 18px">
                                    ฿{{ item.PRICE }}
                                  </h6>
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
          </b-card>
        </div>

        <div
          align="left"
          style="
            font-size: 1.2rem;
            margin-top: 10px;
            margin-right: 10px;
            margin-left: 10px;
          "
        >
          <b>สินค้าทั้งหมด</b>
        </div>
        <div style="margin-right: 20px; margin-left: 20px">
          <b-row>
            <b-col
              v-for="item in product3"
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
                  <b-card-img @click="godetail(item)" :src="item.IMG">
                  </b-card-img>
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
      </div>
    </div>

    <div v-if="divS == 2">
      <div style="margin-right: 20px; margin-left: 20px">
        <b-row>
          <b-col
            v-for="item in productall"
            :key="item.PRODUCT_ID"
            cols="6"
            lg="2"
            style="padding: 5px"
          >
            <b-card-group deck style="max-width: 20rem" @click="godetail(item)">
              <b-card :img-src="item.IMG" img-top>
                <b-card-text>
                  <div align="left">
                    <div class="fonts" style="font-size: 15px">
                      <p>{{ item.PRODUCT_NAME }}</p>
                    </div>
                    <b-row>
                      <b-col cols="6"
                        ><div align="left">
                          <h6 style="font-size: 12px">฿{{ item.PRICE }}</h6>
                        </div>
                      </b-col>
                      <b-col cols="6"> </b-col>
                    </b-row>
                  </div>
                </b-card-text>
              </b-card>
            </b-card-group>
          </b-col>
        </b-row>
      </div>
    </div>
    <!-- footer -->
    <br /><br />
    <div class="footerr">
      <b-row>
        <b-col cols="4">
          <div style="padding-top: 10px">
            <b-icon @click="backindex()" icon="house-fill" variant="light" font-scale="1.5"></b-icon>
          </div>
          <font color="#FFFFFF">สินค้า</font>
        </b-col>

        <b-col cols="4">
          <div style="padding-top: 10px">
            <b-icon icon="heart-fill" variant="light" font-scale="1.5"></b-icon>
          </div>
          <font color="#FFFFFF">ถูกใจ</font>
        </b-col>

        <b-col cols="4" @click="goshopping()">
          <div style="padding-top: 10px">
            <b-icon
              icon="basket-fill"
              variant="light"
              font-scale="1.5"
            ></b-icon>
          </div>
          <font color="#FFFFFF">รถเข็น</font>
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
    product2: null,
    product3: null,
    productall: null,
    divS: 1,
    search: "",
  }),
  async created() {
    // สินค้าโปรโมชั่น
    let p1 = await axios.post(`${api_url.api_url}/selectproduct3`);
    this.product1 = p1.data;
    // สินค้าขายดี
    let p2 = await axios.post(`${api_url.api_url}/selectproduct2`);
    this.product2 = p2.data;
    // ทั้งหมด
    let p3 = await axios.post(`${api_url.api_url}/selectproduct`);
    this.product3 = p3.data;
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

    var order2 = [];
    for (let index = 0; index < p2.data.length; index++) {
      const element = p2.data[index];
      console.log(element.PRODUCT_ID);
      order2.push(element);
      let check = await axios.post(`${api_url.api_url}/selectproductlike`, {
        PRODUCT_ID: element.PRODUCT_ID,
        MEMBER_ID: localStorage.getItem("IDMEMBER"),
      });
      console.log(check.data.length);
      order2[index].checklike = check.data.length;
    }
    console.log(order2);
    this.product2 = order2;

    var order3 = [];
    for (let index = 0; index < p3.data.length; index++) {
      const element = p3.data[index];
      console.log(element.PRODUCT_ID);
      order3.push(element);
      let check = await axios.post(`${api_url.api_url}/selectproductlike`, {
        PRODUCT_ID: element.PRODUCT_ID,
        MEMBER_ID: localStorage.getItem("IDMEMBER"),
      });
      console.log(check.data.length);
      order3[index].checklike = check.data.length;
    }
    console.log(order3);
    this.product3 = order3;
  },
  mounted() {},
  methods: {
    backindex() {
      this.$router.push({ path: "/" });
    },
    serchProduct() {
      // สินค้า
      console.log(this.search.length);
      if (this.search.length > 0) {
        this.divS = 2;
        axios
          .post(`${api_url.api_url}/selectproductALL`, {
            search: this.search,
          })
          .then((response) => {
            console.log(response.data);
            this.productall = response.data;
          });
      } else {
        this.divS = 1;
      }
    },
    godetail(item) {
      localStorage.setItem("IDPRODUCT", item.PRODUCT_ID);
      this.$router.push({ path: "/userdetail" });
    },
    gopromotion() {
      this.$router.push({ path: "/userpromotion" });
    },
    gobestsale() {
      this.$router.push({ path: "/userbestsale" });
    },
    goshopping() {
      this.$router.push({ path: "/usershopping" });
    },
    async reset() {
      // สินค้าโปรโมชั่น
      let p1 = await axios.post(`${api_url.api_url}/selectproduct3`);
      this.product1 = p1.data;
      // สินค้าขายดี
      let p2 = await axios.post(`${api_url.api_url}/selectproduct2`);
      this.product2 = p2.data;
      // ทั้งหมด
      let p3 = await axios.post(`${api_url.api_url}/selectproduct`);
      this.product3 = p3.data;
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

      var order2 = [];
      for (let index = 0; index < p2.data.length; index++) {
        const element = p2.data[index];
        console.log(element.PRODUCT_ID);
        order2.push(element);
        let check = await axios.post(`${api_url.api_url}/selectproductlike`, {
          PRODUCT_ID: element.PRODUCT_ID,
          MEMBER_ID: localStorage.getItem("IDMEMBER"),
        });
        console.log(check.data.length);
        order2[index].checklike = check.data.length;
      }
      console.log(order2);
      this.product2 = order2;

      var order3 = [];
      for (let index = 0; index < p3.data.length; index++) {
        const element = p3.data[index];
        console.log(element.PRODUCT_ID);
        order3.push(element);
        let check = await axios.post(`${api_url.api_url}/selectproductlike`, {
          PRODUCT_ID: element.PRODUCT_ID,
          MEMBER_ID: localStorage.getItem("IDMEMBER"),
        });
        console.log(check.data.length);
        order3[index].checklike = check.data.length;
      }
      console.log(order3);
      this.product3 = order3;
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

<style>
.footerr {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  background: rgb(52, 86, 139);
  color: white;
  text-align: center;
}
.headd {
  text-align: center;
  color: white;
}
.card1 {
  border: none;
  color: rgb(85, 85, 85);

  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;

  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(253, 253, 253, 0.19);
}
.button1:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.crad1 {
  border-radius: 50%;
}
.button2 {
  background-color: #e8efdc;
  border: none;
  color: white;
  padding: 130px 180px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 15px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(224, 224, 224, 0.19);
}
.button2:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.button3 {
  background-color: #faf1d1;
  border: 1px solid #bebebe;
  color: white;
  padding: 130px 180px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 15px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(224, 224, 224, 0.19);
}
.button3:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.button4 {
  background-color: #f7e1d4;
  border: none;
  color: white;
  padding: 130px 180px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 15px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(224, 224, 224, 0.19);
}
.button4:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.style7 {
  border-top: 1px solid #e4e4e4;
  border-bottom: 0px solid #fff;
}
.buttonP {
  padding: 4px 9px;
  font-size: 12px;
  margin: 0px;
  border-radius: 0.375rem;
  border: none;
  background-color: #f5365c;
  color: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(224, 224, 224, 0.19);
}

.buttonP:hover {
  transform: translateY(-1px);
}
/* CSS */

.buttonP:focus {
  background-color: #f5365c;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
}

.buttonP:active {
  background-color: #bd3543;
  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
  transform: translateY(0);
}
.less {
  letter-spacing: 2px;
  line-height: 30pt;
}
.text1 {
  text-overflow: ellipsis;
}
.b1 {
  line-height: 0.2;
}

div .card55 .card-body {
  min-height: 0px;
  padding: 0px;
}
</style>
