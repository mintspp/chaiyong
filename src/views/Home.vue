<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="danger">
        <b-navbar-brand href="#">ชัยยงค์การช่าง</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
            <div style="font-size: 2rem">
              <b-icon icon="basket2-fill" variant="light"></b-icon>
            </div>

            <div style="font-size: 2rem">
              <b-icon icon="bell-fill" variant="light"></b-icon>
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

    <div class="container">
      <div style="margin-top: 40px; margin-bottom: 40px">
        <b-row>
          <b-col cols="6" lg="3">
            <img alt="Vue logo" width="170px" src="../assets/logo.png" />
          </b-col>
          <b-col cols="6" lg="3">
            <img alt="Vue logo" width="170px" src="../assets/logo.png" />
          </b-col>
          <b-col cols="6" lg="3">
            <img alt="Vue logo" width="170px" src="../assets/logo.png" />
          </b-col>
          <b-col cols="6" lg="3">
            <img alt="Vue logo" width="170px" src="../assets/logo.png" />
          </b-col>
        </b-row>
      </div>
      <div>
        <b-row>
          <b-col cols="6" lg="4">
            <b-card
              img-src="https://firebasestorage.googleapis.com/v0/b/chaiyongimg.appspot.com/o/1.png?alt=media&token=e0d3062d-2311-46f8-9ab6-90130e24d351"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem"
              class="mb-2"
            >
            <div align="left" >
                <div class="fonts"><b>กรรไกรตัดผม</b></div>

                <b-row>
                  <b-col cols="6"
                    ><div align="left">
                      <h6>฿100</h6>
                    </div>
                  </b-col>
                  <b-col cols="6">
                    <div align="right">
                      <b-icon
                        icon="cart4"
                        style="width: 20px; height: 20px"
                        variant="success"
                      ></b-icon>
                    </div>
                  </b-col>
                </b-row>
              </div>
            </b-card>
          </b-col>
          <b-col cols="6" lg="4">
            <b-card
              img-src="https://firebasestorage.googleapis.com/v0/b/chaiyongimg.appspot.com/o/2.png?alt=media&token=f40ffb34-af16-4a16-81d9-780268ccaa76"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem"
              class="mb-2"
            >
              <div align="left" >
                <div class="fonts"><b>ชุดกรรไกรตัดผม</b></div>

                <b-row>
                  <b-col cols="6"
                    ><div align="left">
                      <h6>฿100</h6>
                    </div>
                  </b-col>
                  <b-col cols="6">
                    <div align="right">
                      <b-icon
                        icon="cart4"
                        style="width: 20px; height: 20px"
                        variant="success"
                      ></b-icon>
                    </div>
                  </b-col>
                </b-row>
              </div>
            </b-card>
          </b-col>
          <b-col cols="6" lg="4">
            <b-card
              img-src="https://firebasestorage.googleapis.com/v0/b/chaiyongimg.appspot.com/o/3.png?alt=media&token=eb90bddf-c4dc-4ecf-887e-c27b720a5b62"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem"
              class="mb-2"
            >
              <div align="left" >
                <div class="fonts"><b>ไดร์เป่าผม</b></div>

                <b-row>
                  <b-col cols="6"
                    ><div align="left">
                      <h6>฿100</h6>
                    </div>
                  </b-col>
                  <b-col cols="6">
                    <div align="right">
                      <b-icon
                        icon="cart4"
                        style="width: 20px; height: 20px"
                        variant="success"
                      ></b-icon>
                    </div>
                  </b-col>
                </b-row>
              </div>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
</style>
