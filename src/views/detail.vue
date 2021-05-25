<template>
  <div style="background: #f5f5f5">
    <!-- --------------nav------------ -->
    <Nav />
    <!-- --------------nav------------ -->

    <div style="margin: 50px">
      <div align="center">
        <b-card border-variant="light" class="text-center">
          <b-row>
            <b-col xl="6" lg="6" sm="12">
              <b-img
                style="width: 400px"
                src="https://firebasestorage.googleapis.com/v0/b/chaiyongimg.appspot.com/o/4.png?alt=media&token=b9da41a4-dc4e-4982-8e1f-a1181821c7b9"
              >
              </b-img>
            </b-col>
            <b-col xl="6" lg="6" sm="12" align="left">
              <h5>ไดร์ with</h5>
              <b-row>
                <b-col cols="4">
                  <b-icon icon="heart" scale="1" variant="dark"></b-icon>
                </b-col>
              </b-row>
              <b-col cols="8">
                <p>ขายแล้ว</p>
              </b-col>
            </b-col>
          </b-row>
          <b-card-text
            >Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.</b-card-text
          >
        </b-card>
      </div>
    </div>
    <!-- footer -->
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
            <p>
              <font color="#FFFFF">ซื้อสินค้า</font>
            </p>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <!-- footer -->
  </div>
</template>
<script>
import Nav from "../components/Nav";
export default {
  components: {
    Nav,
  },
  methods: {
    backindex() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>
