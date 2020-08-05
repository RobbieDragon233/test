<template>
  <el-button type="text" @click="open">确认</el-button>
</template>

<script>
    import bus from '../utils/eventBus'

  export default {
    name:"confirmButton",
    data() {
        return {
            tile:{}
        }
    },
    mounted() {
        bus.$on('', (tile) => {
            this.tile=tile;
        })
    },
    methods: {
      open() {
        this.$alert('确定在' + this.tile.row
        + '行' + this.tile.column + '列添加吗？', '添加agent吗', {
          confirmButtonText: '确定',
          callback: action => {
            this.addAgent()
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      },
      addAgent(){
          console.log("this is add agent! and x=" 
          + this.tile.row + " y=" + this.tile.column + "!");
        

          let url='/agent/x=3&y=4'
          let data={"type":1}
          this.$post(url,data, "post").then(res => {
           console.log(res);
        }).catch(err => {
          console.log(err);
        })
      }
    }
  }
</script>