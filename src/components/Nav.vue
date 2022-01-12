<template>
     <div>
      <b-navbar toggleable="lg" type="dark" style="background-color: rgb(52, 86, 139)">
        
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
                 <b-icon icon="person-fill" font-scale="2" variant="light" align="center"></b-icon>
              </template>
              <b-dropdown-item @click="goRegister()">สมัครสมาชิก</b-dropdown-item>
              <b-dropdown-item @click="gologin()">เข้าสู่ระบบ</b-dropdown-item>
              <b-dropdown-item href="#">ข้อมูลส่วนตัว</b-dropdown-item>
              <b-dropdown-item href="#">ออกจากระบบ</b-dropdown-item>
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
// import axios from "axios";
export default {
  name: "Nav",
  data: () => ({
  }),
  mounted() {

  },
  methods: {
   goRegister(){
      this.$router.push({ path: "/adminsignup" });
   },
    gologin(){
      this.$router.push({ path: "/adminlogin" });
   }
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