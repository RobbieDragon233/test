<template>
    <div>
        <canvas id="hex-canvas" width="2200" height="2200" @click='click'></canvas>
    </div>
    
</template>

<script>
import HexagonGrid from "../utils/hexagon"
import {test} from "../utils/testCode"
import bus from '../utils/eventBus'
import agentBus from '../utils/eventBus'

export default {
    name: "Map" ,
    data() {
        return {
            x: String,
            y: String
        }
    },
    mounted() {
        let hexagonGrid = new HexagonGrid('hex-canvas', 25, (tile) => {
            this.x = tile.row;
            this.y = tile.column;
            bus.$emit('', tile)

        });
        hexagonGrid.drawHexGrid(50, 50, 0, 0, true);
        hexagonGrid.drawHexAtColRow(1,12,"#3771bb");

        agentBus.$on('', (res) => {
            this.hexagonGrid.testIcon(res.row,res.column,res.type)
        })

        new test(hexagonGrid);
    },
    methods: {
        click(){
            
        }
    }
}
</script>

<style scoped>
    #hex-canvas {
        overflow: scroll;
    }
</style>>
