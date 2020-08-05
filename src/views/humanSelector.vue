<template>
<div>
    <el-select v-model="value" placeholder="请选择">
        <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
        </el-option>
    </el-select>
    <confirmButton/>
</div>
</template>

<script>
    import confirmButton from './confirm'
    

  export default {
    name:"humanSelector",
    components:{
        confirmButton
    },
    data() {
      return {
        options: [{
          value: '选项1',
          label: '单兵'
        }, {
          value: '选项2',
          label: '战车'
        }, {
          value: '选项3',
          label: '坦克'
        }, {
          value: '选项4',
          label: '指挥官'
        }],
        value: ''
      }
    },
    
    
  }
</script>
