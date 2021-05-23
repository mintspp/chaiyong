<template>
  <div style="background-color: #001B48;">
    <div align="left" style="margin-top: 50px; margin: 30px;">
      <b-button variant="danger" @click="goHome">ย้อนกลับ</b-button>
    </div>
    <div>
      <b-card no-body class="text-center" style="margin: 30px;">
        <div class="bg-light text-dark">
          This is some content without the default
          <samp>&lt;b-card-body&gt;</samp> section. Notice the lack of padding
          between the card's border and this gray <samp>&lt;div&gt;</samp>.
        </div>
      </b-card>
    </div>
  </div>
</template>