<template>
  <div style="background: #f5f5f5">
    <!-- --------------nav------------ -->
    <Nav />
    <!-- --------------nav------------ -->
    <br />
    <div style="margin-top: 60px">
      <table class="table">
        <thead>
          <tr>
            <th>
              <label class="form-checkbox">
                <input
                  type="checkbox"
                  :checked="selectAll"
                  @change="selectAllProducts"
                />
                <i class="form-icon"></i>
              </label>
            </th>
            <th>สินค้าทั้งหมด</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in items" :key="i.PRODUCT_ID">
            <td>
              <label class="form-checkbox">
                <input
                  type="checkbox"
                  v-model="selected"
                  :value="i"
                  @change="select(i)"
                />
                <i class="form-icon"></i>
              </label>
            </td>
            <td>
              <b-img rounded="0" style="width: 100px" :src="i.IMG"></b-img>
            </td>
            <td>
              <div align="right">
                <b-button pill variant="outline-danger" size="sm">ลบ</b-button>
              </div>
              <b-row>
                <b-col cols="12" lg="6">
                  <div align="left" style="margin-left: 0px">
                    ชื่อสินค้า {{ i.PRODUCT_NAME }}
                  </div>
                </b-col>
                <b-col cols="12" lg="3">
                  <div align="left">
                    ราคาต่อชิ้น <b>{{ i.PRICE }}</b> บาท
                  </div>
                </b-col>
                <b-col cols="12" lg="3">
                  <div align="left">
                    จำนวน <b>{{ i.TOTAL }}</b> ชิ้น
                  </div>
                </b-col>
              </b-row>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

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
                <div>฿{{ sumprice }}</div>
              </div>
            </b-col>
            <b-col cols="5" lg="2" @click="showModal">
              <div style="padding-top: 10px">
                <b-button style="background-color: rgb(205, 33, 42)" block
                  >สั่งซื้อ</b-button
                >
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-modal centered ref="my-modal" hide-footer>
        <div class="d-block text-center">
          <div align="left">
            <h5 align="left" class="fontsx">ค่าส่ง</h5>
            1 ชิ้น 25 บาท <br />
            2 ชิ้นขึ้นไป 35 บาท
          </div>
          <div align="left">
            <b>ราคารวม</b
            ><b style="position: absolute; right: 30px; color: green"
              >{{ TOTAL_PRICE }} ฿</b
            >
          </div>
          <!-- จ่ายเงิน -->
          <div style="margin-top: 10px">
            <h5 align="left" class="fontsx">การชำระเงิน</h5>
            <div>
              <b-form-group align="left">
                <b-form-radio
                  v-model="STATUS_RECEIPT"
                  name="some-radios"
                  value="เงินสด"
                  class="fonts"
                  >เงินสด</b-form-radio
                >
                <b-form-radio
                  v-model="STATUS_RECEIPT"
                  name="some-radios"
                  value="โอนเงินผ่านธนาคาร"
                  class="fonts"
                  >โอนเงินผ่านธนาคาร</b-form-radio
                >
              </b-form-group>
              <div v-if="STATUS_RECEIPT == 'โอนเงินผ่านธนาคาร'">
                <b-card>
                  <div class="row">
                    <div class="col-sm-12">
                      <b-row>
                        <b-col cols="12" align="left">
                          <p class="ppp fonts">ชื่อธนาคาร : กรุงไทย</p>

                          <p class="ppp fonts">ชื่อบัญชี : ชัยยงค์การช่าง</p>
                        </b-col>
                      </b-row>
                      <div class="form-control wizard-form-control d-flex">
                        <p class="code text-red fonts">1234567890</p>
                        <div style="position: absolute; right: 30px">
                          <b-icon
                            icon="files"
                            @click.stop.prevent="copyTestingCode"
                            variant="success"
                          ></b-icon>
                        </div>
                        <input
                          type="hidden"
                          id="testing-code"
                          value="1234567890"
                        />
                      </div>
                    </div>
                  </div>
                </b-card>
                <div style="margin-top: 10px">
                  <b-form-file
                    @change="previewImage"
                    accept="image/*"
                    v-model="IMG_RECEIPT"
                    placeholder="อัพโหลดไฟล์"
                    size="sm"
                  >
                    <template slot="file-name" slot-scope="{ names }">
                      <p>รูป : {{ names.length }}</p>
                    </template>
                  </b-form-file>
                </div>
              </div>
            </div>
          </div>
          <!--  -->
        </div>
        <div v-if="STATUS_RECEIPT == 'เงินสด'">
          <b-button class="mt-3" variant="success" block @click="addorder"
            >ยืนยัน</b-button
          >
        </div>
        <div v-if="IMG_RECEIPT != ''">
          <div v-if="loadadd" align="center">
            <b-spinner
              variant="success"
              style="width: 3rem; height: 3rem"
              label="Spinning"
            ></b-spinner>
          </div>
          <div v-else>
            <b-button class="mt-3" variant="success" block @click="addorder"
              >ยืนยัน</b-button
            >
          </div>
        </div>
      </b-modal>
    </div>
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
    items: null,
    selectAll: false,
    selected: [],
    sumprice: 0,
    IMG_RECEIPT: "",
    STATUS_RECEIPT: "",
    TOTAL_PRICE: 0,
  }),
  created() {
    axios
      .post(`${api_url.api_url}/selectshoppinguser`, {
        MEMBER_ID: localStorage.getItem("IDMEMBER"),
      })
      .then((response) => {
        console.log(response.data);
        this.items = response.data;
      });
  },

  mounted() {},
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    selectAllProducts() {
      if (this.selectAll) {
        this.selected = [];
        this.sumprice = 0;
        this.selectAll = false;
      } else {
        this.selected = [];
        for (var i in this.items) {
          this.selected.push(this.items[i]);
        }
        this.selectAll = true;
      }
      console.log(this.selected);
      for (let index = 0; index < this.selected.length; index++) {
        const element = this.selected[index];
        console.log(parseInt(element.PRICE));
        this.sumprice += parseInt(element.PRICE) * parseInt(element.TOTAL);
      }
      console.log(this.sumprice);
      if (this.selected.length == 1) {
        this.TOTAL_PRICE = this.sumprice + 25;
      } else if (this.selected.length > 1) {
        this.TOTAL_PRICE = this.sumprice + 35;
      }
      console.log(this.TOTAL_PRICE);
    },
    select() {
      this.sumprice = 0;
      if (this.selected.length !== this.items.length) {
        this.selectAll = false;
      } else {
        this.selectAll = true;
      }
      console.log(this.selected);
      for (let index = 0; index < this.selected.length; index++) {
        const element = this.selected[index];
        console.log(parseInt(element.PRICE));
        this.sumprice += parseInt(element.PRICE) * parseInt(element.TOTAL);
      }
      console.log(this.sumprice);
      if (this.selected.length == 1) {
        this.TOTAL_PRICE = this.sumprice + 25;
      } else if (this.selected.length > 1) {
        this.TOTAL_PRICE = this.sumprice + 35;
      }
      console.log(this.TOTAL_PRICE);
    },
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
    copyTestingCode() {
      let testingCodeToCopy = document.querySelector("#testing-code");
      testingCodeToCopy.setAttribute("type", "text"); // 不是 hidden 才能複製
      testingCodeToCopy.select();

      try {
        var successful = document.execCommand("copy");
        var msg = successful ? "successful" : "unsuccessful";
        alert("คัดลอกสำเร็จ");
      } catch (err) {
        alert("คัดลอกไม่สำเร็จ");
      }

      /* unselect the range */
      testingCodeToCopy.setAttribute("type", "hidden");
      window.getSelection().removeAllRanges();
    },
    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },
    async addorder() {
      axios
        .post(`${api_url.api_url}/insertorder`, {
          CART_ID: this.items[0].CART_ID,
          TOTAL_PRICE: this.TOTAL_PRICE,
        })
        .then((response) => {
          console.log(response);
        });
      if (this.imageData) {
        this.picture = null;
        const storageRef = firebase
          .storage()
          .ref(`${this.imageData.name}`)
          .put(this.imageData);
        storageRef.on(
          `state_changed`,
          (snapshot) => {
            this.uploadValue =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          (error) => {
            console.log(error.message);
          },
          () => {
            this.uploadValue = 100;
            storageRef.snapshot.ref.getDownloadURL().then((url) => {
              this.picture = url;
              console.log(url);
              axios
                .post(`${api_url.api_url}/insertSHOPPINGRECEIPT`, {
                  CART_ID: this.items[0].CART_ID,
                  RECEIPT_IMG: url,
                })
                .then((response) => {
                  console.log(response);
                  this.resetList();
                  this.updatestockproduct();
                });
            });
          }
        );
      } else {
        this.updatestockproduct();
      }
      this.$refs["my-modal"].hide();
    },
    updatestockproduct() {
      for (let index = 0; index < this.items.length; index++) {
        const element = this.items[index];
        console.log(element);
        var data = {
          PRODUCT_ID: element.PRODUCT_ID,
          TOTAL: element.TOTAL,
          SHOPPING_CART_ID: element.SHOPPING_CART_ID,
        };
        axios.post(`${api_url.api_url}/updatestock`, data).then((response) => {
          console.log(response);
          this.resetList();
        });
      }
    },
    resetList() {
      axios
        .post(`${api_url.api_url}/selectshoppinguser`, {
          MEMBER_ID: localStorage.getItem("IDMEMBER"),
        })
        .then((response) => {
          console.log(response.data);
          this.items = response.data;
        });
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