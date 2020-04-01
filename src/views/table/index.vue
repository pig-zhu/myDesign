<template>
  <div class="allfiles">
    <el-card>
      <el-button type="primary" size="medium" class="fr">上传文件</el-button>
      <div class="search fr">
        <el-input
          placeholder="请输入主题搜索文件"
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
      <el-table-column label="主题">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="上传者" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.username }}</span>
        </template>
      </el-table-column>
      <el-table-column label="上传时间" width="110" align="center">
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
          <el-button type="danger" size="medium" icon="el-icon-delete" circle></el-button>
          <el-button type="primary" size="medium" icon="el-icon-share" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
    </el-card>
  </div>
</template>

<script>
import { getList } from '@/api/table'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
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
        status:'success',
        leixing:'mp3' 
      },{
        title:'这是一首简单地歌',
        username:'老刘刘',
        importTime:'2020-12-45',
        status:'success',
        leixing:'mp3' 
      }],
      listLoading: false,
      searchValue:''
    }
  },
  created() {
    //this.fetchData()
  },
  methods: {
    // fetchData() {
    //   this.listLoading = true
    //   getList().then(response => {
    //     this.list = response.data.items
    //     this.listLoading = false
    //   })
    // }
  }
}
</script>
<style lang="scss" scope>
.allfiles{
  margin:30px;
  .fr{
    float:right;
  }
}
</style>