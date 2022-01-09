<template>
  <div>
    <div style="background: #f5f5f5">
      <div>
        <b-navbar toggleable="lg" type="dark" variant="info" style="z-index: 1">
          <b-navbar-brand href="#">ChaiYang</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item @click="gocustomer">ข้อมูลลูกค้า</b-nav-item>
              <b-nav-item href="#" disabled>ข้อมูลสินค้า</b-nav-item>
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
        <b-row>
          <b-col xl="10" lg="10" sm="12">
            <div align="left">
              <b style="font-size: 20px; padding: 10px">ข้อมูลสินค้า </b>
            </div>
          </b-col>
          <b-col align="right">
            <b-button
              pill
              variant="warning"
              style="width: 100%"
              @click="showModal"
            >
              <b style="font-size: 18px; padding: 10px">เพิ่มสินค้า</b>
            </b-button>
          </b-col>
        </b-row>
        <!-- modal add product -->
        <div>
          <b-modal ref="my-modal" size="lg" hide-footer title="เพิ่มสินค้า">
            <div style="margin-left: 0px">
              <label for="input-default">ชื่อสินค้า</label>
              <b-form-input
                id="input-default"
                v-model="PRODUCT_NAME"
              ></b-form-input>

              <label for="input-default">รายละเอียด</label>
              <b-form-textarea
                id="textarea-default"
                placeholder="Default textarea"
<<<<<<< HEAD
                v-model="DETAIL"
=======
>>>>>>> b60eae105edc905c0ff07499003f3b6a8808ab02
              ></b-form-textarea>
              <b-row>
                <b-col cols="6" lg="6">
                  <label for="input-default">ประเภท</label>
                  <b-form-select
<<<<<<< HEAD
                    v-model="TYPE"
                    :options="types"
=======
                    v-model="selected"
                    :options="options"
>>>>>>> b60eae105edc905c0ff07499003f3b6a8808ab02
                  ></b-form-select>
                </b-col>
                <b-col cols="6" lg="6">
                  <label for="input-default">ยี่ห้อ</label>
                  <b-form-select
<<<<<<< HEAD
                    v-model="BRAND"
                    :options="brends"
=======
                    v-model="selected"
                    :options="options"
                  ></b-form-select>
                </b-col>
              </b-row>

              <b-row>
                <b-col cols="6" lg="6">
                  <label for="input-default">ราคา</label>
                  <b-form-select
                    v-model="selected"
                    :options="options"
                  ></b-form-select>
                </b-col>
                <b-col cols="6" lg="6">
                  <label for="input-default">สต็อก</label>
                  <b-form-select
                    v-model="selected"
                    :options="options"
>>>>>>> b60eae105edc905c0ff07499003f3b6a8808ab02
                  ></b-form-select>
                </b-col>
              </b-row>

<<<<<<< HEAD
              <b-row>
                <b-col cols="6" lg="6">
                  <label for="input-default">ราคา</label>
                  <b-form-input
                    id="input-default"
                    v-model="PRICE"
                  ></b-form-input>
                </b-col>
                <b-col cols="6" lg="6">
                  <label for="input-default">สต็อก</label>
                  <b-form-input
                    id="input-default"
                    v-model="STOCK"
                  ></b-form-input>
                </b-col>
              </b-row>

              <label for="input-default">รูปภาพ</label>
              <b-form-file
                @change="previewImage"
                v-model="IMG"
                accept="image/*"
                placeholder="อัพโหลดโปรไฟล์"
                align="center"
                drop-placeholder="Drop file here..."
              ></b-form-file>
              <div style="margin-top: 10px">
                <b-button @click="addPRODUCT" block variant="success"
                  >บันทึก</b-button
                >
=======
              <label for="input-default">รูปภาพ</label>
              <b-form-file
                multiple
                :file-name-formatter="formatNames"
              ></b-form-file>

              <div style="margin-top: 10px">
                <b-button block variant="success">บันทึก</b-button>
>>>>>>> b60eae105edc905c0ff07499003f3b6a8808ab02
              </div>
            </div>
          </b-modal>
        </div>

        <b-row style="margin-top: 10px">
          <b-col></b-col>
          <b-col xl="4" lg="4" sm="12">
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
        </b-row>
      </div>
    </div>
    <div style="margin-left: 5px; margin-right: 5px">
      <b-table
        show-empty
        responsive
        fixed
        stacked="md"
        :items="items"
        :fields="fields"
        :filter="filter"
        :filterIncludedFields="filterOn"
        :head-variant="dark"
      >
        <template v-slot:cell(detail)="row">
          <!-- รายละเอียด -->
          <b-button
            variant="warning"
            @click="detail(row.item, row.index, $event.target)"
            class="mr-2"
            >รายละเอียด</b-button
          >
          <!-- แก้ไข -->
          <b-button
            variant="info"
            class="mr-2"
            @click="edit(row.item, row.index, $event.target)"
            >แก้ไข</b-button
          >

          <!-- ลบ -->
          <b-button
            variant="danger"
            @click="deletes(row.item, row.index, $event.target)"
            >ลบ</b-button
          >
        </template>
      </b-table>
      <!-- Info modal 1 -->
      <b-modal
        :id="infoModal1.id"
        ref="modal-1"
        :title="infoModal1.title"
        hide-footer
      >
        <div>
          <b>ชื่อ :</b> {{ items[md1].PRODUCT_NAME }} <br />
          <b>รายละเอียด :</b> {{ items[md1].DETAIL }} <br />
          <b>ยี่ห้อ :</b> {{ items[md1].BRAND }} <br />
          <b>ประเภท :</b> {{ items[md1].TYPE }} <br />
          <b>ราคา :</b> {{ items[md1].PRICE }} บาท<br />
          <b>สต็อก :</b> {{ items[md1].STOCK }} <br />
          <center>
            <img :src="items[md1].IMG" style="width: 200px" alt="" />
          </center>
          <br />
        </div>
      </b-modal>

      <!-- Info modal 2 -->
      <b-modal
        :id="infoModal2.id"
        ref="modal-2"
        size="lg"
        :title="infoModal2.title"
        hide-footer
      >
        <div style="margin-left: 0px">
          <label for="input-default">ชื่อสินค้า</label>
          <b-form-input
            id="input-default"
            v-model="items[md2].PRODUCT_NAME"
          ></b-form-input>

          <label for="input-default">รายละเอียด</label>
          <b-form-textarea
            id="textarea-default"
            placeholder="Default textarea"
            v-model="items[md2].DETAIL"
          ></b-form-textarea>
          <b-row>
            <b-col cols="6" lg="6">
              <label for="input-default">ประเภท</label>
              <b-form-select
                v-model="items[md2].TYPE"
                :options="types"
              ></b-form-select>
            </b-col>
            <b-col cols="6" lg="6">
              <label for="input-default">ยี่ห้อ</label>
              <b-form-select
                v-model="items[md2].BRAND"
                :options="brends"
              ></b-form-select>
            </b-col>
          </b-row>

          <b-row>
            <b-col cols="6" lg="6">
              <label for="input-default">ราคา</label>
              <b-form-input
                id="input-default"
                v-model="items[md2].PRICE"
              ></b-form-input>
            </b-col>
            <b-col cols="6" lg="6">
              <label for="input-default">สต็อก</label>
              <b-form-input
                id="input-default"
                v-model="items[md2].STOCK"
              ></b-form-input>
            </b-col>
            <b-col cols="12" lg="12">
              <label for="input-default">สถานะ</label>
              <b-form-select
                v-model="items[md2].STATUS"
                :options="statuss"
              ></b-form-select>
            </b-col>
          </b-row>

          <label for="input-default">รูปภาพ</label>
          <b-form-file
            @change="previewImage"
            v-model="IMGs"
            accept="image/*"
            placeholder="อัพโหลดโปรไฟล์"
            align="center"
            drop-placeholder="Drop file here..."
          ></b-form-file>
        </div>
        <b-button class="mt-3" variant="success" block @click="updatePRODUCT()"
          >แก้ไขข้อมูล</b-button
        >
      </b-modal>

      <!-- Info modal 3 -->
      <b-modal
        :id="infoModal3.id"
        ref="modal-3"
        :title="infoModal3.title"
        hide-footer
      >
        <div>
          <center>
            <b style="font-size: 18px">ท่านต้องการลบสินค้าใช่หรือไม่</b>
          </center>
          <b-row>
            <b-col xl="6" lg="6">
              <b-button
                class="mt-3"
                variant="success"
                block
                @click="deleteProduce"
                >ใช่</b-button
              >
            </b-col>
            <b-col xl="6" lg="6">
              <b-button class="mt-3" variant="danger" block @click="hideModal"
                >ไม่ใช่</b-button
              ></b-col
            >
          </b-row>
        </div>
      </b-modal>
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
<<<<<<< HEAD
      PRODUCT_NAME: "",
      DETAIL: "",
      PRICE: "",
      STATUS: "",
      STOCK: "",
      TYPE: "",
      BRAND: "",
      IMG: "",
      IMGs: "",
      items: null,
      search: "",
      fields: [
        { key: "PRODUCT_ID", label: "รหัสสินค้า", class: "text-center" },
        { key: "PRODUCT_NAME", label: "ชื่อสินค้า", class: "text-center" },
        { key: "detail", label: "จัดการข้อมูล", class: "text-center" },
      ],
      types: [
        { value: "ครีมเปลี่ยนสีผม", text: "ครีมเปลี่ยนสีผม" },
        { value: "บำรุงผม", text: "บำรุงผม" },
      ],
      brends: [
        { value: "Berina", text: "Berina" },
        { value: "Cruset", text: "Cruset" },
      ],
      statuss: [
        { value: "1", text: "สินค้าทั่วไป" },
        { value: "2", text: "สินค้าขายดี" },
        { value: "3", text: "สินค้าโปรโมชั่น" },
      ],
      md1: 0,
      md2: 0,
      md3: 0,
      infoModal1: {
        id: "info-modal1",
        title: "",
        content: "",
      },
      infoModal2: {
        id: "info-modal2",
        title: "",
        content: "",
      },
      infoModal3: {
        id: "info-modal3",
        title: "",
        content: "",
      },
=======
      // fields: [
      //   { key: "านานา", label: "รหัสสินค้า", class: "text-center" },
      //   { key: "้ร้ร้ร้ร้ร้", label: "ชื่อสินค้า", class: "text-center" },
      //   { key: "มสมสม", label: "รายละเอียด", class: "text-center" },
      //   { key: "่า", label: "ประเภท", class: "text-center" },
      //   { key: "ส", label: "ยี่ห้อ", class: "text-center" },
      //   { key: "่สน่ส่ส", label: "ราคา", class: "text-center" },
      //   { key: "ย", label: "รูปภาพ", class: "text-center" },
      //   { key: "55665", label: "สต็อก", class: "text-center" },
      // ],

      items: [
        { PRODUCT_CODE: 40, MEMBER_NAME: "Dickerson", FIX_STATUS: "Macdonald" },
      ],

      fields: [
        // { key: "FIX_ID", label: "ลำดับ", class: "text-center" },
        { key: "PRODUCT_CODE", label: "รหัสสินค้า", class: "text-center" },
        { key: "MEMBER_NAME", label: "ชื่อสินค้า", class: "text-center" },
        {
          key: "DATE",
          label: "รายละเอียด",
          class: "text-center",
          formatter: "format_datetime",
        },
        { key: "fixstatus", label: "ราคา", class: "text-center" },
        { key: "status", label: "รูปภาพ", class: "text-center" },
        { key: "fix", label: "สต็อก", class: "text-center" },
        { key: "detail", label: "จัดการ", class: "text-center" },
      ],
      value: 0,
>>>>>>> b60eae105edc905c0ff07499003f3b6a8808ab02
    };
  },
  created() {
    // สินค้า
    axios
      .post(`${api_url.api_url}/selectproductALL`, {
        search: this.search,
      })
      .then((response) => {
        console.log(response.data);
        this.items = response.data;
      });
  },
  methods: {
    serchProduct() {
      // สินค้า
      axios
        .post(`${api_url.api_url}/selectproductALL`, {
          search: this.search,
        })
        .then((response) => {
          console.log(response.data);
          this.items = response.data;
        });
    },
    hideModal() {
      this.$refs["modal-3"].hide();
    },
    deleteProduce() {
      axios
        .post(`${api_url.api_url}/updateProductstatus`, {
          STATUS: this.items[this.md3].STATUS,
          PRODUCT_ID: this.items[this.md3].PRODUCT_ID,
        })
        .then((response) => {
          console.log(response.data);
          this.$refs["modal-2"].hide();
          axios.post(`${api_url.api_url}/selectproductALL`).then((response) => {
            console.log(response.data);
            this.items = response.data;
          });
        });
      this.$refs["modal-3"].hide();
    },
    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },
    addPRODUCT() {
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
              .post(`${api_url.api_url}/insertProduct`, {
                PRODUCT_NAME: this.PRODUCT_NAME,
                DETAIL: this.DETAIL,
                PRICE: this.PRICE,
                STATUS: "1",
                STOCK: this.STOCK,
                TYPE: this.TYPE,
                BRAND: this.BRAND,
                IMG: url,
              })
              .then((response) => {
                console.log(response.data);
                this.$refs["my-modal"].hide();
                axios
                  .post(`${api_url.api_url}/selectproductALL`)
                  .then((response) => {
                    console.log(response.data);
                    this.items = response.data;
                  });
              });
          });
        }
      );
    },
    updatePRODUCT() {
      // console.log(this.items[this.md2].PRODUCT_ID);
      console.log(this.IMGs);
      if (this.IMGs != "") {
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
                .post(`${api_url.api_url}/updateProduct`, {
                  PRODUCT_NAME: this.items[this.md2].PRODUCT_NAME,
                  DETAIL: this.items[this.md2].DETAIL,
                  PRICE: this.items[this.md2].PRICE,
                  STOCK: this.items[this.md2].STOCK,
                  STATUS: this.items[this.md2].STATUS,
                  TYPE: this.items[this.md2].TYPE,
                  BRAND: this.items[this.md2].BRAND,
                  IMG: url,
                  PRODUCT_ID: this.items[this.md2].PRODUCT_ID,
                })
                .then((response) => {
                  console.log(response.data);
                  this.$refs["modal-2"].hide();
                  axios
                    .post(`${api_url.api_url}/selectproductALL`)
                    .then((response) => {
                      console.log(response.data);
                      this.items = response.data;
                    });
                });
            });
          }
        );
      } else {
        axios
          .post(`${api_url.api_url}/updateProduct`, {
            PRODUCT_NAME: this.items[this.md2].PRODUCT_NAME,
            DETAIL: this.items[this.md2].DETAIL,
            PRICE: this.items[this.md2].PRICE,
            STOCK: this.items[this.md2].STOCK,
            STATUS: this.items[this.md2].STATUS,
            TYPE: this.items[this.md2].TYPE,
            BRAND: this.items[this.md2].BRAND,
            IMG: this.items[this.md2].IMG,
            PRODUCT_ID: this.items[this.md2].PRODUCT_ID,
          })
          .then((response) => {
            console.log(response.data);
            this.$refs["modal-2"].hide();
            axios
              .post(`${api_url.api_url}/selectproductALL`)
              .then((response) => {
                console.log(response.data);
                this.items = response.data;
              });
          });
      }
    },
    gocustomer() {
      this.$router.push({ path: "/admincustomer" });
    },
    rowClass(item, type) {
      if (!item || type !== "row") return;
      if (item.status === "awesome") return "table-success";
    },
    showModal() {
      this.$refs["my-modal"].show();
    },
    detail(item, index, button) {
      this.md1 = index;
      console.log(index);
      this.infoModal1.title = item.name;
      this.infoModal1.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal1.id, button);
    },
    edit(item, index, button) {
      this.md2 = index;
      console.log(index);
      this.infoModal2.title = item.name;
      this.infoModal2.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal2.id, button);
    },
    deletes(item, index, button) {
      this.md3 = index;
      console.log(index);
      this.infoModal3.title = item.name;
      this.infoModal3.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal3.id, button);
    },
  },
};
</script>
<style>

</style>