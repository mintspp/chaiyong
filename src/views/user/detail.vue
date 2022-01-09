<template>
  <div style="background: #f5f5f5">
    <!-- --------------nav------------ -->
    <Nav />
    <!-- --------------nav------------ -->

    <!-- <div style="width: 40%; margin: 20px">
      <b-input-group class="mb-2">
        <b-input-group-prepend is-text>
          <b-icon icon="search"></b-icon>
        </b-input-group-prepend>
        <b-form-input type="search" placeholder="Search terms"></b-form-input>
      </b-input-group>
    </div> -->

    <div>
      <br /><br /><br />
      <div align="center" style="margin-top: px">
        <b-card border-variant="light" class="text-center">
          <b-row>
            <b-col xl="5" lg="5" sm="12">
              <b-img
                style="width: 100%"
                :src="productDetail.IMG"
              >
              </b-img>
            </b-col>
            <b-col xl="7" lg="7" sm="12" align="left">
              <div style="margin: 10px">
                <h5>{{productDetail.PRODUCT_NAME}}</h5>
                <b-row>
                  <b-col cols="12" lg="4">
                    <div>
                      <b-form-rating
                        style="border: 0px"
                        variant="warning"
                        v-model="value"
                        readonly
                        show-value
                        precision="2"
                      ></b-form-rating>
                    </div>
                  </b-col>
                  <b-col cols="12" lg="4">
                    <p style="margin-top: 7px">0 ขายแล้ว</p>
                  </b-col>
                  <b-col cols="12" lg="12">
                    <b-row>
                      <!-- <b-col cols="4" lg="2"> -->
                        <!-- <h5
                          style="
                            color: rgb(151 142 142);
                            text-decoration: line-through;
                          "
                        >
                          300 บาท
                        </h5> -->
                        <!-- </b-col> -->
                      <b-col cols="8" lg="10">
                        <h3 style="color: #de4747">{{productDetail.PRICE}} บาท</h3></b-col
                      >
                    </b-row>
                  </b-col>
                  <b-col cols="12" lg="12">
                    <b>จำนวน</b>
                    <b-form-spinbutton
                      style="border: 1px solid #ced4da; margin-left: 15px;margin-right: 15px"
                      id="demo-sb"
                      v-model="PRODUCT_AMOUNT"
                      @change="PM()"
                      min="1"
                      max="100"
                      inline
                    ></b-form-spinbutton>
                    <b>ชิ้น</b>
                  </b-col>
                  <b-col cols="12" lg="12" style="margin-top:10px">
                    <b>สินค้าคงเหลือ</b> <br>
                    {{productDetail.STOCK}} ชิ้น
                  </b-col>
                  <b-col cols="12" lg="12" style="margin-top:10px">
                    <b>รายละเอียด</b> <br>
                    {{productDetail.DETAIL}}
                  </b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </div>

    <div style="margin-top: 10px">
      <div align="center">
        <b-card border-variant="light">
          <div align="left" style="margin-top: 20px; margin-left: 3px">
            <b>คะแนนของสินค้า</b>
          </div>
          <div style="margin-top: 15px">
            <b-card
              border-variant="warning"
              style="background-color: #fff9e5; padding: 0px"
              class="card-body"
            >
              <div>
                <b-row>
                  <b-col cols="12" lg="3" style="margin-bottom: 5px">
                    <b-form-rating
                      style="border: 0px; background-color: #fff9e5"
                      variant="warning"
                      v-model="value"
                      readonly
                      show-value
                      precision="2"
                    ></b-form-rating>
                  </b-col>
                  <b-col cols="3" lg="3" style="margin-bottom: 0px">
                    <b-button variant="outline-warning" style="width: 60px">
                      <b style="font-size: 11px">ทั้งหมด</b></b-button
                    >
                  </b-col>
                  <b-col
                    cols="5"
                    lg="3"
                    style="margin-bottom: 0px; margin-right: -15px"
                  >
                    <b-button
                      variant="outline-warning"
                      style="width: 80px"
                      align="right"
                    >
                      <b style="font-size: 11px"> ความคิดเห็น </b></b-button
                    >
                  </b-col>
                  <b-col cols="4" lg="3" style="margin-bottom: 0px">
                    <b-button
                      variant="outline-warning"
                      style="width: 85px"
                      align="right"
                      ><b style="font-size: 11px"> รูปภาพ/วิดีโอ </b></b-button
                    >
                  </b-col>
                </b-row>
              </div>
            </b-card>
          </div>
        </b-card>
      </div>
    </div>

    <div style="margin-top: 3px">
      <b-card border-variant="light">
        <b-row>
          <b-col cols="3" lg="2">
            <b-img
              rounded="circle"
              style="width: 60px"
              src="https://firebasestorage.googleapis.com/v0/b/chaiyongimg.appspot.com/o/4.png?alt=media&token=b9da41a4-dc4e-4982-8e1f-a1181821c7b9"
            >
            </b-img>
          </b-col>
          <b-col cols="9" lg="10">
            <h6 align="left">supaporn</h6>
            <b-form-rating
              style="
                border: 0px;
                width: 10px;
                padding-left: 0px;
                margin-top: 3px;
              "
              variant="warning"
              v-model="value"
              readonly
              show-value
              precision="2"
              align="left"
            ></b-form-rating>
            <br />
            <div>
              <h6 align="left">comment</h6>
            </div>

            <div>
              <b-row>
                <b-col cols="12">
                  <b-img
                    rounded
                    style="width: 100px"
                    align="left"
                    src="https://firebasestorage.googleapis.com/v0/b/chaiyongimg.appspot.com/o/4.png?alt=media&token=b9da41a4-dc4e-4982-8e1f-a1181821c7b9"
                  >
                  </b-img>
                </b-col>
              </b-row>
            </div>

            <div align="right">วันที่</div>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <!-- footer -->
    <br /><br />
    <div class="footerr">
     
        <b-row>
          <b-col cols="4">
            <div @click="backindex()" style="padding-top: 10px">
              <b-icon
                icon="chevron-left"
                variant="light"
                font-scale="1.5"
              ></b-icon>
            </div>
            <font color="#FFFFF">ย้อนกลับ</font>
          </b-col>
          <b-col cols="4">
            <div @click="gocart()" style="padding-top: 10px">
              <b-icon
                icon="basket-fill"
                variant="light"
                font-scale="1.5"
              ></b-icon>
            </div>
            <font color="#FFFFF">รถเข็น</font>
          </b-col>

          <b-col cols="4">
            <div style="padding-top: 10px">
              <b-icon
                icon="cart-plus"
                font-scale="1.5"
                variant="light"
              ></b-icon>
            </div>
            <font color="#FFFFF">ซื้อสินค้า</font>
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
  data() {
    return {
      value: 3.555,
      PRODUCT_AMOUNT: 1,
      productDetail:null,
    };
  },
    mounted() {
      this.showDetail();
       axios.post(`${api_url.api_url}/selectproductDetail`,{
         PRODUCT_ID:this.$store.getters["Detail/PRODUCT_ID"]
       }).then((response) => {
      console.log(response.data);
      this.productDetail = response.data[0];
    });
    },
  methods: {
    backindex() {
      this.$router.push({ path: "/" });
    },
    showDetail() {
      console.log(this.$store.getters["Detail/PRODUCT_ID"]);
      return this.$store.getters["Detail/PRODUCT_ID"];
    },
  },
};
</script>
<style>
.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1rem;
}
</style>
