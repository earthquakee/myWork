<template>
  <div class="wrapper">
    <el-steps :active="active" finish-status="success" style="margin:2rem">
      <el-step title="填写信息"></el-step>
      <el-step title="在线支付"></el-step>
      <el-step title="入园无忧"></el-step>
    </el-steps>
    <div style="display:flex">
      <div class="order">
        <div class="ordertitle">
          <div style="font-size:1.5rem">{{this.data[0].name}} > {{this.$store.state.ticket.name}}</div>
          <div><strong>¥<b style="font-size: 1.5rem;color: #FF0000;">{{this.$store.state.ticket.price}}</b></strong>/张</div>
        </div>
        <div style="margin:2rem">游玩日期：
          <el-date-picker v-model="value" type="date" align="right" placeholder="选择日期" :picker-options="pickerOptions" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd"></el-date-picker>
        </div>
        <div style="margin:2rem">购买张数：
          <el-input-number :disabled="this.order" v-model="num" @change="inputChange" :min="1" :max="10" label="描述文字"></el-input-number>
        </div>
        <div class="tourist_info">
          <span style="font-size: 1.5rem;margin-right: 50px;">游客信息</span><span>请填写任意1位游客信息</span>
        </div>
        <div class="tourist_detail">
          <el-form ref="formLabelAlign" :model="formLabelAlign" :rules="rules" label-width="80px" style="width:50%;margin-top:2rem">
            <el-form-item label="姓名" prop="name">
                <el-input :disabled="this.order" v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="phone">
                <el-input :disabled="this.order" v-model="formLabelAlign.phone"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div style="padding: 2rem;text-align: center;">
          <el-button type="primary" v-if="this.orderstate==0" @click="uporder('formLabelAlign')">提交订单</el-button>
          <el-button type="warning" v-if="this.orderstate ==1" @click="dialogVisible = true">支付订单</el-button>
        </div>
        <el-dialog
          title="支付"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="dialogBeforeClose">
          <div style="text-align:center">
            <img src="../../../assets/img/d5c9cb55d0660d0cdc9af215c7e480a.jpg" style="width: 60%;">
          </div>
          <span slot="footer">
            <el-button @click="resetForm">取消</el-button>
            <el-button @click="submitForm" type="primary">确定</el-button>
          </span>
        </el-dialog>
      </div>
      <div class="notice">
        <div class="orderAdvice">购票须知</div>
        <div style="margin-left: 1.5em;">
          <strong>退款限制</strong>
          <p>90天内支持随时退款，经核实如未取票，可免费取消,多张票的订单，不支持部分退款</p>
          <p><strong>入园信息</strong></p>
          <p><span style="color:red">景点名称：</span>{{this.data[0].name}}</p>
          <p><span style="color:red">入园日期：</span>游玩日期当天有效</p>
        </div>
        <div style="border-top:1px solid #E6ECE8 ;text-align: center;">
          <p><strong style="font-size:1.25rem">订单总额：</strong><b style="color: #FF0000;font-size: 1.5rem;">¥{{sum}}</b>({{this.num}}张)</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var checkPhone = (rule,value,callback) =>{
      const phoneRag = /^1[3|4|5|7|8][0-9]{9}$/
      if(!value){
        return callback(new Error('电话号码不能为空'))
      }
      setTimeout(()=>{
        if(!Number.isInterger(+value)){
          callback(new Error('请输入数字值'))
        }else{
          if(phoneRag.test(value)){
            callback()
          }else{
            callback(new Error('电话号码格式不正确'))
          }
        }
      },100)
    }
    return {
      active:0,
      data:[{
				id: 1,
				name: '西湖',
				details: '天下西湖三十六，就中最美是杭州',
				price: 66,
				address: "浙江杭州",
				DetailedAddress: "浙江省杭州市西湖区西湖街道杭州西湖风景名胜区",
				ntroduce: "西湖，位于浙江省杭州市西湖区龙井路1号，杭州市区西部，西湖景区总面积49平方千米，汇水面积为21.22平方千米，湖面面积为6.38平方千米。西湖南、西、北三面环山，湖中白堤、苏堤、杨公堤、赵公堤将湖面分割成若干水面。湖体轮廓呈近椭圆形，湖底部较为平坦，平均水深2.27米，最深约5米，最浅不到1米。西湖天然地表水源是金沙涧、龙泓涧、赤山涧（慧因涧）、长桥溪四条溪流。西湖地处中国东南丘陵边缘和中亚热带北缘，年均太阳总辐射量在100—110千卡/平方厘米之间，日照时数1800—2100小时",
			}],
      value: '',
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 1 * 24 * 60 * 60 * 1000;
        }
      },
      order: false,
      orderstate:0,
      dialogVisible: false,
      num:1,
      formLabelAlign:{
        name:'',
        phone:'',
      },
      rules:{
        name:[{
          required:true,
          message:'请输入活动名称',
          trigger:'blur'
        }],
        phone:[{
          validator:checkPhone,
          trigger:'blur'
        }]
      }
    }
  },
  computed: {
    sum() {
      var sum = 0;
      sum = this.num * this.$store.state.ticket.price;
      return sum;
    },
  },
  methods: {
    inputChange(value){
      if(value>9){
        this.$message({
          message:'最多购买10张',
          type:'warning'
        })
      }
    },
    uporder(formName){
      this.$ref[formName].validate((valid)=>{
        if(valid){
          if(this.value ==''){
            this.$message({
              message:'日期不能为空',
              type:'error'
            })
          }else{
            this.dialogVisible = true;
            this.orderstate = 1;
            this.active++;
            this.order = true;
          }
        }else{
          return false
        }
      })
    },
    dialogBeforeClose(done){
      this.$confirm('确认关闭支付？')
        .then(()=>{
          done();
          this.$message({
            message:'支付取消',
            type:'warning'
          })
        })
        .catch(()=>{})
    },
    resetForm(){
      this.dialogVisible = false;
      this.$message({
        message:'支付取消',
        type:'warning'
      })
    },
    submitForm(){
      this.dialogVisible = false;
      this.$message({
        message: '支付成功',
        type: 'success'
      });
      this.active++;
      this.orderstate = 2;
    }
  },
}
</script>

<style>
  .wrapper {
    width: 1143px;
	}
  .order {
		margin-top: 2rem;
		width: 800px;
		border: 1px solid #E6ECE8;
		border-top: 5px solid steelblue;
		padding: 1rem;
	}

  .ordertitle{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #E6ECE8;
    padding-bottom: 1rem;
  }

  .tourist_info{
    padding-bottom: 1rem;
    border-bottom: 1px solid #E6ECE8;
  }

  .tourist_detail{
    padding-bottom: 1rem;
    border-bottom: 1px solid #E6ECE8;
  }

  .notice{
    border: 1px solid #E6ECE8;
    margin: 2rem;
    width: 300px;
    height: 100%;
  }

  .orderAdvice{
    padding: 1rem;
    font-size: 1.25rem;
    color: red;
  }
</style>