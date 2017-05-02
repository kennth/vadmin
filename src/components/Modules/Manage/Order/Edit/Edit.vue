<template>
<div class="form">
  <el-form label-width="100px" style="margin:20px;width:90%;min-width:600px;" :model="data" :rules="form_rules" ref='refForm'>
    <el-form-item class='edit-form' label="发货公司" prop='fhunit'>
      <el-input v-model="data.fhunit" placeholder="发货公司" size=20></el-input>
    </el-form-item>
    <el-form-item class='edit-form' label="发货人" prop='fhname'>
      <el-input v-model="data.fhname" placeholder="发货人" size=20></el-input>
    </el-form-item>
    <el-col :span="8">
      <el-form-item class='edit-form' label="联系电话" prop='fhunitphone'>
        <el-input v-model="data.fhunitphone" placeholder="联系电话" size=20></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="24">
      <el-form-item label="发货地址" prop='fhaddress'>
        <el-input v-model="data.fhaddress" placeholder="发货地址" size=20></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="10">
      <el-form-item label="收货公司" prop='shunit'>
        <el-input v-model="data.shunit" placeholder="收货公司" size=20></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="6">
      <el-form-item label="收货人" prop='fhname'>
        <el-input v-model="data.shname" placeholder="收货人" size=20></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="8">
      <el-form-item label="联系电话" prop='shunitphone'>
        <el-input v-model="data.shunitphone" placeholder="联系电话" size=20></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="24">
      <el-form-item label="收货地址" prop='shaddress'>
        <el-input v-model="data.shaddress" placeholder="收货地址" size=20></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="6">
      <el-form-item label="货物单号" prop='orderid'>
        <el-input v-model="data.orderid" placeholder="货物单号" size=20></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="6">
      <el-form-item label="订单日期" prop='ordertime'>
        <el-date-picker v-model="data.ordertime" type="datetime" placeholder="选择日期时间"></el-date-picker>
      </el-form-item>
    </el-col>
    <el-col :span="6">
      <el-form-item label="提货日期" prop='ordertime'>
        <el-date-picker v-model="data.ordertime" type="datetime" placeholder="选择日期时间"></el-date-picker>
      </el-form-item>
    </el-col>
    <el-col :span="6">
      <el-form-item label="送货日期" prop='ordertime'>
        <el-date-picker v-model="data.ordertime" type="datetime" placeholder="选择日期时间"></el-date-picker>
      </el-form-item>
    </el-col>
    <el-col :span="6">
      <el-form-item label="配送方式" prop='status'>
        <el-select v-model="data.status" placeholder="请选择配送方式">
          <el-option value='1' label="自提"></el-option>
          <el-option value='2' label="送货上门"></el-option>
          <el-option value='3' label="送货上楼"></el-option>
          <el-option value='4' label="送货"></el-option>
          <el-option value='5' label="中转自提"></el-option>
          <el-option value='6' label="中转送货"></el-option>
          <el-option value='7' label="大车直送"></el-option>
        </el-select>
      </el-form-item>
    </el-col>
    <el-col :span="6">
      <el-form-item label="SCT编号" prop='orderid'>
        <el-input v-model="data.orderid" placeholder="SCT编号" size=20></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="6">
      <el-form-item label="回单数量" prop='orderid'>
        <el-input v-model="data.orderid" placeholder="回单数量" size=20></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="6">
      <el-form-item label="回单期限" prop='ordertime'>
        <el-date-picker v-model="data.ordertime" type="datetime" placeholder="选择日期时间"></el-date-picker>
      </el-form-item>
    </el-col>
    <el-col :span="6">
      <el-form-item label="是否加急" prop='deliverymode'>
        <el-checkbox v-model='data.deliverymode'></el-checkbox>
      </el-form-item>
    </el-col>
    <el-col :span="6">
      <el-form-item label="车型" prop='ordertime'>
      </el-form-item>
    </el-col>
    <el-form-item label="订单状态" prop='status'>
      <el-select v-model="data.status" placeholder="请选择订单状态">
        <el-option value='1' label="待支付"></el-option>
        <el-option value='2' label="待配送"></el-option>
        <el-option value='3' label="待收货"></el-option>
        <el-option value='4' label="已完成"></el-option>
        <el-option value='5' label="已取消"></el-option>
        <el-option value='6' label="退单"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click='onSubmit("refForm")'>立即{{data.id ? '修改' : '添加'}}</el-button>
      <el-button @click='reset_form("data")'>重置</el-button>
    </el-form-item>
  </el-form>
</div>
</template>
<script>
  import EditJs from './Edit.js';
  module.exports = EditJs;
</script>
<style scoped>

</style>
