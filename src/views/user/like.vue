<template>
  <div style="background: #f9fafb">
    <!-- --------------nav------------ -->
    <!-- <Nav /> -->
    <!-- --------------nav------------ -->
  
  <div >
    <b-nav style="background-color: rgb(52, 86, 139)">
      <b-col lg="3" cols="4" style="padding: 0px">
       <b-nav-item > <p class="text-light">ชัยยงค์การช่าง</p></b-nav-item>
    </b-col>
    <b-col lg="3" cols="6">
   <b-nav-item >  <p class="text-light" >Active</p></b-nav-item>
     </b-col> 
   <b-col lg="3" cols="6">
   <b-nav-item >  <p class="text-light" >Active</p></b-nav-item>
     </b-col> 
      
   <b-col lg="3" cols="6">
      <b-nav-item >  <p class="text-light" >Active</p></b-nav-item></b-col> 
    <b-col lg="3" cols="6">
      <b-nav-item disabled> <p class="text-muted" > Disabled</p></b-nav-item>
      </b-col>
   
    
  </b-nav>
  </div>

    <br /><br /><br />
    <br />
    <div>
      <b-row>
        <b-col lg="6" cols="12">
          <div style="margin-bottom: 20px">สินค้าที่ถูกใจ</div>
        </b-col>
        <b-col lg="6" cols="12">
          <b-row>
            <b-col>
               
   <button class="button-81" >ทั้งหมด</button>
     
            </b-col>
            <b-col>
               
   <button class="button-61" >โปรโมชั่น</button>
     
            </b-col>
            <b-col>
               
   <button class="button-81" >สินค้าขายดี</button>
     
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <div style="margin-right: 20px; margin-left: 20px">
        <b-row>
          <b-col cols="6" lg="2" style="padding: 5px">
            <b-card-group deck style="max-width: 20rem">
              <b-card
                img-src="https://firebasestorage.googleapis.com/v0/b/chaiyongimg.appspot.com/o/green.jpg?alt=media&token=42d97550-77b7-4026-bbe2-daec70134236"
                img-top
              >
                <b-card-text>
                  <div align="left">
                    <div class="fonts" style="font-size: 15px">
                      <p></p>
                    </div>
                    <b-row>
                      <b-col cols="6"
                        ><div align="left">
                          <h6 style="font-size: 12px">฿</h6>
                        </div>
                      </b-col>
                      <b-col cols="6">
                        <div align="right">
                         <label class="like">
  <input type="checkbox"/>
  <div class="hearth"/>
</label>

                        </div>
                      </b-col>
                    </b-row>
                  </div>
                </b-card-text>
              </b-card>
            </b-card-group>
          </b-col>
        </b-row>
      </div>
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
  body() {
    const heartDOM = document.querySelector('.js-heart');
// initialized like to false when user hasnt selected
let liked = false;

// create a onclick listener
heartDOM.onclick = (event) => {
	// check if liked 
	liked = !liked; // toggle the like ( flipping the variable)
	
	// this is what we clicked on
	const target = event.currentTarget;
	
	if (liked) {
		// remove empty heart if liked and add the full heart
		target.classList.remove('far');
		target.classList.add('fas', 'pulse');
	} else {
		// remove full heart if unliked and add empty heart
		target.classList.remove('fas');
		target.classList.add('far');
	}
}

heartDOM.addEventListener('animationend', (event) => {
	event.currentTarget.classList.remove('pulse');
})
  }
  
};
</script>
<style>


/* CSS */
.button-61 {
  align-items: center;
  appearance: none;
  border-radius: 0.375rem;
  border-style: none;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 1px -2px, rgba(0, 0, 0, 0.14) 0 2px 2px 0,
    rgba(0, 0, 0, 0.12) 0 1px 5px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  
  padding: 8px 24px;
  font-size: 0.875rem;
  
  height: 30px;
  justify-content: center;
  letter-spacing: 0.0892857em;
  line-height: normal;
  min-width: 30px;
  outline: none;
  overflow: visible;
  padding: 0 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  will-change: transform, opacity;
}

.button-61:hover {
  box-shadow: rgba(0, 0, 0, 0.2) 0 2px 4px -1px, rgba(0, 0, 0, 0.14) 0 4px 5px 0,
    rgba(0, 0, 0, 0.12) 0 1px 10px 0;
}

.button-61:disabled {
  background-color: rgba(0, 0, 0, 0.12);
  box-shadow: rgba(0, 0, 0, 0.2) 0 0 0 0, rgba(0, 0, 0, 0.14) 0 0 0 0,
    rgba(0, 0, 0, 0.12) 0 0 0 0;
  color: rgba(0, 0, 0, 0.37);
  cursor: default;
  pointer-events: none;
}

.button-61:not(:disabled) {
  background-color: #2dce89;
}

.button-61:focus {
  box-shadow: rgba(0, 0, 0, 0.2) 0 2px 4px -1px, rgba(0, 0, 0, 0.14) 0 4px 5px 0,
    rgba(0, 0, 0, 0.12) 0 1px 10px 0;
}

.button-61:active {
  box-shadow: rgba(0, 0, 0, 0.2) 0 5px 5px -3px,
    rgba(0, 0, 0, 0.14) 0 8px 10px 1px, rgba(0, 0, 0, 0.12) 0 3px 14px 2px;
  background: #29b97b;
}



/* CSS */
.button-81 {
  background-color: #ffffff;
  border: 0 solid #e2e8f0;
   border-radius: 0.375rem;
  box-sizing: border-box;
  color: #2dce89;
  cursor: pointer;
  display: inline-block;
  width:80px;

  font-size: 0.875rem;

  line-height: 0.25;
  padding: 0.9rem 0.1rem;
  text-align: center;
  text-decoration: none #0d172a solid;
  
  transition: all .1s cubic-bezier(.4, 0, .2, 1);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-81:hover {
  background-color: #f5365c;
  color: #ffffff;
}
.container {
	text-align: center;
	font-size: 20pt;
	font-family: 'arial';
	margin-top: 200px;
}


.nav {
    /* position: relative; */
    position: fixed !important;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0.2rem 0rem;
    width: 100%;
    
    z-index: 9999;
 
}
.nav-link {
    display: block;
    padding: 0.5rem 0.5rem !important;
}
p {
    margin-top: 0rem !important;
    margin-bottom: 0rem !important;
}



</style>