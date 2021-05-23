<template>
     <div>
      <b-navbar toggleable="lg" type="dark" style="background-color: #CC6699">
        <b-navbar-brand href="#">ชัยยงค์การช่าง</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
            <div style="font-size: 2rem">
              <b-icon icon="basket2-fill" scale="1" variant="light"></b-icon>
            </div>
            <div style="font-size: 2rem">
              <b-icon icon="bell-fill" scale="1" variant="light"></b-icon>
            </div>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>User</em>
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
</style>