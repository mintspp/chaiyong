<template>
  <div style="background: #f1f1f1">
    <!-- --------------nav------------ -->
    <Nav />
    <!-- --------------nav------------ -->

    

    <div>
    
      <br><br><br>
      <div>
      <div style="width: 30%; margin: 20px">
      <b-input-group class="mb-2">
        <b-input-group-prepend is-text>
          <b-icon icon="search"></b-icon>
        </b-input-group-prepend>
        <b-form-input type="search" placeholder="ค้นหาสินค้า"></b-form-input>
      </b-input-group>
    </div>
      </div>
      <div>
        <b-row style="margin-right: 0px; margin-left: 0px">
          <b-col style="padding: 5px" cols="12" lg="3">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/chaiyongimg.appspot.com/o/pink.jpg?alt=media&token=3c7cfbcf-4485-42b4-bf11-e3d8d1fe9114"
              alt="Image"
              width="100%"
            />
          </b-col>
          <b-col style="padding: 5px" cols="12" lg="3">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/chaiyongimg.appspot.com/o/yellow.jpg?alt=media&token=096e4371-8217-478d-99a6-646cfccb5523"
              alt="Image"
              width="100%"
            />
          </b-col>
          <b-col style="padding: 5px" cols="12" lg="3">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/chaiyongimg.appspot.com/o/green.jpg?alt=media&token=42d97550-77b7-4026-bbe2-daec70134236"
              alt="Image"
              width="100%"
            />
          </b-col>
          <b-col style="padding: 5px" cols="12" lg="3">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/chaiyongimg.appspot.com/o/orange.jpg?alt=media&token=d2004a21-6c3b-403a-be96-274b99630b50"
              alt="Image"
              width="100%"
            />
          </b-col>
        </b-row>
      </div>
    </div>

    <div>
      <b-card
        border-variant="light"
        align="left"
        style="margin: 20px"
        title="สินค้าโปรโมชั่น"
      >
        <div align="right" @click="gopromotion()">
          <a href="">ดูทั้งหมด...</a>
        </div>
        <div align="center">
          <b-row>
            <b-col cols="6" lg="3">
              <b-card
                img-src="https://firebasestorage.googleapis.com/v0/b/chaiyongimg.appspot.com/o/1.png?alt=media&token=e0d3062d-2311-46f8-9ab6-90130e24d351"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2"
                @click="godetail()"
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
              >
                <div align="left">
                  <div class="fonts" style="font-size: 15px">
                    <b>ชุดกรรไกร</b>
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
                img-src="https://firebasestorage.googleapis.com/v0/b/chaiyongimg.appspot.com/o/3.png?alt=media&token=eb90bddf-c4dc-4ecf-887e-c27b720a5b62"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2"
              >
                <div align="left">
                  <div class="fonts" style="font-size: 15px">
                    <b>ไดร์เป่าผม</b>
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
                img-src="https://firebasestorage.googleapis.com/v0/b/chaiyongimg.appspot.com/o/3.png?alt=media&token=eb90bddf-c4dc-4ecf-887e-c27b720a5b62"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2"
              >
                <div align="left">
                  <div class="fonts" style="font-size: 15px">
                    <b>ไดร์เป่าผม</b>
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
          </b-row>
        </div>
      </b-card>
      <b-card
        border-variant="light"
        align="left"
        style="margin: 20px"
        title="สินค้าขายดี"
      >
        <div align="right" @click="gobestsale()">
          <a href="">ดูทั้งหมด...</a>
        </div>
        <div align="center">
          <b-row>
            <b-col cols="6" lg="3">
              <b-card
                img-src="https://firebasestorage.googleapis.com/v0/b/chaiyongimg.appspot.com/o/1.png?alt=media&token=e0d3062d-2311-46f8-9ab6-90130e24d351"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2"
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
              >
                <div align="left">
                  <div class="fonts" style="font-size: 15px">
                    <b>ชุดกรรไกร</b>
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
                img-src="https://firebasestorage.googleapis.com/v0/b/chaiyongimg.appspot.com/o/3.png?alt=media&token=eb90bddf-c4dc-4ecf-887e-c27b720a5b62"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2"
              >
                <div align="left">
                  <div class="fonts" style="font-size: 15px">
                    <b>ไดร์เป่าผม</b>
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
                img-src="https://firebasestorage.googleapis.com/v0/b/chaiyongimg.appspot.com/o/3.png?alt=media&token=eb90bddf-c4dc-4ecf-887e-c27b720a5b62"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2"
              >
                <div align="left">
                  <div class="fonts" style="font-size: 15px">
                    <b>ไดร์เป่าผม</b>
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
          </b-row>
        </div>
      </b-card>
    </div>

    <div style="margin: 20px; margin-top: 50px" align="center">
      <div align="left" style="font-size: 1.5rem">สินค้าทั้งหมด</div>
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

          <b-col cols="4" @click="gocart()">
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
export default {
  components: {
    Nav,
  },
  data: () => ({}),
  created() {},
  mounted() {},
  methods: {
    godetail() {
      this.$router.push({ path: "/userdetail" });
    },
    gopromotion() {
      this.$router.push({ path: "/userpromotion" });
    },
    gobestsale() {
      this.$router.push({ path: "/userbestsale" });
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
  background: #434B5C;
  color: white;
  text-align: center;
}
</style>
