<template>
  <div style="background:  	#f9f9fb">
    <!-- --------------nav------------ -->
    <Nav />
    <!-- --------------nav------------ -->

    <!-- <div
      style="
        background: rgb(60 74 103) !important;
        position: fixed !important;
        width: 100%;
        height: 100px;
        z-index: 9999 !important;
      "
    >
      <div class="headd" style="margin-top: 20px">
        ชัยยงค์การช่าง
        <div align="center">
          <b-row align="center">
            <b-nav small align="center">
              <b-col cols="3" lg="3">
                <b-nav-item active>บริการ</b-nav-item>
              </b-col>
              <b-col cols="3" lg="3">
                 <b-nav-item>ติดต่อเรา</b-nav-item>
              </b-col>
              <b-col cols="2" lg="2">
                <b-nav-item
                ><b-icon
                  icon="bell-fill"
                  style="width: 20px; height: 20px"
                  variant="light"
                ></b-icon>
              </b-nav-item>
              </b-col>
              <b-col cols="2" lg="2">
                 <b-nav-item disabled>Disabled</b-nav-item>
              </b-col>
              <b-col cols="2" lg="2">
                  <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
              </b-nav-item-dropdown>
              </b-col>
            </b-nav>
          </b-row>
        </div>
      </div>
    </div> -->

    <div>
      <br /><br /><br />
      <div>
        <div style="margin: 10px; margin-top: 50px">
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

      <div style="margin: 10px">
        <b-row>
          <b-col cols="12" lg="3">
          <button class="button1"> <div>  </div>
           </button>
          </b-col>
          <b-col cols="12" lg="3" style="margin-left=50px;">
           <button class="button2">  </button>
          </b-col>
          <b-col cols="12" lg="3">
           <button class="button3">  </button>
          </b-col>
          <b-col cols="12" lg="3">
           <button class="button4">  </button>
          </b-col>
        </b-row>
      </div>
    </div>

    <div>
      <b-card
        border-variant="light"
        align="left"
        style="margin-top: 20px"
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
        style="margin-top: 20px"
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

    <div style="margin: 10px; margin-top: 30px" align="center">
      <div align="left" style="font-size: 1.5rem; margin-left: 10px">
        สินค้าทั้งหมด
      </div>
      <b-row>
        <b-col cols="6" lg="3">
          <b-card
            img-src="https://firebasestorage.googleapis.com/v0/b/chaiyongimg.appspot.com/o/1.png?alt=media&token=e0d3062d-2311-46f8-9ab6-90130e24d351"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 25rem"
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
            style="max-width: 25rem"
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
            style="max-width: 25rem"
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
            style="max-width: 25rem"
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
.button1 {
  background-color: #f0c1d6;
  border: none;
  color: white;
  padding: 130px 180px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius:15px;
}
.button1:hover {
 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.crad1 {border-radius: 50%;}
.button2 {
  background-color:  #dce8ca;
  border: none;
  color: white;
  padding: 130px 180px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius:15px;
}
.button2:hover {
 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.button3 {
  background-color: #dccfe2;
  border: 1px solid #bebebe;
  color: white;
  padding: 130px 180px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius:15px;
}
.button3:hover {
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.button4 {
  background-color: #fbebb6;
  border: none;
  color: white;
  padding: 130px 180px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius:15px;
}
.button4:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
