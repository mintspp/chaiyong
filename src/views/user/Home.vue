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
            <b-col cols="12" lg="6"
              ><b-input-group class="mb-2">
                <b-input-group-prepend is-text>
                  <b-icon icon="search"></b-icon>
                </b-input-group-prepend>
                <b-form-input
                  type="search"
                  placeholder="ค้นหาสินค้า"
                ></b-form-input> </b-input-group
            ></b-col>
          </b-row>
        </div>
      </div>

      <div style="margin-right: 20px; margin-left: 20px; margin-top: 10px">
        <b-row>
          <b-col cols="12" lg="3" style="padding: 0px">
            <b-card
              class="card1"
              style="background-color: #faebef; border: 0px; border-radius: 0px"
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
              lg="3"
              style="padding: 5px"
            >
              <b-card-group
                deck
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2"
                border-variant="light"
                @click="godetail(item)"
              >
                <b-card :img-src="item.IMG" img-top>
                  <b-card-text class="text1">
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
                          <div align="right">
                            <b-icon
                              icon="heart"
                              style="width: 20px; height: 20px"
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
              lg="3"
              style="padding: 5px"
            >
              <b-card-group
                deck
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2"
                border-variant="light"
                @click="godetail(item)"
              >
                <b-card :img-src="item.IMG" img-top>
                  <b-card-text>
                    <div align="left">
                      <div class="fonts" style="font-size: 15px">
                        <b>{{ item.PRODUCT_NAME }}</b>
                      </div>
                      <b-row>
                        <b-col cols="6"
                          ><div align="left">
                            <h6 style="font-size: 12px">฿{{ item.PRICE }}</h6>
                          </div>
                        </b-col>
                        <b-col cols="6">
                          <div align="right">
                            <b-icon
                              icon="heart"
                              style="width: 20px; height: 20px"
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

    <div align="left" style="font-size: 1.2rem; margin-top: 10px;margin-right: 10px; margin-left: 10px">
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
                    <b-col cols="6">
                      <div align="right">
                        <b-icon
                          icon="heart"
                          style="width: 20px; height: 20px"
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
      <b-container class="bv-example-row">
        <b-row>
          <b-col cols="4">
            <div style="padding-top: 10px">
              <b-icon
                icon="house-fill"
                variant="light"
                font-scale="1.5"
              ></b-icon>
            </div>
            <font color="#FFFFFF">สินค้า</font>
          </b-col>

          <b-col cols="4">
            <div style="padding-top: 10px">
              <b-icon
                icon="heart-fill"
                variant="light"
                font-scale="1.5"
              ></b-icon>
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
      </b-container>
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
  }),
  created() {
    // สินค้าโปรโมชั่น
    axios.post(`${api_url.api_url}/selectproduct3`).then((response) => {
      console.log(response.data);
      this.product1 = response.data;
    });
    // สินค้าขายดี
    axios.post(`${api_url.api_url}/selectproduct2`).then((response) => {
      console.log(response.data);
      this.product2 = response.data;
    });
    // ทั้งหมด
    axios.post(`${api_url.api_url}/selectproduct`).then((response) => {
      console.log(response.data);
      this.product3 = response.data;
    });
  },
  mounted() {},
  methods: {
    godetail(item) {
      this.$store.commit("Detail/SET_PRODUCT_ID", item.PRODUCT_ID);
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
  /* background-color: #99cc66; */
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
</style>
