<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      style="background-color: rgb(52, 86, 139)"
    >
      <b-navbar-brand href="/">ชัยยงค์การช่าง </b-navbar-brand>
      <b-navbar-toggle
        target="nav-collapse"
        style="margin-left: 110px"
      ></b-navbar-toggle>
      <div class="menuP">
        <b-icon
          target="nav-collapse"
          style="margin-right: 15p"
          icon="bell-fill"
          font-scale="2"
          variant="light"
          align="center"
        ></b-icon>
      </div>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item @click="userservice">บริการ</b-nav-item>
          <b-nav-item @click="usercontact">ติดต่อเรา</b-nav-item>
          <b-nav-item v-if="checklogin == 1" @click="userhistoryshopping"
            >ประวัติการสั่งซื้อ</b-nav-item
          >
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <b-icon
                v-if="checklogin != 1"
                icon="person-fill"
                font-scale="2"
                variant="light"
                align="center"
              ></b-icon>
              <b-img
                v-if="checklogin == 1"
                rounded="circle"
                style="width: 40px"
                :src="img"
              ></b-img>
            </template>
            <b-dropdown-item v-if="checklogin == 1"
              >ชื่อผู้ใช้ : {{ NAMEUSER }}</b-dropdown-item
            >
            <b-dropdown-item v-if="checklogin != 1" @click="goRegister()"
              >สมัครสมาชิก</b-dropdown-item
            >
            <b-dropdown-item v-if="checklogin != 1" @click="gologin()"
              >เข้าสู่ระบบ</b-dropdown-item
            >
            <b-dropdown-item v-if="checklogin == 1" @click="goprofile()"
              >ข้อมูลส่วนตัว</b-dropdown-item
            >
            <b-dropdown-item v-if="checklogin == 1" @click="logouts"
              >ออกจากระบบ</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
      <div class="menu">
        <b-icon
          target="nav-collapse"
          icon="bell-fill"
          font-scale="2"
          variant="light"
          align="center"
        ></b-icon>
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
    NAMEUSER: "",
    checklogin: "",
    img: "",
  }),
  mounted() {
    this.NAMEUSER = localStorage.getItem("USER");
    this.checklogin = localStorage.getItem("login");
    axios
      .post(`${api_url.api_url}/checkmember`, {
        MEMBER_ID: localStorage.getItem("IDMEMBER"),
      })
      .then((response) => {
        console.log(response.data);
        this.img = response.data[0].IMG;
      });
  },
  methods: {
    goRegister() {
      this.$router.push({ path: "/adminsignup" });
    },
    gologin() {
      this.$router.push({ path: "/adminlogin" });
    },
    goprofile() {
      this.$router.push({ path: "/userprofile" });
    },
    userservice() {
      this.$router.push({ path: "/userservice" });
    },
    usercontact() {
      this.$router.push({ path: "/usercontact" });
    },
    userhistoryshopping() {
      this.$router.push({ path: "/userhistoryshopping" });
    },
    logouts() {
      console.log("logout");
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

@media only screen and (max-device-width: 480px) {
  /* styles for mobile browsers smaller than 480px; (iPhone) */
  .menu {
    display: none !important;
  }
  .menuP {
    display: block !important;
  }
}

@media only screen and (max-device-width: 540px) {
  /* styles for mobile browsers smaller than 480px; (iPhone) */
  .menu {
    display: none !important;
  }
  .menuP {
    display: block !important;
  }
}

@media only screen and (min-device-width: 542px) and (max-device-width: 962px) {
  /* default iPad screens */
  .menu {
    display: none !important;
  }
  .menuP {
    display: block !important;
  }
}

@media only screen and (device-width: 768px) {
  /* default iPad screens */
  .menu {
    display: none !important;
  }
  .menuP {
    display: block !important;
  }
}

@media only screen and (device-width: 820px) {
  /* default iPad screens */
  .menu {
    display: none !important;
  }
  .menuP {
    display: block !important;
  }
}

@media only screen and (device-width: 912px) {
  /* default iPad screens */
  .menu {
    display: none !important;
  }
  .menuP {
    display: block !important;
  }
}

@media only screen and (min-width: 960px) {
  /* styles for browsers larger than 960px; */
  .menu {
    display: none !important;
  }
  .menuP {
    display: block !important;
  }
}

@media only screen and (min-width: 990px) {
  /* styles for browsers larger than 960px; */
  .menu {
    display: block !important;
  }
  .menuP {
    display: none !important;
  }
}

@media only screen and (device-width: 1024px) {
  /* default iPad screens */
  .menu {
    display: block !important;
  }
  .menuP {
    display: none !important;
  }
}

@media only screen and (min-width: 1280px) {
  /* styles for browsers larger than 1440px; */
  .menu {
    display: block !important;
  }
  .menuP {
    display: none !important;
  }
}

@media only screen and (min-width: 1440px) {
  /* styles for browsers larger than 1440px; */
  .menu {
    display: block !important;
  }
  .menuP {
    display: none !important;
  }
}

@media only screen and (min-width: 2000px) {
  /* for sumo sized (mac) screens */
  .menu {
    display: block !important;
  }
  .menuP {
    display: none !important;
  }
}
</style>