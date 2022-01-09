<template>
  <div style="background: #f5f5f5">
    <!-- --------------nav------------ -->
    <Nav />
    <!-- --------------nav------------ -->
    <br /><br /><br />
    <div>
      <b-row>
        <b-col cols="12" lg="6">
          <b-card>
            <b-row style="margin-top: 15px">
              <b-col cols="8" lg="8">
                <div align="left" ><b>ที่อยู่ในการจัดส่ง :</b></div>
              </b-col>
              <b-col cols="4" lg="4">
                <div align="right">เปลี่ยน</div>
              </b-col>
            </b-row>

            <b-row style="margin-top: 20px">
              <b-col cols="6" lg="4">
                <div align="left">ชื่อผู้ใช้</div>
              </b-col>
              <b-col cols="1" lg="1">
                <div>|</div>
              </b-col>
              <b-col cols="5" lg="6">
                <div align="left">เบอร์โทร</div>
              </b-col>
            </b-row>
            <div align="left" style="margin-bottom:15px">ที่อยู่</div>
            
          </b-card>
          <b-card>
            <div align="left" style="margin-top: 15px"><b>การจัดส่ง :</b></div>

            <div align="left" style="margin-top: 20px">
              <b-row>
                <b-col cols="1" lg="1">
                 <input type="radio" id="two" value="Two" v-model="picked">
                </b-col>
                <b-col cols="11" lg="11">
                  <div align="left">
                    <label for="two"> ส่งแบบลงทะเบียน ได้รับสินค้าภายใน 3-5 วัน</label>
                   
                  </div>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="1" lg="1">
                  <input type="radio" id="one" value="One" v-model="picked">
                </b-col>
                <b-col cols="11" lg="11">
                  <div align="left" style="margin-bottom:15px"><label for="one">ส่งแบบ EMS ได้รับสินค้าภายใน 1-2 วัน </label></div>
                </b-col>
              </b-row>
            </div>
          </b-card>
          <b-card>
            <div align="left" style="margin-top: 15px"><b>การชำระเงิน :</b></div>

            <div align="left" style="margin-top: 20px">
              <b-row>
                <b-col cols="1" lg="1">
                  
              <input type="radio" id="one" value="One" v-model="picked">




                </b-col>
                <b-col cols="11" lg="11">
                  <div align="left"> <label for="one">ชำระเงินปลายทาง</label></div>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="1" lg="1">
                  <input type="radio" id="two" value="Two" v-model="picked">
                </b-col>
                <b-col cols="11" lg="11">
                  <div align="left" style="margin-bottom:15px"><label for="two">ชำระเงินโอนผ่านธนาคาร</label></div>
                </b-col>


              </b-row>
            </div>
          </b-card>
        </b-col>
        <b-col cols="12" lg="6">
          <b-card>
            <div align="left" style="margin-top:15px"><b>ออเดอร์ของคุณ </b> (1 ชิ้น)</div>

            <hr class="style7" />
            <br />

            <b-row style="margin-top: 0px">
              <b-col cols="4" lg="2">
                <div style="margin-left: 0px">
                  <b-img
                    rounded="0"
                    style="width: 100px"
                    src="https://firebasestorage.googleapis.com/v0/b/chaiyongimg.appspot.com/o/4.png?alt=media&token=b9da41a4-dc4e-4982-8e1f-a1181821c7b9"
                    align="left"
                  >
                  </b-img>
                </div>
              </b-col>
              <b-col cols="8" lg="10">
                <div align="left">
                  <b>ชื่อสินค้า</b>
                </div>
                <div align="left">จำนวน</div>
                <div align="left">฿000</div>
              </b-col>
            </b-row>
            <br />
            <b-row style="margin-top: 0px">
              <b-col cols="4" lg="2">
                <div style="margin-left: 0px">
                  <b-img
                    rounded="0"
                    style="width: 100px"
                    src="https://firebasestorage.googleapis.com/v0/b/chaiyongimg.appspot.com/o/4.png?alt=media&token=b9da41a4-dc4e-4982-8e1f-a1181821c7b9"
                    align="left"
                  >
                  </b-img>
                </div>
              </b-col>
              <b-col cols="8" lg="10">
                <div align="left">
                  <b>ชื่อสินค้า</b>
                </div>
                <div align="left">จำนวน</div>
                <div align="left">฿000</div>
              </b-col>
            </b-row>
            <br />
            <hr class="style7" />

            <b-row style="margin-top: 20px">
              <b-col cols="6" lg="6">
                <div align="left">ราคารวม</div>
              </b-col>
              <b-col cols="6" lg="6">
                <div align="right">฿000</div>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" lg="6">
                <div align="left">ค่าจัดส่ง</div>
              </b-col>
              <b-col cols="6" lg="6">
                <div align="right">฿00</div>
              </b-col>
            </b-row>
            <hr class="style7" />
            <b-row style="margin-bottom:15px">
              <b-col cols="6" lg="6">
                <div align="left">ยอดท้ังหมด</div>
              </b-col>
              <b-col cols="6" lg="6">
                <div align="right">฿0000</div>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </div>
   
      <br /><br />
    <div class="footerr" style="z-index: 9999 !important;">
      <b-container class="bv-example-row">
        <b-row>
          <b-col cols="3" lg="3">
            <div @click="backindex()" style="padding-top: 10px">
              <b-icon
                icon="chevron-left"
                variant="light"
                font-scale="1.5"
              ></b-icon>
            </div>
            <font color="#FFFFF">ย้อนกลับ</font>
          </b-col>

          <b-col cols="9" lg="9">
            <b-row>
               <b-col cols="7" lg="10">
               <div align="right"  style="padding-top: 10px">
             ยอดทั้งหมด:
             <div>
               ฿000
             </div>
           
  
            </div>
            
            </b-col>
             <b-col cols="5" lg="2" @click="gocart()">
            <div  style="padding-top: 10px">
               <b-button  block  variant="danger"  >ซื้อเลย</b-button>
            </div>
           
          </b-col>
            </b-row>
           
           
          </b-col>

         
        </b-row>
      </b-container>
    </div>
    

  </div>
</template>
<script>
import Nav from "../../components/Nav";
export default {
  components: {
    Nav,
  },
};
</script>
<style>
.style7 {
  border-top: 1px solid #e4e4e4;
  border-bottom: 0px solid #fff;
}



</style>