module.exports = {
  name: 'info',
  data() {
    return {
      data: {
        company: '',
        contact: '',
        phone: '',
        fhdz: '',
        htzq: ''
      },
      rules: {
        comapny: [{
          required: true,
          message: '不能为空！',
          trigger: 'blur'
        }],
        contact: [{
          required: true,
          message: '不能为空！',
          trigger: 'blur'
        }],
        phone: [{
          required: true,
          message: '不能为空！',
          trigger: 'change'
        }],
        htzq: [{
          required: true,
          message: '不能为空！',
          trigger: 'change'
        }],
        fhdz: [{
          required: true,
          message: '不能为空！',
          trigger: 'change'
        }]
      }
    }
  },
  methods: {
    save(data) {
      //this.$refs[data].validate((valid) => {
      //if (valid) {
      let cdata = {
        'contact': this[data]
      }
      if (!this[data].id) {
        this.$$save(cdata, data => {
          this.$router.push('/manage/contact/list');
        });
      } else {
        this.$$update(cdata, data => {
          this.$router.push('/manage/contact/list');
        });
      }
      //  }
      //});
    },
    reset(formdata) {
      this.$refs[formdata].resetFields();
    }
  },
  mounted() {
    if (this.$route.query.id) {
      this.$$find(this.$route.query.id, (data) => {
        this.data = data.info;
        this.data.status = this.data.status == 1 ? true : false;

      });
    }
  }
}
