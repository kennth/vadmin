module.exports = {
  name: 'list',
  data() {
    return {
      list: [], //用户列表数组

      batch_id: '', //批量删除时这是多个用逗号隔开的id字符串
      batch_flag: true, //符合批量删除为true,否则为false

      //搜索表单信息
      search_data: {
        company: '',
        phone: '',
      },

      //详情弹框信息
      dialog: {
        show: false,
        info: {}
      }
    }
  },
  methods: {
    /**
     * 点击搜索按钮事件
     */
    onSearch() {
      // console.log(this.search_data);

      var sd = {};

      var query = this.$route.query;
      for (var p in query) {
        sd[p] = query[p];
      }

      for (var s in this.search_data) {
        sd[s] = this.search_data[s];

        if (!sd[s]) {
          delete sd[s];
        }
      }


      this.$router.push({
        path: this.$route.path,
        query: sd
      });
    },


    /**
     * 表格列表触发CheckBox的事件
     * @param  {array} val 当前选中的用户信息数组，每个元素是用户信息对象
     */
    onSelectionChange(val) {
      // console.log(val);
      if (val.length) {
        this.batch_flag = false;
        var ids = [];
        for (var i = 0; i < val.length; i++) {
          ids.push(val[i].id);
        }
        this.batch_id = ids.join(',');
      } else {
        this.batch_flag = true;
        this.batch_id = '';
      }
    },


    /**
     * 改变页码和当前页时需要拼装的路径方法
     * @param {string} field 参数字段名
     * @param {string} value 参数字段值
     */
    setPath(field, value) {
      var path = this.$route.path,
        query = Object.assign({}, this.$route.query);

      query[field] = value;

      this.$router.push({
        path: path,
        query: query
      });
    },


    /**
     * 改变当前页事件
     * @param  {number} page 当前页码
     */
    onChangeCurrentPage(page) {
      this.setPath('page', page);
    },


    /**
     * 改变每页显示数量事件
     * @param  {number} size 当前每页显示数量
     */
    onChangePageSize(size) {
      this.setPath('page_size', size);
    },


    /**
     * 删除事件
     * @param  {object || boolean} user  当前信息对象或者为布尔值,为布尔值时，代表是批量删除
     * @param  {number} index 当前用户列表索引
     * @param  {array} list  当前用户列表数组
     */
    onDelete(info, index, list) {
      // console.dir(user);
      if (info === true) {
        var id = this.batch_id;
      } else {
        var id = info.id;
      }

      this.$$delete({
        id: id
      }, (data) => {
        if (info === true) {
          this.list = this.list.filter(function(item, idx) {
            return id.indexOf(item.id) === -1;
          });
        } else {
          list.splice(index, 1);
        }
        this.getList();
      });
    },


    /**
     * 修改用户
     * @param  {object} user 当前用户信息对象
     */
    onEdit(info) {
      if (info && info.id) {
        this.$router.push('/Manage/contact/edit?id=' + info.id);
      } else {
        this.$message({
          showClose: true,
          message: 'ID跑哪去了？',
          type: 'error'
        });
      }
    },


    /**
     * 查看用户信息事件
     * @param  {object} info 当前用户信息对象
     */
    onSelect(info) {
      this.dialog.show = true;
      this.dialog.info = info;
    },


    /**
     * 获取用户信息列表方法
     */
    getList() {
      var data = {};

      var query = this.$route.query;
      for (var k in query) {
        if (this.search_data[k] !== undefined) {
          this.search_data[k] = query[k];
          data[k] = query[k];
        }
      }

      this.$$select(data, (data) => {
        this.list = data.list;
      });
    }
  },

  mounted() {
    this.getList();

    //test dialog

    /* setTimeout(() => {
         this.onSelectUser(this.user_list[0]);
     }, 600);*/
  },
  watch: {
    '$route' (to, from) {
      this.getList();
    }
  }
}
