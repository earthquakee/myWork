<template>
  <div class="login">
    <div class="login-form">
      <div class="login_name" style="text-align: center;font-size: 1.5rem;margin-top: 1.5rem;padding-bottom:1.5rem ; color: #FFFFFF;border-bottom: 1px solid #ddd;">用户注册</div>

      <div class="login-form-user">
          <el-form ref="form" :model="form" :rules="rules">
            <el-form-item prop="email">
              <el-input v-model="form.email" placeholder="请输入邮箱">
                <el-button slot="prepend" icon="el-icon-message" ></el-button>
              </el-input>
            </el-form-item>
            <el-form-item prop="username">
              <el-input v-model="form.username" placeholder="请输入用户名">
                <el-button slot="prepend" icon="el-icon-user"></el-button>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" v-model="form.pass" placeholder="请输入密码">
                <el-button slot="prepend" icon="el-icon-lock"></el-button>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button style="width: 185px;" type="primary" @click="tologin">返回登录</el-button>
              <el-button style="width: 185px;" type="success" @click="onSubmit('form')">提交</el-button>
            </el-form-item>
            <p style="color: #FFFFFF; text-align: center;">注册遇到问题<i class="el-icon-warning-outline"></i></p>
          </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        username: "",
        pass: "",
      },
      rules: {
        username: [{
          required: true,
          message: '请输入用户名',
          trigger: 'blur'
        }],
        pass: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }],
        email: [{
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
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message.success("注册成功");
        } else {
          this.$message.error('不能有空');
          return false;
        }
      });
    },
    tologin() {
      this.$router.push('/login');
    }
  },
}
</script>

<style scoped>
  .login {
    height: calc(100vh);
		display: flex;
		justify-content: center;
		align-items: center;
		background-image: url('../../../assets/img/banner.jpg');
		background-size: 100% 100%;
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
	margin-top: 2rem;
  }
</style>