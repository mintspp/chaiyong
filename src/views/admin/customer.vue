<template>
  <div style="background: #f5f5f5">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info" style="z-index: 1">
        <b-navbar-brand href="#">ChaiYang</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item @click="costomer()" disabled>ข้อมูลลูกค้า</b-nav-item>
            <b-nav-item @click="product()">ข้อมูลสินค้า</b-nav-item>
            <b-nav-item @click="order()">ออเดอร์สินค้า</b-nav-item>
            <b-nav-item-dropdown text="ประวัติ" right>
              <b-dropdown-item href="#">ประวัติการสั่งซื้อ</b-dropdown-item>
              <b-dropdown-item href="#"
                >ประวัติการยกเลิกออเดอร์</b-dropdown-item
              >
            </b-nav-item-dropdown>
            <b-nav-item href="#">dashboard</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>{{ NAMEUSER }}</em>
              </template>
              <!-- <b-dropdown-item href="#">โปรไฟล์</b-dropdown-item> -->
              <b-dropdown-item @click="logouts">ออกจากระบบ</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <br /><br /><br />
    <div style="padding: 10px">
      <div><b style="font-size: 16px">ข้อมูลลูกค้า </b></div>
      <br />
      <b-row>
        <b-col cols="8" lg="6">
          <b-input-group class="mb-2">
            <b-input-group-prepend is-text>
              <b-icon icon="search"></b-icon>
            </b-input-group-prepend>
            <b-form-input
              type="search"
              v-model="search"
              @keyup="serchProduct()"
              placeholder="ค้นหา"
            ></b-form-input>
          </b-input-group>
        </b-col>
        <b-col cols="4" lg="6">
          <div align="right">
            <b style="font-size: 15px">ทั้งหมด: {{ num }} คน</b>
          </div>
        </b-col>
      </b-row>

      <div style="margin-top: 10px">
        <b-row>
          <b-col v-for="item in items" :key="item.MEMBER_ID" lg="4" cols="12" style="margin-top:5px;">
            <b-card >
              <div align="right">
                <b-icon icon="pencil-square" style="font-size: 23px !important;" variant="warning" @click="edit(item)"></b-icon>
              </div>
              <b-row>
                <b-col lg="3" cols="3" style="padding: 0px; margin-top: 0px">
                  <b-img
                    rounded="circle"
                    style="width: 70px"
                    :src="item.IMG"
                  ></b-img> <br>
                  <b> {{ item.USERNAME }}</b>
                </b-col>
                <b-col lg="9" cols="9" style="padding: 0px">
                  <div align="left" style="margin-left: 10px; font-size: 14px">
                    ชื่อ {{ item.NAME }} {{ item.LNAME }} <br />
                    <b-row
                      align="left"
                      style="margin-left: 0px; margin-top: 10px"
                    >
                      <b-col
                        cols="5"
                        lg="6"
                        style="font-size: 12px; padding: 0px"
                        >ที่อยู่ {{ item.ADDRESS }}</b-col
                      >
                      <b-col
                        cols="5"
                        lg="6"
                        style="font-size: 12px; padding: 0px"
                        >ตำบล {{ item.SUBDISTRICT }}</b-col
                      >

                      <b-col
                        cols="7"
                        lg="6"
                        style="font-size: 12px; padding: 0px"
                        >อำเภอ {{ item.DISTRICT }}</b-col
                      >
                      <b-col
                        cols="5"
                        lg="6"
                        style="font-size: 12px; padding: 0px"
                        >จังหวัด {{ item.PROVINCE }}
                      </b-col>
                      <b-col
                        sm="2"
                        cols="7"
                        lg="6"
                        style="font-size: 12px; padding: 0px"
                        >รหัสไปรษณีย์ {{ item.ZIPCODE }}</b-col
                      >
                    </b-row>
                    <div style="font-size: 12px">
                      เบอร์โทร {{ item.PHONE_NUMBER }}
                    </div>

                    <div style="font-size: 12px">อีเมล {{ item.EMAIL }}</div>
                  </div>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
        <b-modal ref="my-modal" size="lg" hide-footer title="เเก้ไขข้อมุล">
          <b-row>
            <b-col cols="12" lg="6" style="margin-top: 20px">
              <b-form-input
                id="input-default"
                placeholder="ชื่อ*"
                v-model="NAME"
              ></b-form-input>
            </b-col>
            <b-col cols="12" lg="6" style="margin-top: 20px">
              <b-form-input
                id="input-default"
                placeholder="นามสกุล*"
                v-model="LNAME"
              ></b-form-input>
            </b-col>
            <b-col cols="12" lg="6" style="margin-top: 20px">
              <b-form-input
                id="input-default"
                placeholder="เบอร์โทร*"
                v-model="PHONE_NUMBER"
              ></b-form-input>
            </b-col>
            <b-col cols="12" lg="6" style="margin-top: 20px">
              <b-form-input
                id="input-default"
                placeholder="อีเมล"
                v-model="EMAIL"
              ></b-form-input>
            </b-col>
            <b-col cols="12" lg="6" style="margin-top: 20px">
              <b-form-input
                id="input-default"
                placeholder="ชื่อผู้ใช้*"
                v-model="USERNAME"
              ></b-form-input>
            </b-col>
            <b-col cols="12" lg="6" style="margin-top: 20px">
              <b-form-input
                id="input-default"
                placeholder="รหัสผ่าน*"
                v-model="PASSWORD"
                type="password"
              ></b-form-input>
            </b-col>
            <b-col cols="12" style="margin-top: 20px">
              <b-form-input
                id="input-default"
                placeholder="ที่อยู่*"
                v-model="ADDRESS"
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row>
            <!-- รหัสไปรษณีย์ -->
            <b-col cols="6" lg="6" style="margin-top: 20px">
              <div class="address">
                <addressinput-zipcode v-model="ZIPCODE" />
              </div>
            </b-col>
            <!--ตำบล/แขวง -->
            <b-col cols="6" lg="6" style="margin-top: 20px">
              <div class="address">
                <addressinput-subdistrict v-model="SUBDISTRICT" />
              </div>
            </b-col>
            <!-- อำเภอ/เขต -->
            <b-col cols="6" lg="6" style="margin-top: 10px">
              <div class="address">
                <addressinput-district v-model="DISTRICT" />
              </div>
            </b-col>
            <!-- จังหวัด -->
            <b-col cols="6" lg="6" style="margin-top: 10px">
              <div class="address">
                <addressinput-province v-model="PROVINCE" />
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12" style="margin-top: 20px">
              <b-form-file
                @change="previewImage"
                v-model="IMG"
                accept="image/*"
                placeholder="อัพโหลดโปรไฟล์"
                align="center"
                drop-placeholder="Drop file here..."
              ></b-form-file>
            </b-col>
          </b-row>
          <b-button
            class="mt-3"
            variant="outline-warning"
            block
            @click="update(member)"
            >เเก้ไข</b-button
          >
        </b-modal>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import firebase from "firebase";
const api_url = require("../../../utilities/api");
export default {
  data() {
    return {
      NAMEUSER: "",
      items: null,
      member: null,
      num: 0,
      search: "",
      NAME: "",
      LNAME: "",
      PHONE_NUMBER: "",
      EMAIL: "",
      USERNAME: "",
      PASSWORD: "",
      ADDRESS: "",
      ZIPCODE: "",
      SUBDISTRICT: "",
      DISTRICT: "",
      PROVINCE: "",
      IMG: "",
    };
  },
  created() {
    this.NAMEUSER = localStorage.getItem("USER");
    // สินค้า
    axios
      .post(`${api_url.api_url}/selectmemberALL`, {
        search: this.search,
      })
      .then((response) => {
        console.log(response.data);
        this.num = response.data.length;
        this.items = response.data;
      });
  },
  methods: {
    // nav
    costomer() {
      this.$router.push({ path: "/admincustomer" });
    },
    product() {
      this.$router.push({ path: "/adminproduct" });
    },
    order() {
      this.$router.push({ path: "/adminorder" });
    },
    logouts() {
      console.log("logout");
      this.$router.push({ path: "/" });
      localStorage.clear();
    },
    // nav
     serchProduct() {
      // สินค้า
      axios
        .post(`${api_url.api_url}/selectmemberALL`, {
          search: this.search,
        })
        .then((response) => {
          console.log(response.data);
           this.num = response.data.length;
          this.items = response.data;
        });
    },
    edit(x) {
      console.log(x);
      (this.member = x),
        (this.NAME = x.NAME),
        (this.LNAME = x.LNAME),
        (this.PHONE_NUMBER = x.PHONE_NUMBER),
        (this.EMAIL = x.EMAIL),
        (this.USERNAME = x.USERNAME),
        (this.PASSWORD = x.PASSWORD),
        (this.ADDRESS = x.ADDRESS),
        (this.ZIPCODE = x.ZIPCODE),
        (this.SUBDISTRICT = x.SUBDISTRICT),
        (this.DISTRICT = x.DISTRICT),
        (this.PROVINCE = x.PROVINCE),
        (this.IMG = x.IMG),
        this.$refs["my-modal"].show();
    },
    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },
    update(x) {
      console.log(x);
      if (this.IMG != "") {
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
            // console.log(error.message);
          },
          () => {
            this.uploadValue = 100;
            storageRef.snapshot.ref.getDownloadURL().then((url) => {
              this.picture = url;
              console.log(url);
              axios
                .post(`${api_url.api_url}/updateMember`, {
                  NAME: this.NAME,
                  LNAME: this.LNAME,
                  PHONE_NUMBER: this.PHONE_NUMBER,
                  EMAIL: this.EMAIL,
                  USERNAME: this.USERNAME,
                  PASSWORD: this.PASSWORD,
                  ADDRESS: this.ADDRESS,
                  ZIPCODE: this.ZIPCODE,
                  SUBDISTRICT: this.SUBDISTRICT,
                  DISTRICT: this.DISTRICT,
                  PROVINCE: this.PROVINCE,
                  IMG: url,
                  MEMBER_ID: x.MEMBER_ID,
                })
                .then((response) => {
                  console.log(response.data);
                  axios
                    .post(`${api_url.api_url}/selectmemberALL`, {
                      search: this.search,
                    })
                    .then((response) => {
                      console.log(response.data);
                       this.num = response.data.length;
                      this.items = response.data;
                    });
                });
            });
          }
        );
      } else {
        axios
          .post(`${api_url.api_url}/updateMember`, {
            NAME: this.NAME,
            LNAME: this.LNAME,
            PHONE_NUMBER: this.PHONE_NUMBER,
            EMAIL: this.EMAIL,
            USERNAME: this.USERNAME,
            PASSWORD: this.PASSWORD,
            ADDRESS: this.ADDRESS,
            ZIPCODE: this.ZIPCODE,
            SUBDISTRICT: this.SUBDISTRICT,
            DISTRICT: this.DISTRICT,
            PROVINCE: this.PROVINCE,
            IMG: x.IMG,
            MEMBER_ID: x.MEMBER_ID,
          })
          .then((response) => {
            console.log(response.data);
            axios
              .post(`${api_url.api_url}/selectmemberALL`, {
                search: this.search,
              })
              .then((response) => {
                console.log(response.data);
                 this.num = response.data.length;
                this.items = response.data;
              });
          });
      }
      this.$refs["my-modal"].hide();
    },
  },
};
</script>
