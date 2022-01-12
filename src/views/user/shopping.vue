<template>
  <div style="background: #f5f5f5">
    <!-- --------------nav------------ -->
    <Nav />
    <!-- --------------nav------------ -->
    <br />
    <div style="margin-top: 60px">
      <table class="table table-striped table-hover">
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
            <b-col cols="5" lg="2" @click="gocart()">
              <div style="padding-top: 10px">
                <b-button style="background-color: rgb(205, 33, 42)" block
                  >สั่งซื้อ</b-button
                >
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
import axios from "axios";
import firebase from "firebase";
const api_url = require("../../../utilities/api");
export default {
  components: {
    Nav,
  },
  data: () => ({
    items: null,
    // selectAll: false,
    // selected: [],
    selectAll: false,
    selected: [],
    sumprice: 0,
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
        this.sumprice += parseInt(element.PRICE) * parseInt(element.TOTAL)
      }
      console.log(this.sumprice);
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
        this.sumprice += parseInt(element.PRICE) * parseInt(element.TOTAL)
      }
      console.log(this.sumprice);
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