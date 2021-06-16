<template>
  <div style="background: #f5f5f5">
    <!-- --------------nav------------ -->
    <Nav />
    <!-- --------------nav------------ -->
    <div><br /><br /><br /></div>
    <div style="margin-top: 50px">
      <b-row>
        <b-col style="padding: 5px" cols="12" lg="3">
          <img
            src="https://image.flaticon.com/icons/png/512/544/544565.png"
            alt=""
            width="100px"
            height="100px"
          />
          <div style="margin-top: 20px">
            <b>โทร : 053-217961</b> <br /><b></b>
          </div>
        </b-col>
        <b-col style="padding: 5px" cols="12" lg="3">
          <img
            src="https://image.flaticon.com/icons/png/512/2235/2235252.png"
            alt=""
            width="100px"
            height="100px"
          />
          <div style="margin-top: 20px">
            <b>351 ถนนมูลเมือง ตำบลศรีภูมิ </b> <br />
            <b>อำเภอเมือง จังหวัดเชียงใหม่ 50200 </b>
          </div>
        </b-col>
        <b-col style="padding: 5px" cols="12" lg="3">
          <img
            src="https://image.flaticon.com/icons/png/512/1653/1653702.png"
            alt=""
            width="100px"
            height="100px"
          />
          <div style="margin-top: 20px">
            <b>จันทร์ - เสาร์ : 08.00 - 18.00 น.</b> <br />
            <b>หยุดวันอาทิตย์</b>
          </div>
        </b-col>
        <b-col style="padding: 5px" cols="12" lg="3">
          <img
            src="https://image.flaticon.com/icons/png/512/1653/1653630.png"
            alt=""
            width="100px"
            height="100px"
          />
          <br />
          <a href="https://www.facebook.com/Chaiyongchiangmai351/"
            ><b style="font-size: 18px;color: #c0940f;">FB : ชัยยงค์การช่าง เชียงใหม่</b></a
          >
        </b-col>
      </b-row>
    </div>

    <div style="margin: 10px">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.0772115580344!2d98.99123371484694!3d18.794712087249952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3aa24fd63ca7%3A0xd76755c125914772!2z4LiK4Lix4Lii4Lii4LiH4LiE4LmM4LiB4Liy4Lij4LiK4LmI4Liy4LiH!5e0!3m2!1sth!2sth!4v1623485802653!5m2!1sth!2sth"
        width="100%"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>

    <!-- footer -->
    <br /><br />
    <div class="footerr">
      <b-container class="bv-example-row">
        <b-row>
          <b-col cols="4">
            <div style="padding-top: 10px">
              <b-icon
                icon="house-fill"
                variant="light"
                font-scale="1.5"
              ></b-icon>
            </div>
            <font color="#FFFFFF">สินค้า</font>
          </b-col>

          <b-col cols="4">
            <div style="padding-top: 10px">
              <b-icon
                icon="heart-fill"
                variant="light"
                font-scale="1.5"
              ></b-icon>
            </div>
            <font color="#FFFFFF">ถูกใจ</font>
          </b-col>

          <b-col cols="4" @click="gocart()">
            <div style="padding-top: 10px">
              <b-icon
                icon="basket-fill"
                variant="light"
                font-scale="1.5"
              ></b-icon>
            </div>
            <font color="#FFFFFF">รถเข็น</font>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <!-- footer -->
  </div>
</template>
<script>
import Nav from "../../components/Nav";
export default {
  components: {
    Nav,
  },
  data() {
    return;
  },
};
</script>
