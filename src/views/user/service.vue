<template>
  <div style="background: #f1f1f1">
    <!-- --------------nav------------ -->
    <Nav />
    <!-- --------------nav------------ -->
    <div><br /><br /></div>
    <div style="margin: 20px">
      <b-row>
        <b-col cols="12" lg="6" style="margin-top: 10px">
          <div>
            <b-card style="border-radius: 20px"  border-variant="light">
              <b-row>
                <b-col cols="4" lg="5">
                  <img
                    src="https://image.flaticon.com/icons/png/512/2810/2810355.png"
                    alt=""
                    style="width: 100px; height: 100px"
                    align="center"
                  />
                </b-col>
                <b-col cols="8" lg="7">
                  <b-card-text align="left">
                    <em> <b>กรรไกร</b></em> <br />
                    กรรไกรตัดผม 70 บาท <br />
                    กรรไกรซอยผม 70 บาท
                  </b-card-text>
                </b-col>
              </b-row>
            </b-card>
          </div>
        </b-col>
        <b-col cols="12" lg="6" style="margin-top: 10px">
          <div>
            <b-card style="border-radius:20px">
              <b-row>
                <b-col cols="4" lg="5">
                  <img
                    src="https://image.flaticon.com/icons/png/512/186/186506.png"
                    alt=""
                    style="width: 100px; height: 100px"
                  />
                </b-col>
                <b-col cols="8" lg="7">
                  <b-card-text>
                    Some quick example text to build on the
                    <em>card title</em> and make up the bulk of the card's
                    content.
                  </b-card-text>
                </b-col>
              </b-row>
            </b-card>
          </div>
        </b-col>
         <b-col cols="12" lg="6" style="margin-top: 10px">
          <div>
            <b-card style="border-radius:20px">
              <b-row>
                <b-col cols="4" lg="5">
                  <img
                    src="https://image.flaticon.com/icons/png/512/2810/2810341.png"
                    alt=""
                    style="width: 100px; height: 100px"
                    align="center"
                  />
                </b-col>
                <b-col cols="8" lg="7">
                  <b-card-text>
                    Some quick example text to build on the
                    <em>card title</em> and make up the bulk of the card's
                    content.
                  </b-card-text>
                </b-col>
              </b-row>
            </b-card>
          </div>
        </b-col>
        <b-col cols="12" lg="6" style="margin-top: 10px">
          <div>
            <b-card style="border-radius:20px">
              <b-row>
                <b-col cols="4" lg="5">
                  <img
                    src="https://image.flaticon.com/icons/png/512/186/186508.png"
                    alt=""
                    style="width: 100px; height: 100px"
                    align="center"
                  />
                </b-col>
                <b-col cols="8" lg="7">
                  <b-card-text>
                    Some quick example text to build on the
                    <em>card title</em> and make up the bulk of the card's
                    content.
                  </b-card-text>
                </b-col>
              </b-row>
            </b-card>
          </div>
        </b-col>
      </b-row>
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
