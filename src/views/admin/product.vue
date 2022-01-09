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
        <div ><b style="font-size: 16px">ข้อมูลสินค้า </b></div>
       <div align="right">
         <b-button  pill variant="warning" @click="showModal" style=" border-radius: 10 px;">
              <b style="font-size: 14px">เพิ่มสินค้า</b>
            </b-button>
         </div> 

       
        <div>
          <b-modal ref="my-modal" size="lg" hide-footer title="เพิ่มสินค้า">
            <div style="margin-left: 0px">
              <label for="input-default">ชื่อสินค้า</label>
              <b-form-input
                id="input-default"
                placeholder="Enter your name"
              ></b-form-input>

              <label for="input-default">รายละเอียด</label>
              <b-form-textarea
                id="textarea-default"
                placeholder="Default textarea"
              ></b-form-textarea>
              <b-row>
                <b-col cols="6" lg="6">
                  <label for="input-default">ประเภท</label>
                  <b-form-select
                    v-model="selected"
                    :options="options"
                  ></b-form-select>
                </b-col>
                <b-col cols="6" lg="6">
                  <label for="input-default">ยี่ห้อ</label>
                  <b-form-select
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
                  ></b-form-select>
                </b-col>
              </b-row>

              <label for="input-default">รูปภาพ</label>
              <b-form-file
                multiple
                :file-name-formatter="formatNames"
              ></b-form-file>

              <div style="margin-top: 10px">
                <b-button block variant="success">บันทึก</b-button>
              </div>
            </div>
          </b-modal>
        </div>
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
          <!-- แก้ไข -->
          <b-icon
            style="width: 25px; height: 25px"
            @click="info1(row.item, row.index, $event.target)"
            icon="file-earmark-text"
            variant="danger"
          ></b-icon>
        </template>
        <template v-slot:cell(fixstatus)="row">
          <!-- รอการตอบรับ -->
          <b-button
            class="mr-2"
            variant="warning"
            @click="info3(row.item, row.index, $event.target)"
            >สถานะการทำงาน</b-button
          >
        </template>
      </b-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
    };
  },
  methods: {
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
  },
};
</script>
<style>

</style>