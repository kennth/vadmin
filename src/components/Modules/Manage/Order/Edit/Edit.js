import {
  gbs
} from 'config/settings.js';

import {
  order
} from 'config/request.js';


module.exports = {
  name: 'orderinfo',
  data() {
    return {
      data: {
        fhunit: '',
        fhunitphone: '',
        fhname: '',
        fhphone: '',
        fhaddress: '',
        shunit: '',
        shunitphone: '',
        shname: '',
        shphone: '',
        shaddress: '',
        carriage: '0',
        paymentmode: '3',
        xianfu: '0',
        daofu: '0',
        qianfu: '0',
        huifu: '0',
        yuejie: '0',
        huikou: '0',
        hkpaymentmode: '1',
        deliverymode:'0',
        memo: '',
        status: '1'
      },
      form_rules: {
        fhunit: [{
          required: true,
          message: '123',
          trigger: 'change'
        }],
        deliverymode: [{
          required: true,
          message: '',
          trigger: 'change'
        }],
        status: [{
          required: true,
          message: '',
          trigger: 'change'
        }]
      }
    }
  },
  methods: {
    /**
     * 提交表单
     * @param  {string} formName 表单名称
     */
    onSubmit(formName) {
      var ref = this.$refs[formName];
      ref.validate((valid) => {
        if (valid) {
          console.log(this.form_data);
          order.saveOrder.call(this, this.form_data, (data) => {
            console.log(data);
          });
        }
      });
    },
    reset_form(form) {
      this.$refs[form].resetFields();
    },
  },
  created() {},
  mounted() {

  }
}
