<template>
  <div class="login">
    <b-row>
      <b-col xl="3" lg="3"> </b-col>
      <b-col xl="6" lg="6" sm="12">
        <div>
          <b-card style="border-radius: 10px;margin-top: 100px;">
            <b-row>
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
              </b-row>
            <b-row>
              <b-col xl="6" lg="6" sm="12">
                <img src="assets/login.png" alt="" />
              </b-col>
              <b-col xl="6" lg="6" sm="12">
                <div style="margin-bottom: 30px">
                  <div align="left" style="margin-top: 30px">
                    <font color="#00000"><h6>ชื่อผู้ใช้</h6></font>
                  </div>
                  <b-input-group class="mb-2">
                    <b-input-group-prepend is-text>
                      <b-icon
                        icon="person-fill"
                        style="color: #cfab53 !important"
                      ></b-icon>
                    </b-input-group-prepend>
                    <b-form-input
                      type="text"
                      v-model="MEMBER_USERNAME"
                      placeholder="กรอกชื่อผู้ใช้"
                    ></b-form-input>
                  </b-input-group>
                  <div align="left" style="margin-top: 10px">
                    <font color="#00000"><h6>รหัสผ่าน</h6></font>
                  </div>
                  <b-input-group class="mb-2">
                    <b-input-group-prepend is-text>
                      <b-icon
                        icon="shield-lock-fill"
                        style="color: #cfab53 !important"
                      ></b-icon>
                    </b-input-group-prepend>
                    <b-form-input
                      type="password"
                      v-model="MEMBER_PASSWORD"
                      placeholder="กรอกรหัสผ่าน"
                    ></b-form-input>
                  </b-input-group>

                  <b-button
                    pill
                    variant="success"
                    style="
                      background-color: #cfab53;
                      border: 0px;
                      border-radius: 4px !important;
                      margin-top: 30px;
                    "
                    @click="addCheck"
                    block
                    >เข้าสู่ระบบ</b-button
                  >
                  <div style="margin-top: 15px">
                    <h6 style="display: inline">
                      เพิ่งเคยเข้ามา chaiyong ใช่ไหม?
                    </h6>
                    <a @click="gosignup"
                      ><h6
                        style="display: inline; text-decoration-line: underline"
                      >
                        สมัครใหม่
                      </h6></a
                    >
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </b-col>
      <b-col xl="3" lg="3"> </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data: () => ({}),
  created() {},
  mounted() {},
  methods: {
    gosignup() {
      // console.log('adminsignup');
      this.$router.push({ path: "/adminsignup" });
    },
     backindex() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>
<style>
.login {
  padding: 0px 20px;
  background-color: rgb(60 74 103);
  height:100vh;
}
</style>