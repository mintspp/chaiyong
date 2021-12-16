<template>
  <div style="background: #f5f5f5">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info" style="z-index: 1">
        <b-navbar-brand href="#">ChaiYang</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#" disabled>ข้อมูลลูกค้า</b-nav-item>
            <b-nav-item href="#">ข้อมูลสินค้า</b-nav-item>
            <b-nav-item href="#">ออเดอร์สินค้า</b-nav-item>
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
                <em>ชื่อผู้ใช้</em>
              </template>
              <b-dropdown-item href="#">โปรไฟล์</b-dropdown-item>
              <b-dropdown-item href="#">ออกจากระบบ</b-dropdown-item>
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
          <b-form-group label-for="input-lazy" class="mb-0">
            <b-form-input
              id="input-lazy"
              v-model="text2"
              placeholder="ค้นหา"
              lazy-formatter
              :formatter="formatter"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="4" lg="6">
          <div align="right"><b style="font-size: 12px">ทั้งหมด: คน</b></div>
        </b-col>
      </b-row>

      <div style="margin-top: 10px">
        <b-row>
          <b-col lg="4" cols="12">
            <b-card>
              <div align="right">
                <b-icon
                  icon="file-earmark-text"
                  id="show-btn"
                  @click="showModal"
                  variant="success"
                ></b-icon>
                <b-icon
                  icon="pencil-square "
                  id="toggle-btn"
                  @click="toggleModal"
                  variant="warning"
                  style="margin-left: 5px"
                ></b-icon>
                <div>
                  <b-modal ref="my-modal" hide-footer title="ที่อยู่ของลูกค้า">
                    <div style="margin-left: 0px" >
                     <b-row>
                        <b-col cols="4" lg="3" sm="3" align="right">
                          <h6>ที่อยู่:</h6>
                        </b-col>
                        <b-col cols="8" lg="9" sm="9"  >
                          
                        </b-col>
                        <b-col cols="4" lg="3" sm="3"  align="right">
                          <h6>ถนน:</h6>
                        </b-col>
                        <b-col cols="8" lg="9" sm="9" >
                          
                        </b-col>
                        <b-col cols="4" lg="3" sm="3" align="right">
                          <h6>ตำบล:</h6>
                        </b-col>
                        <b-col cols="8" lg="9" sm="9">
                          
                        </b-col>
                        <b-col cols="4" lg="3" sm="3"  align="right">
                          <h6>อำเภอ:</h6>
                        </b-col>
                        <b-col cols="8" lg="9" sm="9">
                          
                        </b-col>
                        <b-col cols="4"  lg="3" sm="3" align="right">
                          <h6>จังหวัด:</h6>
                        </b-col>
                        <b-col cols="8" lg="9" sm="9">
                          
                        </b-col>
                        <b-col cols="4" lg="3" sm="3" align="right"> 
                          <h6>รหัสไปรษณีย์:</h6>
                        </b-col>
                        <b-col cols="8" lg="9" sm="9">
                          
                        </b-col> 
                        </b-row> 
                    </div>
                  </b-modal>
                  <b-modal
                    ref="my-modal2"
                    hide-footer
                    title="แก้ไขข้อมูลลูกค้า"
                  >
                    <div style="padding: 0px">
                      <b-row class="my-1">
                        <b-col sm="3" cols="4" lg="3" align="right">
                          <label for="input-default" >ชื่อ:</label>
                        </b-col>
                        <b-col sm="9" cols="8" lg="9">
                          <b-form-input
                            id="input-default"
                            placeholder="Enter your name"
                          ></b-form-input>
                        </b-col>
                      </b-row>
                    </div>

                    <b-row class="my-1">
                      <b-col sm="3"  cols="4" lg="3" align="right">
                        <label for="input-default">ที่อยู่:</label>
                      </b-col>
                      <b-col sm="9"  cols="8" lg="9">
                        <b-form-input
                          id="input-default"
                          placeholder="Enter your name"
                        ></b-form-input>
                      </b-col>
                    </b-row>
                    <b-row class="my-1">
                      <b-col sm="3"  cols="4" lg="3" align="right">
                        <label for="input-default">ถนน:</label>
                      </b-col>
                      <b-col sm="9"  cols="8" lg="9" align="right">
                        <b-form-input
                          id="input-default"
                          placeholder="Enter your name"
                        ></b-form-input>
                      </b-col>
                    </b-row>
                    <b-row class="my-1">
                      <b-col sm="3" cols="4" lg="3" align="right">
                        <label for="input-default">ตำบล:</label>
                      </b-col>
                      <b-col sm="9" cols="8" lg="9">
                        <b-form-input
                          id="input-default"
                          placeholder="Enter your name"
                        ></b-form-input>
                      </b-col>
                    </b-row>
                    <b-row class="my-1">
                      <b-col sm="3" cols="4" lg="3" align="right">
                        <label for="input-default">อำเภอ:</label>
                      </b-col>
                      <b-col sm="9" cols="8" lg="9">
                        <b-form-input
                          id="input-default"
                          placeholder="Enter your name"
                        ></b-form-input>
                      </b-col>
                    </b-row>
                    <b-row class="my-1">
                      <b-col sm="3" cols="4" lg="3" align="right">
                        <label for="input-default">จังหวัด:</label>
                      </b-col>
                      <b-col sm="9" cols="8" lg="9">
                        <b-form-input
                          id="input-default"
                          placeholder="Enter your name"
                        ></b-form-input>
                      </b-col>
                    </b-row>
                    <b-row class="my-1" >
                      <b-col sm="3" cols="4" lg="3" align="right">
                        <label for="input-default">รหัสไปรษณีย์:</label>
                      </b-col>
                      <b-col sm="9" cols="8" lg="9">
                        <b-form-input
                          id="input-default"
                          placeholder="Enter your name"
                        ></b-form-input>
                      </b-col>
                    </b-row>
                    <b-row class="my-1">
                      <b-col sm="3" cols="4" lg="3" align="right">
                        <label for="input-default">เบอร์โทร:</label>
                      </b-col>
                      <b-col sm="9" cols="8" lg="9">
                        <b-form-input
                          id="input-default"
                          placeholder="Enter your name"
                        ></b-form-input>
                      </b-col>
                    </b-row>
                    <b-row class="my-1">
                      <b-col sm="3" cols="4" lg="3" align="right">
                        <label for="input-default">อีเมล:</label>
                      </b-col>
                      <b-col sm="9" cols="8" lg="9">
                        <b-form-input
                          id="input-small" size="sm" 
                          placeholder="Enter your name"
                        ></b-form-input>
                      </b-col>
                    </b-row>
                    <b-row class="my-1">
                      <b-col sm="3" cols="4" lg="3" align="right">
                        <label for="input-small">รหัสผ่าน:</label>
                      </b-col>
                      <b-col sm="9"  cols="8" lg="9">
                        <b-form-input
                          id="input-small" size="sm" 
                          placeholder="Enter your name"
                        ></b-form-input>
                      </b-col>
                    </b-row>
                    <b-button
                      class="mt-2"
                      variant="outline-warning"
                      block
                      @click="toggleModal"
                      >บันทึก</b-button
                    >
                  </b-modal>
                </div>
              </div>
              <b-row>
                <b-col lg="3" cols="3" style="padding: 0px">
                  <b-img
                    v-bind="mainProps"
                    rounded="circle"
                    style="width: 70px"
                    src="https://firebasestorage.googleapis.com/v0/b/chaiyongimg.appspot.com/o/selfie.png?alt=media&token=37b192db-e5d7-4398-a52b-35c86258fde9"
                  ></b-img>
                  <b> username</b>
                </b-col>
                <b-col lg="9" cols="9" style="padding: 0px">
                  <div align="left" style="margin-left: 10px; font-size: 14px">
                    ชื่อ ดาวนภา เฉลิมทรานุวัฒน์ <br />
                    <b-row
                      align="left"
                      style="margin-left: 0px; margin-top: 5px"
                    >
                    </b-row>
                    <div style="font-size: 14px">เบอร์โทร</div>

                    <div style="font-size: 14px">อีเมล</div>

                    <div style="font-size: 14px">รหัสผ่าน</div>
                  </div>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
          <b-col lg="4" cols="12">
            <b-card>
              <div align="right">
                <b-icon icon="pencil-square" variant="warning"></b-icon>
              </div>
              <b-row>
                <b-col lg="3" cols="3" style="padding: 0px; margin-top: 0px">
                  <b-img
                    v-bind="mainProps"
                    rounded="circle"
                    style="width: 70px"
                    src="https://firebasestorage.googleapis.com/v0/b/chaiyongimg.appspot.com/o/selfie.png?alt=media&token=37b192db-e5d7-4398-a52b-35c86258fde9"
                  ></b-img>
                  <b> username</b>
                </b-col>
                <b-col lg="9" cols="9" style="padding: 0px">
                  <div align="left" style="margin-left: 10px; font-size: 14px">
                    ชื่อ ดาวนภา เฉลิมทรานุวัฒน์ <br />
                    <b-row
                      align="left"
                      style="margin-left: 0px; margin-top: 10px"
                    >
                      <b-col
                        cols="5"
                        lg="6"
                        style="font-size: 12px; padding: 0px"
                        >298</b-col
                      >
                      <b-col
                        cols="7"
                        lg="6"
                        style="font-size: 12px; padding: 0px"
                        >ถนน มูลเมือง</b-col
                      >
                      <b-col
                        cols="5"
                        lg="6"
                        style="font-size: 12px; padding: 0px"
                        >ตำบล ศรีภูมิ</b-col
                      >

                      <b-col
                        cols="7"
                        lg="6"
                        style="font-size: 12px; padding: 0px"
                        >อำเภอ เมืองเชียงใหม่</b-col
                      >
                      <b-col
                        cols="5"
                        lg="6"
                        style="font-size: 12px; padding: 0px"
                        >จังหวัด ประจวบคีรีขันธ์
                      </b-col>
                      <b-col
                        sm="2"
                        cols="7"
                        lg="6"
                        style="font-size: 12px; padding: 0px"
                        >50000</b-col
                      >
                    </b-row>
                    <div style="font-size: 12px">เบอร์โทร</div>

                    <div style="font-size: 12px">อีเมล</div>

                    <div style="font-size: 12px">รหัสผ่าน</div>
                  </div>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
          <b-col lg="4" cols="12">
            <b-card>
              <b-row>
                <b-col lg="3" cols="3" style="padding: 0px">
                  <b-img
                    v-bind="mainProps"
                    rounded="circle"
                    style="width: 80px"
                    src="https://firebasestorage.googleapis.com/v0/b/chaiyongimg.appspot.com/o/selfie.png?alt=media&token=37b192db-e5d7-4398-a52b-35c86258fde9"
                  ></b-img>
                  <b> username</b>
                </b-col>
                <b-col lg="9" cols="9" style="padding: 0px">
                  <div align="left" style="margin-left: 10px">ชื่อ-นามสกุล</div>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text2: "",
    };
  },
  methods: {
    formatter(value) {
      return value.toLowerCase();
    },
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modal2"].toggle("#toggle-btn");
    },
  },
};
</script>
