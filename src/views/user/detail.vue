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
      <br><br><br>
      <div align="center">
        <b-card border-variant="light" class="text-center">
          <b-row>
            <b-col xl="6" lg="6" sm="12">
              <b-img
                style="width: 100%"
                src="https://firebasestorage.googleapis.com/v0/b/chaiyongimg.appspot.com/o/4.png?alt=media&token=b9da41a4-dc4e-4982-8e1f-a1181821c7b9"
              >
              </b-img>
            </b-col>
            <b-col xl="6" lg="6" sm="12" align="left">
              <div style="margin: 10px">
                <h5>ไดร์ with</h5>
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
                      <b-col cols="6" lg="3"
                        ><h5
                          style="
                            color: rgb(151 142 142);
                            text-decoration: line-through;
                          "
                        >
                          300 บาท
                        </h5></b-col
                      >
                      <b-col cols="6" lg="9">
                        <h3 style="color: #de4747">120 บาท</h3></b-col
                      >
                    </b-row>
                  </b-col>
                  <b-col cols="12" lg="12">
                    <label for="demo-sb">จำนวน</label>
                    <b-form-spinbutton
                      style="border: 1px solid #ced4da; margin-left: 15px"
                      id="demo-sb"
                      v-model="PRODUCT_AMOUNT"
                      @change="PM()"
                      min="1"
                      max="100"
                      inline
                    ></b-form-spinbutton>
                  </b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </div>

    <div style="margin: 30px">
      <div align="center">
        <b-card border-variant="light">
          <div align="left" style="margin-top: 20px; margin-left: 10px">
            <b>คะแนนของสินค้า</b>
          </div>
          <div style="margin-top: 15px; margin-left: 10px; margin-right: 10px">
            <b-card border-variant="warning" style="background-color: #fff9e5">
              <div>
                <b-row>
                  <b-col cols="12" lg="3" style="margin-bottom: 5px;">
                    <b-form-rating
                      style="border: 0px; background-color: #fff9e5"
                      variant="warning"
                      v-model="value"
                      readonly
                      show-value
                      precision="2"
                    ></b-form-rating>
                  </b-col>
                  <b-col cols="4" lg="3" style="margin-bottom: 5px;">
                    <b-button variant="outline-warning">ทั้งหมด</b-button>
                  </b-col>
                   <b-col cols="8" lg="3" style="margin-bottom: 5px;">
                    <b-button variant="outline-warning">ความคิดเห็น</b-button>
                  </b-col> <b-col cols="12" lg="3" style="margin-bottom: 5px;">
                    <b-button variant="outline-warning">รูปภาพ/วิดีโอ</b-button>
                  </b-col>
                </b-row>
              </div>
            </b-card>
          </div>
        </b-card>
      </div>
    </div>
    <!-- footer -->
    <br /><br />
    <div class="footerr">
      <b-container class="bv-example-row">
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
      </b-container>
    </div>
    <!-- footer -->
  </div>
</template>
<script>
import Nav from "../../components/Nav";
export default {
  components: {
    Nav,
  },
  data() {
    return {
      value: 3.555,
      PRODUCT_AMOUNT: 1,
    };
  },
  methods: {
    backindex() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>
