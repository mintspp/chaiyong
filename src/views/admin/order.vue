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
        <div><b style="font-size: 16px">ออเดอร์สินค้า </b></div>
        <br />
        
        
      </div>
    </div>
    <div style="margin-left: 5px; margin-right: 5px">
      <b-table show-empty
        responsive
        fixed
        stacked="md"
        :items="items"
        :fields="fields"
        :filter="filter"
        :filterIncludedFields="filterOn"
        :head-variant="dark">

      </b-table>

    </div>
    </div>
</template>
<script>
export default {
  data() { 
    return {
      items: [
        { PRODUCT_CODE: 40, MEMBER_NAME: "Dickerson", FIX_STATUS: "Macdonald" },
      ],

      fields: [
        // { key: "FIX_ID", label: "ลำดับ", class: "text-center" },
        { key: "PRODUCT_CODE", label: "เลขออเดอร์", class: "text-center" },
        { key: "MEMBER_NAME", label: "ชื่อสินค้า", class: "text-center" },
        {
          key: "DATE",
          label: "รูปภาพ",
          class: "text-center",
          formatter: "format_datetime",
        },
        { key: "FIX_STATUS", label: "ราคา", class: "text-center" },
        { key: "detail", label: "ชื่อลูกค้า", class: "text-center" },
        { key: "fixstatus", label: "ที่อยู่ลูกค้า", class: "text-center" },
         { key: "status", label: "ปุ่มเปลี่ยนสถานะ", class: "text-center" },
         
      ],
    }
  }
}
</script>