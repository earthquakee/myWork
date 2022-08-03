<template>
  <div class="login">
    <div class="login-form">
      <div class="login_name" style="text-align: center;font-size: 1.5rem;margin-top: 1.5rem;padding-bottom:1.5rem ; color: #FFFFFF;border-bottom: 1px solid #ddd;">旅游购票系统</div>
      <div class="container">
          <span @click="chosen=0" :class="{loginact:chosen==0}">用户名</span>
          <span @click="chosen=1" :class="{loginact:chosen==1}">管理员</span>
      </div>

      <div class="login-form-user">
          <el-form ref="form" :model="form" :rules="rules">
            <el-form-item prop="username" style="margin:10px 0">
              <el-input v-model="form.username" placeholder="请输入账号">
                <el-button slot="prepend" icon="el-icon-user"></el-button>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" v-model="form.pass" placeholder="请输入密码" autocomplete="off">
                <el-button slot="prepend" icon="el-icon-lock"></el-button>
              </el-input>
            </el-form-item>
            <el-form-item style="margin-top:10px">
              <el-button style="width: 185px;" type="primary" @click="onSubmit('form')">登录</el-button>
              <el-button style="width: 185px;" type="success" @click="register">注册</el-button>
            </el-form-item>
            <p style="color: #FFFFFF; text-align: center;">登录遇到问题<i class="el-icon-warning-outline"></i></p>
          </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        chosen:0,
        form: {
					username: "admin@qq.com",
					pass: "123",
					loginTime: "",
				},
        rules: {
					pass: [{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					}],
					username: [{
							required: true,
							message: '请输入邮箱地址',
							trigger: 'blur'
						},
						{
							type: 'email',
							message: '请输入正确的邮箱地址',
							trigger: ['blur', 'change']
						}
					]
				},
      }
    },
    methods: {
      onSubmit(forName){
        this.$refs[forName].validate((valid)=>{
          if(valid){
            this.form.loginTime = new Date();
            this.$store.commit('loginSuccess',this.form);
            if(this.chosen==0){
              this.$router.push('/homepage');
              this.$store.commit('loginIndentity',0);
            }else{
              let params = {
								type:"123",
							};
							this.$api.get("/commodity/all",params).then(res => {
								console.log(res);
							});
							this.$router.push('/admin');
							this.$store.commit("loginIdentity", 1);
            }
            this.$message.success('登陆成功');
          }else{
            this.$message.error('请输入用户名或密码');
            return false
          }
        })
      },
      register(){
        this.$router.push('/register');
      }
    },
}
</script>

<style scoped>

  .loginact {
		color: #409EFF;
	}

  .login {
    height: calc(100vh);
		display: flex;
		justify-content: center;
		align-items: center;
		background-image: url('../../../assets/img/banner.jpg');
		background-size: 100% 100%;
  }

  .container {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 1.5rem;
  }

  .container span {
    font-weight: normal;
		cursor: pointer;
		display: block;
		padding-bottom: 0.5rem;
		border-bottom: 2px solid #409EFF;
  }

  .login-form {
    background: rgba(0, 0, 0, 0.2);
		border-radius: 4px;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);
		width: 400px;
		height: 400px;
  }

  .login-form-user {
    width: 380px;
		margin: 10px;
		margin-top: 1rem;
  }
</style>