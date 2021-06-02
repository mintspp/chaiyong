<template>
     <div>
      <b-navbar toggleable="lg" type="dark" style="background-color: #3a393b">
        <b-navbar-brand href="#">ชัยยงค์การช่าง</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            
            <b-nav-item href="#">บริการ</b-nav-item>
            <b-nav-item href="#" disabled>ติดต่อเรา</b-nav-item>
            
            <div style="font-size: 2rem" >
              <b-icon icon="bell-fill" style="width: 20px; height: 20px" variant="light" align="center"></b-icon>
            </div>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>รูป</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
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