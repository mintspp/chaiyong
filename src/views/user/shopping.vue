<template>
  <div style="background: #f5f5f5">
    <!-- --------------nav------------ -->
    <Nav />
    <!-- --------------nav------------ -->
    <br /><br /><br />
    <div
      style="
        position: fixed !important;
        width: 100%;
        z-index: 9999 !important;
        margin-top: -7px !important;
      "
    >
      <b-card border-variant="light">
        <b-row>
          <b-col cols="1" lg="1">
            <b-form-checkbox
              id="checkbox-1"
              v-model="status"
              name="checkbox-1"
              value="accepted"
              unchecked-value="not_accepted"
            >
            </b-form-checkbox>
          </b-col>
          <b-col cols="6" lg="6">
            <div align="left">สินค้าท้ังหมด</div>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <div style="margin-top: 60px">
      <!-- <div>
        
      </div> -->

      <b-card border-variant="light" style="margin-top: 1px">
        <div align="right">
          <b-button pill variant="outline-danger" size="sm">ลบ</b-button>
        </div>

        <b-row>
          <b-col cols="5" lg="2">
            <b-row>
              <b-col cols="2" lg="6">
                <b-form-checkbox
                  id="checkbox-1"
                  v-model="status"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                >
                </b-form-checkbox>
              </b-col>
              <b-col cols="8" lg="6">
                <b-img
                  rounded="0"
                  style="width: 100px"
                  src="https://firebasestorage.googleapis.com/v0/b/chaiyongimg.appspot.com/o/4.png?alt=media&token=b9da41a4-dc4e-4982-8e1f-a1181821c7b9"
                >
                </b-img>
              </b-col>
            </b-row>
          </b-col>

          <b-col cols="7" lg="10">
            <b-row>
              <b-col cols="12" lg="6">
                <div align="left" style="margin-left: 0px">ชื่อสินค้า</div>
              </b-col>
              <b-col cols="12" lg="2">
                <div align="left">ราคาต่อชิ้น</div>
              </b-col>
              <b-col cols="12" lg="2"> <div align="left">จำนวน</div> </b-col>
              <b-col cols="12" lg="2"> <div align="left">ราคารวม</div> </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-card>

      <b-card border-variant="light" style="margin-top: 1px">
        <div align="right">
          <b-button pill variant="outline-danger" size="sm">ลบ</b-button>
        </div>

        <b-row>
          <b-col cols="5" lg="2">
            <b-row>
              <b-col cols="2" lg="6">
                <b-form-checkbox
                  id="checkbox-1"
                  v-model="status"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                >
                </b-form-checkbox>
              </b-col>
              <b-col cols="8" lg="6">
                <b-img
                  rounded="0"
                  style="width: 100px"
                  src="https://firebasestorage.googleapis.com/v0/b/chaiyongimg.appspot.com/o/4.png?alt=media&token=b9da41a4-dc4e-4982-8e1f-a1181821c7b9"
                >
                </b-img>
              </b-col>
            </b-row>
          </b-col>

          <b-col cols="7" lg="10">
            <b-row>
              <b-col cols="12" lg="6">
                <div align="left" style="margin-left: 0px">ชื่อสินค้า</div>
              </b-col>
              <b-col cols="12" lg="2">
                <div align="left">ราคาต่อชิ้น</div>
              </b-col>
              <b-col cols="12" lg="2"> <div align="left">จำนวน</div> </b-col>
              <b-col cols="12" lg="2"> <div align="left">ราคารวม</div> </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-card>

      <b-card border-variant="light" style="margin-top: 1px">
        <div align="right">
          <b-button pill variant="outline-danger" size="sm">ลบ</b-button>
        </div>

        <b-row>
          <b-col cols="5" lg="2">
            <b-row>
              <b-col cols="2" lg="6">
                <b-form-checkbox
                  id="checkbox-1"
                  v-model="status"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                >
                </b-form-checkbox>
              </b-col>
              <b-col cols="8" lg="6">
                <b-img
                  rounded="0"
                  style="width: 100px"
                  src="https://firebasestorage.googleapis.com/v0/b/chaiyongimg.appspot.com/o/4.png?alt=media&token=b9da41a4-dc4e-4982-8e1f-a1181821c7b9"
                >
                </b-img>
              </b-col>
            </b-row>
          </b-col>

          <b-col cols="7" lg="10">
            <b-row>
              <b-col cols="12" lg="6">
                <div align="left" style="margin-left: 0px">ชื่อสินค้า</div>
              </b-col>
              <b-col cols="12" lg="2">
                <div align="left">ราคาต่อชิ้น</div>
              </b-col>
              <b-col cols="12" lg="2"> <div align="left">จำนวน</div> </b-col>
              <b-col cols="12" lg="2"> <div align="left">ราคารวม</div> </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-card>

      <b-card border-variant="light" style="margin-top: 1px">
        <div align="right">
          <b-button pill variant="outline-danger" size="sm">ลบ</b-button>
        </div>

        <b-row>
          <b-col cols="5" lg="2">
            <b-row>
              <b-col cols="2" lg="6">
                <b-form-checkbox
                  id="checkbox-1"
                  v-model="status"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                >
                </b-form-checkbox>
              </b-col>
              <b-col cols="8" lg="6">
                <b-img
                  rounded="0"
                  style="width: 100px"
                  src="https://firebasestorage.googleapis.com/v0/b/chaiyongimg.appspot.com/o/4.png?alt=media&token=b9da41a4-dc4e-4982-8e1f-a1181821c7b9"
                >
                </b-img>
              </b-col>
            </b-row>
          </b-col>

          <b-col cols="7" lg="10">
            <b-row>
              <b-col cols="12" lg="6">
                <div align="left" style="margin-left: 0px">ชื่อสินค้า</div>
              </b-col>
              <b-col cols="12" lg="2">
                <div align="left">ราคาต่อชิ้น</div>
              </b-col>
              <b-col cols="12" lg="2"> <div align="left">จำนวน</div> </b-col>
              <b-col cols="12" lg="2"> <div align="left">ราคารวม</div> </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-card>
    </div>

    <!-- footer -->
    <!-- <br /><br />
    <div class="shop">
      <b-container class="bv-example-row">
         <div>
        <b-card border-variant="light" style="padding: 0px">
          <b-row>
            <b-col cols="1" lg="1">
              <b-form-checkbox
                id="checkbox-1"
                v-model="status"
                name="checkbox-1"
                value="accepted"
                unchecked-value="not_accepted"
              >
              </b-form-checkbox>
            </b-col>
            <b-col cols="11" lg="11">
              <div align="left">สินค้าท้ังหมด</div>
            </b-col>
          </b-row>
        </b-card>
      </div>
      </b-container>
    </div>
    footer -->
    <br /><br />
    <div class="footerr" style="z-index: 9999 !important">
     
        <b-row>
          <b-col cols="3" lg="3">
            <div @click="backindex()" style="padding-top: 10px">
              <b-icon
                icon="chevron-left"
                variant="light"
                font-scale="1.5"
              ></b-icon>
            </div>
            <font color="#FFFFF">ย้อนกลับ</font>
          </b-col>

          <b-col cols="9" lg="9">
            <b-row>
              <b-col cols="7" lg="10">
                <div align="right" style="padding-top: 10px">
                  รวมทั้งหมด:
                  <div>฿000</div>
                </div>
              </b-col>
              <b-col cols="5" lg="2" @click="gocart()">
                <div style="padding-top: 10px">
                   <b-button style="background-color: rgb(205, 33, 42)  " block >สั่งซื้อ</b-button>
                 
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
     
    </div>
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
    backindex() {
      this.$router.push({ path: "/" });
    },
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
.shop {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  /* background-color: #99cc66; */
  background: rgb(255, 255, 255);
  color: black;
  text-align: left;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}




</style>