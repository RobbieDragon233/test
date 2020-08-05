<template>
    <div>
        <div id= 'info_h2'>基本信息：</div>
        <div id= 'info_h3'>兵种：{{agentType}}</div>
        <div id= 'info_h3'>地形：{{areaType}}</div>
        <div id= 'info_h3'>精度：{{latitude}};维度：{{longitude}}</div>
        <div id= 'info_h2'>区域信息：</div>
        <div id= 'info_h3'>周围50圆域自己人：{{dist_50}}</div>
        <div id= 'info_h3'>周围100圆域自己人：{{dist_100}}</div>
        <div id= 'info_h3'>周围坦克数量：{{num_tank}}</div>
        <div id= 'info_h3'>周围指挥官数量：{{num_commander}}</div>
        <div></div>
        <div id= 'info_h3'>标签：{{label}}</div>
    </div> 
</template>

<script>
import bus from '../utils/eventBus'

export default {
    name: "Information",

    data(){
        return {agentType: Number,
            areaType: Number,
            latitude: Number,
            longitude: Number,
            dist_50: Number,
            dist_100: Number,
            num_tank: Number,
            num_commander: Number,
            label: Number,

            tile: {}
        }
    },

    mounted() {
        bus.$on('', (tile) => {
            this.loadTest(tile)
        })
    },

    created() {
        //this.loadTest();
    },

    methods: {
        loadTest(tile) {
        this.tile = tile;
        let url="/x="+this.tile.row+"&y="+this.tile.column;
        this.$post(url,"", "get").then(res => {
            this.agentType=res.type;
            this.areaType=res.opography;
            this.latitude=res.latitude;
            this.longitude=res.longitude;
            this.dist_50=res.dist_50;
            this.dist_100=res.dist_100;
            this.num_tank=res.num_tank;
            this.num_commander=res.num_commander;
            this.label=res.label;
        //   console.log(res);
        }).catch(err => {
          console.log(err);
        })
      }
    }
}

</script>

<style scoped>
#info_h2 {
    font-size: 50px;
    text-align: center;
    height: 80px;
}
#info_h3 {
    font-size: 25px;
    text-align: left;
    height: 30px;
    line-height: 30px;
}
</style>