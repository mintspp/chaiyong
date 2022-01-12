<template>
  <div class="regis">
    <b-row>
      <b-col xl="3" lg="3"> </b-col>
      <b-col xl="6" lg="6" sm="12">
        <div>
          <b-card style="border-radius: 10px; margin-top: 50px">
            <b-row align="center">
              <b-col cols="12">
                <div align="right">
                  <b-icon
                    @click="backindex()"
                    icon="x"
                    scale="2"
                    style="color: #cfab53 !important"
                  ></b-icon>
                </div>
              </b-col>
              <b-col cols="12">
                <b style="font-size: 25px">สมัครสมาชิก</b>
              </b-col>
            </b-row>
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

            <div>
              <b-button
                pill
                variant="success"
                style="
                  background-color: #cfab53;
                  border: 0px;
                  border-radius: 4px !important;
                  margin-top: 20px;
                  height: 40px;
                "
                @click="addREGISTER"
                block
                >สมัครสมาชิก</b-button
              >
            </div>
            <div style="margin-top: 15px">
              <h6 style="display: inline">เป็นสมาชิกอยู่แล้วใช่ไหม?</h6>
              <h6
                @click="gologin"
                style="display: inline; text-decoration-line: underline"
              >
                เข้าสู่ระบบ
              </h6>
            </div>
          </b-card>
          <br />
        </div>
      </b-col>
      <b-col xl="3" lg="3"> </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
import firebase from "firebase";
const api_url = require("../../../utilities/api");
export default {
  data() {
    return {
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
      imageData: null,
      picture: null,
      uploadValue: 0,
    };
  },
  methods: {
    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },
    async addREGISTER() {
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
            // console.log(url);
             axios
              .post(`${api_url.api_url}/insertMember`, {
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
              })
              .then((response) => {
                console.log(response.data);
                var data = {
                  USERNAME: this.USERNAME,
                  PASSWORD: this.PASSWORD,
                };
                 axios
                  .post(`${api_url.api_url}/login`, data)
                  .then((response) => {
                    console.log(response.data);
                    var res = response.data[0];
                    localStorage.setItem("USER", res.NAME + " " + res.LNAME);
                    localStorage.setItem("IDMEMBER", res.MEMBER_ID);
                    localStorage.setItem("login", 1);
                    console.log(localStorage.getItem("USER"));
                    this.$router.push({ path: "/" });
                  });
              });
          });
        }
      );
    },
    gologin() {
      this.$router.push({ path: "/adminlogin" });
    },
    backindex() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style>
.regis {
  padding: 0px 20px;
  background-color: rgb(60 74 103);
}

div .th-address-autocomplete {
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  width: 330px !important;
}
input.th-address-input {
  background-color: #fff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  box-sizing: border-box;
  color: #666;
  display: inline-block;
  font-size: 16px;
  height: 40px;
  line-height: 38px;
  padding: 8px 6px;
  transition-property: border;
  transition: 0.2s ease-in-out;
  width: 100%;
}
</style>