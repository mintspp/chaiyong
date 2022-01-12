<template>
     <div>
      <b-navbar toggleable="lg" type="dark" style="background-color: rgb(52, 86, 139)">
        <img src="../assets/4.png" alt="Vue 4" style="width: 50px; height: 50px">
        <b-navbar-brand href="/">ชัยยงค์การช่าง
        </b-navbar-brand>
        
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            
            <b-nav-item href="/userservice">บริการ</b-nav-item>
            <b-nav-item href="/usercontact">ติดต่อเรา</b-nav-item>
      
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                 <b-icon v-if="checklogin != 1" icon="person-fill" font-scale="2" variant="light" align="center"></b-icon>
                 <b-img v-if="checklogin == 1"
                    rounded="circle"
                    style="width: 40px"
                    :src="img"
                  ></b-img>
              </template>
              <b-dropdown-item v-if="checklogin == 1">ชื่อผู้ใช้ : {{NAMEUSER}}</b-dropdown-item>
              <b-dropdown-item v-if="checklogin != 1" @click="goRegister()">สมัครสมาชิก</b-dropdown-item>
              <b-dropdown-item v-if="checklogin != 1" @click="gologin()">เข้าสู่ระบบ</b-dropdown-item>
              <b-dropdown-item v-if="checklogin == 1" @click="goprofile()">ข้อมูลส่วนตัว</b-dropdown-item>
              <b-dropdown-item  v-if="checklogin == 1" @click="logouts">ออกจากระบบ</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
        <div>
              <b-icon icon="bell-fill" font-scale="2"  variant="light" align="center"></b-icon>
        </div>
       
      </b-navbar>
    </div>
</template>
<script>
import axios from "axios";
const api_url = require("../../utilities/api");
export default {
  name: "Nav",
  data: () => ({
    NAMEUSER:"",
    checklogin: "",
    img:""
  }),
  mounted() {
 this.NAMEUSER = localStorage.getItem("USER")
 this.checklogin = localStorage.getItem("login")
  axios
      .post(`${api_url.api_url}/checkmember`, {
        MEMBER_ID: localStorage.getItem("IDMEMBER")
      })
      .then((response) => {
        console.log(response.data);
        this.img = response.data[0].IMG;
      });
  },
  methods: {
   goRegister(){
      this.$router.push({ path: "/adminsignup" });
   },
    gologin(){
      this.$router.push({ path: "/adminlogin" });
   },
   goprofile(){
      this.$router.push({ path: "/userprofile" });
   },
    logouts() {
      console.log('logout');
      this.$router.push({ path: "/" });
      localStorage.clear();
      location.reload();
    },
  },
};
</script>

<style>
.navbar {
    /* position: relative; */
    position: fixed !important;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    width: 100%;
    z-index: 9999;
}
</style>