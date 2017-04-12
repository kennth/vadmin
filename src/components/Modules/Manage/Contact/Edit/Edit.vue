<template>
<div class="form">
  <el-form style="margin:20px;width:60%;min-width:600px;" label-width="100px" :model="data" :rules="rules" ref='info'>
    <el-form-item class='edit-form' label="公司名称" prop='company'>
      <el-input v-model="data.company" placeholder='公司名称'></el-input>
    </el-form-item>
    <el-form-item class='edit-form' label="联系人" prop='contact'>
      <el-input v-model="data.contact" placeholder='联系人'></el-input>
    </el-form-item>
    <el-form-item class='edit-form' label="联系电话" prop='phone'>
      <el-input v-model="data.phone" placeholder='联系电话'></el-input>
    </el-form-item>
    <el-form-item class="edit-form" label='合同账期' prop='htzq'>
      <el-input type='textarea' v-model="data.htzq" placeholder='合同账期'></el-input>
    </el-form-item>
    <el-form-item class="edit-form" label='发货地址' prop='fhdz'>
      <el-input type='textarea' v-model="data.fhdz" placeholder=''></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click='save("info")'>{{data.id ? '修改' : '添加'}}</el-button>
      <el-button type="default" @click='reset("info")'>重置</el-button>
    </el-form-item>
  </el-form>
</div>
</template>
<script>
import EditJs from './Edit.js';
module.exports = EditJs;
</script>
<style scoped>
.edit-form {
  width: 500px;
}
</style>
