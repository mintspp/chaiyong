<template>
  <div style="background: #f5f5f5">
    <!-- --------------nav------------ -->
    <Nav />
    <!-- --------------nav------------ -->
    <br />
    <div style="margin-top: 60px">
      <h5>ประวัติการสั่งซื้อ</h5>
    </div>
  </div>
</template>

<script>
import Nav from "../../components/Nav";
import axios from "axios";
import firebase from "firebase";
const api_url = require("../../../utilities/api");
export default {
  components: {
    Nav,
  },
};
</script>

<style>
</style>