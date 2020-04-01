<template>
  <div style="padding:30px;">
    <el-card style="width:50%;margin:0 auto">
      <el-form ref="form" :model="form" label-width="auto" label-position='top'>
        <el-form-item label="姓名：">
          <el-input v-model="form.name" disabled></el-input>
        </el-form-item>
        <el-form-item label="性别：">
          <el-radio-group v-model="form.resource">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="电话：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="所属部门：">
          <el-select v-model="form.region" placeholder="请选择部门" style="width:100%">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
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
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>