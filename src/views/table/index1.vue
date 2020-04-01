<template>
  <div class="meeting">
    <el-card>
      <div class="header"><h2>创建会议</h2></div>
      <el-form ref="form" :model="form" label-width="auto">
        <el-form-item label="会议主题：">
          <el-input v-model="form.name" placeholder="请输入会议主题" />
        </el-form-item>
        <el-form-item label="会议时间：">
          <el-col :span="11">
            <el-date-picker v-model="form.date1" type="date" placeholder="选择日期" style="width: 100%;" />
          </el-col>
          <el-col :span="2" class="line">-</el-col>
          <el-col :span="11">
            <el-time-picker v-model="form.date2" type="fixed-time" placeholder="选择时间" style="width: 100%;" />
          </el-col>
        </el-form-item> 
        <el-form-item label="是否全员参与：">
          <el-switch v-model="form.delivery" />
        </el-form-item>
        <el-form-item label="参与人员：">
          <el-select v-model="form.region" placeholder="请选择参会人员" style="width:100%">
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>               
        <el-form-item label="会议类型：">
          <el-radio-group v-model="form.type">
            <el-radio :label="3">在线会议</el-radio>
            <el-radio :label="6">办公室会议</el-radio>
            <el-radio :label="9">紧急会议</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="会议主持人：">
          <el-input v-model="form.resource" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="发起会议理由：">
          <el-input v-model="form.desc" type="textarea" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">创建</el-button>
          <el-button @click="onCancel">取消</el-button>
        </el-form-item>
      </el-form>      
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: 3,
        resource: '',
        desc: ''
      },

    }
  },
  methods: {
    onSubmit() {
        location.replace("C://Users//春哥//Desktop//问题.txt")
      this.$message('submit!')
    },
    onCancel() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.meeting{
  margin: 30px;
  .line{
    text-align: center;
  }
  .header{
    text-align: center;
  }
}

</style>

