<template>
  <div>
    <b-card style="border-radius: 10px; margin: 50px">
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
          <b style="font-size: 25px">ข้อมูลส่วนตัว</b>
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
          <b-img rounded="circle" style="width: 100px" :src="IMGs"></b-img>
          <br /><br />
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
          @click="update(member)"
          block
          >เเก้ไข</b-button
        >
      </div>
    </b-card>
    <br />
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
      IMGs: "",
      imageData: null,
      picture: null,
      uploadValue: 0,
      items: null,
    };
  },
  async created() {
    await axios
      .post(`${api_url.api_url}/checkmember`, {
        MEMBER_ID: localStorage.getItem("IDMEMBER"),
      })
      .then((response) => {
        console.log(response.data);
        this.items = response.data[0];
      });
    console.log(this.items);
    (this.member = this.items),
      (this.NAME = this.items.NAME),
      (this.LNAME = this.items.LNAME),
      (this.PHONE_NUMBER = this.items.PHONE_NUMBER),
      (this.EMAIL = this.items.EMAIL),
      (this.USERNAME = this.items.USERNAME),
      (this.PASSWORD = this.items.PASSWORD),
      (this.ADDRESS = this.items.ADDRESS),
      (this.ZIPCODE = this.items.ZIPCODE),
      (this.SUBDISTRICT = this.items.SUBDISTRICT),
      (this.DISTRICT = this.items.DISTRICT),
      (this.PROVINCE = this.items.PROVINCE),
      (this.IMGs = this.items.IMG);
  },
  methods: {
    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },
    update(x) {
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
                  if (response.data.affectedRows == 1) {
                    (this.IMGs = url);
                  }
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
          });
      }
      this.$refs["my-modal"].hide();
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