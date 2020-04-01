<template>
    <div class="myJoin">
 <el-button type="primary" size="medium" class="fr" @click="handleNew">新建会议</el-button>
        <div class="search fr">
        <el-input
          placeholder="请输入主题搜索"
          prefix-icon="el-icon-search"
          style="width:200px;margin-bottom:30px;margin-right:10px;"
          size="medium"
          v-model="searchValue">
        </el-input>
      </div> 
      <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="序号" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="会议主题">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="发起人" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.username }}</span>
        </template>
      </el-table-column>
      <el-table-column label="发起时间" width="110" align="center" sortable>
        <template slot-scope="scope">
          {{ scope.row.importTime }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="状态" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="操作" width="200">
        <template slot-scope="scope">
          <el-button type="text" @click="handleDetail">查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    </div>
    </template>
    <script>
export default {
    name:"myCreate",
  data() {
    return {
        list: [{
        title:'这是一首简单地歌',
        username:'老刘刘',
        importTime:'2020-12-45',
        status:'success',
        leixing:'mp3'        
      },{
        title:'这是一首简单地歌',
        username:'老刘刘',
        importTime:'2020-12-45',
        status:'未开始',
        leixing:'mp3' 
      },{
        title:'这是一首简单地歌',
        username:'老刘刘',
        importTime:'2020-12-45',
        status:'已结束',
        leixing:'mp3' 
      }],
      listLoading: false,
      searchValue:'',      
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: '已结束',
        deleted: '未开始'
      }
      return statusMap[status]
    }
  },
  methods:{
      handelshenpi(){
      
    },
    handleNew(){
        this.$router.push({path:'allFiles'})
    },
    handleDetail(){
      this.$router.push({name:'meetingDetails'})
    }
  }
}
</script>
<style lang="scss" scope>
.myJoin{
  margin:30px;
  .fr{
    float:right;
  }
}
</style>
