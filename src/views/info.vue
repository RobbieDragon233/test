<template>
    <div>
        <slot name="title_1"></slot>
        <slot name="info_1"></slot>
        <slot name="info_2"></slot>

        <slot name="title_1" id= 'info_h2'>基本信息：</slot>
        <slot name="info_1" id= 'info_h3'>兵种：{{agentType}}</slot>
        <slot name="info_2" id= 'info_h3'>地形：{{areaType}}</slot>
        <slot name="info_3" id= 'info_h3'>精度：{{latitude}};维度：{{longitude}}</slot>
        <slot name="title_2" id= 'info_h2'>区域信息：</slot>
        <slot name="info_4" id= 'info_h3'>周围50圆域自己人：{{dist_50}}</slot>
        <slot name="info_5" id= 'info_h3'>周围100圆域自己人：{{dist_100}}</slot>
        <slot name="info_6" id= 'info_h3'>周围坦克数量：{{num_tank}}</slot>
        <slot name="info_7" id= 'info_h3'>周围指挥官数量：{{num_commander}}</slot>
        <div></div>
        <div id= 'info_h3'>标签：{{label}}</div>
    </div> 
</template>

<script>
export default {
    
}
</script>>

<style scoped>

</style>