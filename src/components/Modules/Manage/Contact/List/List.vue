<template>
<div class="list">
  <el-col :span="24" class='actions-top'>
    <el-button type='danger' icon='delete' :disabled='batch_flag' @click='onDelete(true)'>删除选中</el-button>
    <el-form :inline="true" :model='search_data' class="demo-form-inline">
      <el-form-item>
        <el-input placeholder="公司名称" v-model='search_data.company' clear></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="联系电话" v-model='search_data.phone'></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="default" @click='onSearch'>查询</el-button>
      </el-form-item>
    </el-form>
  </el-col>
  <el-table border style="width: 100%" align='center' :data="list" @selection-change='onSelectionChange'>
    <el-table-column type="selection" width="55"></el-table-column>
    <el-table-column prop="company" label="公司名称" align="center" width="150" :sortable="true"></el-table-column>
    <el-table-column prop="contact" label="联系人" align="center" width="100" :sortable="true"></el-table-column>
    <el-table-column prop="phone" label="联系电话" align="center" width="120" :sortable="true"></el-table-column>
    <el-table-column prop="fhdz" label="发货地址" align="left" :sortable="true"></el-table-column>
    <el-table-column prop="htzq" label="合同账期" align="center" width="120" :sortable="true"></el-table-column>
    <el-table-column prop="rate" label="信誉等级" align="center" width="120" :sortable="true">
      <template scope='scope'>
        <el-rate v-model="scope.row.rate" disabled></el-rate>
      </template>
    </el-table-column>
    <el-table-column label="操作" :width="136" :context="_self">
      <template scope='scope'>
        <el-button type="info" icon='view' size="mini" @click='onSelect(scope.row)'></el-button>
        <el-button type="info" icon='edit' size="mini" @click='onEdit(scope.row)'></el-button>
        <el-button type="danger" icon='delete' size="mini" @click='onDelete(scope.row,scope.$index,list)'></el-button>
      </template>
    </el-table-column>
</el-table>
<el-dialog title="INFO" v-model="dialog.show" size="tiny">
    <el-form style="margin:20px;width:60%;min-width:100%"
        label-width="100px"
        :model="dialog.info">
        <el-form-item class='edit-form'
            label="公司名称"
            prop='company'>
            {{dialog.info.company}}
        </el-form-item>
        <el-form-item class='edit-form'
            label="联系人"
            prop='contact'>
            {{dialog.info.contact}}
        </el-form-item>
        <el-form-item class='edit-form'
            label="电话"
            prop='phone'>
            {{dialog.info.phone}}
        </el-form-item>
        <el-form-item class='edit-form'
            label="发货地址"
            prop='phone'>
            {{dialog.info.fhdz}}
        </el-form-item><el-form-item class='edit-form'
            label="合同账期"
            prop='phone'>
            {{dialog.info.htzq}}
        </el-form-item><el-form-item class='edit-form'
            label="信誉等级"
            prop='rate'>
            {{dialog.info.rate}}
        </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
        <el-button @click="dialog.show = false">取 消</el-button>
        <el-button type="primary" @click="dialog.show = false;this.$route.push('/demo/user/list')">开 单</el-button>
        <el-button type="primary" @click="dialog.show = false">确 定</el-button>
    </span>
</el-dialog>
    </div>
</template>

<script>
import ListJs from './List.js';
module.exports = ListJs;
</script>
<style scoped lang='less'>
.demo-form-inline {
    display: inline-block;
    float: right;
}
.btm-action {
    margin-top: 20px;
    text-align: center;
}
.actions-top {
    height: 46px;
}
.pagination {
    display: inline-block;
}
</style>
