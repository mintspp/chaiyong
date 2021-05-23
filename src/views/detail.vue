<template>
  <div style="background: #001b48">
    <!-- --------------nav------------ -->
    <Nav />
    <!-- --------------nav------------ -->

    <div>detail</div>
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
