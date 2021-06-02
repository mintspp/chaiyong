<template>
    <div style="background: #f5f5f5">
        <!-- --------------nav------------ -->
    <Nav />
    <!-- --------------nav------------ -->

     <div style="width:40%; margin:20px;">
      <b-input-group  class="mb-2">
        <b-input-group-prepend is-text>
          <b-icon icon="search"></b-icon>
        </b-input-group-prepend>
        <b-form-input type="search" placeholder="ค้นหาสินค้า"></b-form-input>
      </b-input-group>
    </div>

        <div style="margin: 20px; margin-top: 0px" align="center">
      <div align="left" style="font-size: 1.5rem">สินค้าขายดี</div>
      <b-row>
        <b-col cols="6" lg="3">
          <b-card
            img-src="https://firebasestorage.googleapis.com/v0/b/chaiyongimg.appspot.com/o/1.png?alt=media&token=e0d3062d-2311-46f8-9ab6-90130e24d351"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
            border-variant="light"
          >
            <div align="left">
              <div class="fonts" style="font-size: 15px">
                <b>กรรไกรตัดผม</b>
              </div>

              <b-row>
                <b-col cols="6"
                  ><div align="left">
                    <h6 style="font-size: 12px">฿100</h6>
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
          </b-card>
        </b-col>
        <b-col cols="6" lg="3">
          <b-card
            img-src="https://firebasestorage.googleapis.com/v0/b/chaiyongimg.appspot.com/o/2.png?alt=media&token=f40ffb34-af16-4a16-81d9-780268ccaa76"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
            border-variant="light"
          >
            <div align="left">
              <div class="fonts" style="font-size: 15px"><b>ชุดกรรไกร</b></div>

              <b-row>
                <b-col cols="6"
                  ><div align="left">
                    <h6 style="font-size: 12px">฿100</h6>
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
          </b-card>
        </b-col>
        <b-col cols="6" lg="3">
          <b-card
            img-src="https://firebasestorage.googleapis.com/v0/b/chaiyongimg.appspot.com/o/3.png?alt=media&token=eb90bddf-c4dc-4ecf-887e-c27b720a5b62"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
            border-variant="light"
          >
            <div align="left">
              <div class="fonts" style="font-size: 15px"><b>ไดร์เป่าผม</b></div>

              <b-row>
                <b-col cols="6"
                  ><div align="left">
                    <h6 style="font-size: 12px">฿100</h6>
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
          </b-card>
        </b-col>
        <b-col cols="6" lg="3">
          <b-card
            img-src="https://firebasestorage.googleapis.com/v0/b/chaiyongimg.appspot.com/o/3.png?alt=media&token=eb90bddf-c4dc-4ecf-887e-c27b720a5b62"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
            border-variant="light"
          >
            <div align="left">
              <div class="fonts" style="font-size: 15px"><b>ไดร์เป่าผม</b></div>

              <b-row>
                <b-col cols="6"
                  ><div align="left">
                    <h6 style="font-size: 12px">฿100</h6>
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
          </b-card>
        </b-col>
      </b-row>
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
