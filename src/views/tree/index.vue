<template>
  <div class="myFiles">
    <!-- <el-input v-model="filterText" placeholder="Filter keyword" style="margin-bottom:30px;" />
    <el-tree
      ref="tree2"
      :data="data2"
      :props="defaultProps"
      :filter-node-method="filterNode"
      class="filter-tree"
      default-expand-all
    /> -->
    
    <el-card>
      <el-tabs type="border-card" v-model="activeName">
      <el-tab-pane label="我发起的" name="first">
       <myCreate></myCreate>
      </el-tab-pane>
      <el-tab-pane label="我参与的" name="second">
        <myJoin></myJoin>
      </el-tab-pane>
    </el-tabs>       
    </el-card>
  </div>
</template>

<script>
import myCreate from "./components/myCreate"
import myJoin from "./components/myJoin"
export default {
  components:{
    myCreate,
    myJoin
  },
  data() {
    return {
      //默认的树
      //filterText: '',
      // data2: [{
      //   id: 1,
      //   label: 'Level one 1',
      //   children: [{
      //     id: 4,
      //     label: 'Level two 1-1',
      //     children: [{
      //       id: 9,
      //       label: 'Level three 1-1-1'
      //     }, {
      //       id: 10,
      //       label: 'Level three 1-1-2'
      //     }]
      //   }]
      // }, {
      //   id: 2,
      //   label: 'Level one 2',
      //   children: [{
      //     id: 5,
      //     label: 'Level two 2-1'
      //   }, {
      //     id: 6,
      //     label: 'Level two 2-2'
      //   }]
      // }, {
      //   id: 3,
      //   label: 'Level one 3',
      //   children: [{
      //     id: 7,
      //     label: 'Level two 3-1'
      //   }, {
      //     id: 8,
      //     label: 'Level two 3-2'
      //   }]
      // }],
      // defaultProps: {
      //   children: 'children',
      //   label: 'label'
      // }
      activeName:'first'
    }
  },
  watch: {
    //默认的树
    // filterText(val) {
    //   this.$refs.tree2.filter(val)
    // }
  },

  methods: {
    //默认的树
    // filterNode(value, data) {
    //   if (!value) return true
    //   return data.label.indexOf(value) !== -1
    // }
  }
}
</script>
<style lang="scss" scope>
.myFiles{
  margin:30px;
  .fr{
    float:right;
  }
}
</style>
