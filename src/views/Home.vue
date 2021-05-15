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
      <div style="margin-top: 60px">
        <b-row>
          <b-col xl="3" lg="3" sm="12">
            <img alt="Vue logo" src="../assets/logo.png" />
          </b-col>
          <b-col xl="3" lg="3" sm="12">
            <img alt="Vue logo" src="../assets/logo.png" />
          </b-col>
          <b-col xl="3" lg="3" sm="12">
            <img alt="Vue logo" src="../assets/logo.png" />
          </b-col>
          <b-col xl="3" lg="3" sm="12">
            <img alt="Vue logo" src="../assets/logo.png" />
          </b-col>
        </b-row>
      </div>
      <div class="container">
        <div>
          <b-row>
            <b-cor xl="6" lg="6" sm="12" style="margin: 10px">
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
            </b-cor>
            <b-cor xl="6" lg="6" sm="12" style="margin: 10px">
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
            </b-cor>
          </b-row>
          <b-row>
            <b-cor xl="6" lg="6" sm="12" style="margin: 10px">
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
            </b-cor>
            <b-cor xl="6" lg="6" sm="12" style="margin: 10px">
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
            </b-cor>
          </b-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>
