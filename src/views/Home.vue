<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <div>agent选择：</div>
        <humanSelector/>
      </el-aside>
      <el-container>
        <el-header class="home-header">agent展示界面</el-header>
        <el-main class="home-main">
          <Map />
        </el-main>
        <el-footer class="home-footer">
          <Information />
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import Map from "./Map"
  import Information from './Information'
  import humanSelector from './humanSelector'

  export default {
    name: 'Home',
    components: {
      Map,Information,humanSelector
    },
    data() {
      return {

      }
    },
    computed: {
      windowWidth() {
        return window.screen.width - 200
      },
      windowHeight() {
        return window.screen.height - 120
      }
    },
    
    mounted() {
    },
    methods: {

    }
  }
</script>
<style scoped>
  /*#hex-canvas {*/
  /*width: 3000px;*/
  /*height: 100%;*/
  /*}*/
  .home-footer {
    height: 500px !important;
  }
  .home-main {
    overflow: scroll;
  }
</style>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    width: 1920px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 40px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    height: 500px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }


  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
