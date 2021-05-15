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
      <div style="margin-top: 40px;margin-bottom: 40px">
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
              title="Card Title"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
          <b-col cols="6" lg="4">
            <b-card
              title="Card Title"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
          <b-col cols="6" lg="4">
            <b-card
              title="Card Title"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
</script>
