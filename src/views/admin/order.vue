<template>
    <div>
        <div style="background: #f5f5f5">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info" style="z-index: 1">
        <b-navbar-brand href="#">ChaiYang</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item @click="costomer()" >ข้อมูลลูกค้า</b-nav-item>
            <b-nav-item @click="product()">ข้อมูลสินค้า</b-nav-item>
            <b-nav-item @click="order()" disabled>ออเดอร์สินค้า</b-nav-item>
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
                <em>{{NAMEUSER}}</em>
              </template>
              <!-- <b-dropdown-item href="#">โปรไฟล์</b-dropdown-item> -->
              <b-dropdown-item  @click="logouts">ออกจากระบบ</b-dropdown-item>
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

        <template v-slot:cell(detail)="row">
            <!-- แก้ไข -->
            <b-icon
              style="width: 25px; height: 25px"
              @click="info1(row.item, row.index, $event.target)"
              icon="file-earmark-text"
              variant="danger"
            ></b-icon>
             </template>
          <template v-slot:cell(status)="row">
            <!-- รอการตอบรับ -->
            <b-button
              class="mr-2"
              variant="warning"
              @click="info3(row.item, row.index, $event.target)"
              >สถานะการทำงาน</b-button
            >
          </template>

      </b-table>

       <!-- <b-modal :id="infoModal1.id"   ref="modal-1" hide-footer>
          <b-container fluid>
            <div align="center">
              <b><h4>รายละเอียด</h4></b>
            </div>
            <p>รหัสครุภัณฑ์ : </p>
            <p>ยี่ห้อ : </p>
            <p>รุ่น : </p>
            <p>
              วันที่เเจ้งซ่อม : 
            </p>
            <p>ปัญหาการเเจ้งซ่อม : </p>
          </b-container>
        </b-modal> -->

    </div>
    </div>
</template>
<script>
export default {
  data() { 
    return {
        NAMEUSER:'',
      items: [
        { PRODUCT_CODE: 40, MEMBER_NAME: "Dickerson", FIX_STATUS: "Macdonald" },
      ],

      fields: [
        // { key: "FIX_ID", label: "ลำดับ", class: "text-center" },
        { key: "PRODUCT_CODE", label: "เลขออเดอร์", class: "text-center" },
        { key: "MEMBER_NAME", label: "ชื่อลูกค้า", class: "text-center" },
        {
          key: "DATE",
          label: "วันที่",
          class: "text-center",
          formatter: "format_datetime",
        },
        { key: "detail", label: "รายละเอียด", class: "text-center" },
         { key: "status", label: "ปุ่มเปลี่ยนสถานะ", class: "text-center" },
         
      ],

       methods: {
         info1(item, index, button) {
     
    
      this.infoModal1.title = item.name;
      this.infoModal1.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal1.id, button);
    },
       }
    }
  },
  created() {
     this.NAMEUSER = localStorage.getItem("USER")
   },
   methods:{
      // nav
    costomer(){
      this.$router.push({ path: "/admincustomer" });
    },
    product(){
      this.$router.push({ path: "/adminproduct" });
    },
    order(){
      this.$router.push({ path: "/adminorder" });
    },
    logouts() {
      console.log('logout');
      this.$router.push({ path: "/" });
       localStorage.clear();
    },
    // nav
   }
}
</script>