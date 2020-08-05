<template>
  <div class="hexagon">
    <div class="bar-rotate-right">
      <div class="bar-rotate-left">
        <div class="bar-horizontal">
          <img :src="src" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Hexagon",
    props: {
      src: String
    },
    methods: {

    }
  }
</script>

<style scoped>
  .hexagon {
    display: inline-block;
    margin: 0 3px;
  }

  .hexagon .bar-rotate-left {
    width: 200px;
    height: 231px;
    overflow: hidden;
    transform: rotate(60deg);
    display: inline-block;
  }

  .hexagon .bar-rotate-right {
    width: 200px;
    height: 231px;
    overflow: hidden;
    transform: rotate(60deg);
    display: inline-block;
  }

  .hexagon .bar-horizontal {
    width: 200px;
    height: 232px;
    background: #FFFFFF;
    transform: rotate(-120deg);
    display: inline-block;
  }

  .hexagon .bar-horizontal:hover {
    background: #F0F0F0;
  }
</style>