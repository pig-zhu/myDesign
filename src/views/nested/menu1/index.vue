<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="个人信息" style="width:100%">
      <router-view />
    </el-alert>
  </div>
</template>
<style>
.el-alert__content{
  width:100%
}
</style>