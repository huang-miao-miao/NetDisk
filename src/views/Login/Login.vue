<template>
  <div class="login-body">
    <div class="bg"></div>
    <div class="login-panel">
      <el-form 
        class="login-register"
        :model="formData"
        :rules="rules"
        ref="formDataRef"
      >
      <div class="login-title">NetDisk</div>
      <el-form-item prop="email">
          <el-input
            size="large"
            clearable
            placeholder="请输入邮箱"
            v-model="formData.email"
            maxLength="150"
            style="padding-left:10px;border:1px solid #C4E1C5;"
          >
          </el-input>
      </el-form-item>
      <el-form-item prop="password" v-if="opType == 1">
          <el-input
            type="password"
            size="large"
            placeholder="请输入密码"
            v-model="formData.password"
            show-password
            style="padding-left:10px; border:1px solid #C4E1C5;"
          >
          </el-input>
      </el-form-item>
      <el-form-item prop="checkCode">
          <div class="check-code-panel">
            <el-input
              size="large"
              placeholder="请输入验证码"
              v-model="formData.checkCode"
              style="padding-left:10px;border:1px solid #C4E1C5;"
            >
            </el-input>
            <!-- 验证码区域 -->
            <div class="check-code">图片</div>
          </div>
      </el-form-item>
      <el-form-item  v-if="opType == 1">
          <div class="rememberme-panel">
            <el-checkbox v-model="formData.rememberMe">记住我</el-checkbox>
          </div>
          <div class="no-account">
            <a href="javascript:;" class="a-link" 
              >忘记密码？</a
            >
            <a href="javascript:;" class="a-link" 
              >没有账号？</a
            >
          </div>
      </el-form-item>
      <el-form-item v-if="opType == 0">
          <a href="javascript:void(0)" class="a-link" @click="showPanel(1)"
            >已有账号?</a
          >
      </el-form-item>
      <el-form-item v-if="opType == 2">
          <a href="javascript:void(0)" class="a-link" @click="showPanel(1)"
            >去登录?</a
          >
      </el-form-item>
      <el-form-item>
          <el-button
            type="primary"
            class="op-btn"
            size="large"
          >
            <span v-if="opType == 0">注册</span>
            <span v-if="opType == 1">登录</span>
            <span v-if="opType == 2">重置密码</span>
          </el-button>
      </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const opType = ref(1);
const formData = ref({
  email: '',
  password: '',
  emailCode: '',
  nickName: '',
  registerPassword: '',
  checkCode: ''
});
const formDataRef = ref(null);
const rules = {
  email: [
    { required: true, message: "请输入邮箱" }
  ],
  password: [{ required: true, message: "请输入密码" }],
  emailCode: [{ required: true, message: "请输入邮箱验证码" }],
  nickName: [{ required: true, message: "请输入昵称" }],
  registerPassword: [
    { required: true, message: "请输入密码" },
  ],
  reRegisterPassword: [
    { required: true, message: "请再次输入密码" }
  ],
  checkCode: [{ required: true, message: "请输入图片验证码" }],
};
</script>

<style lang="scss" scoped>
  .login-body {
    width: 100%;
    height: 100%;
    background: url("@/common/image/login_bg.jpg");
    position:fixed;
    background-size:100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    // .bg {
    //   flex: 1;
    //   background-size: cover;
    //   background-position: center;
    //   background-size: 800px;
    //   background-repeat: no-repeat;
    //   background-image: url("@/common/image/login_img.png");
    // }
    .login-panel {
      display: flex;
      align-items: center;
      justify-content: center;
      .login-register {
        border:1px solid #C4E1C5;
        width: 500px;
        padding: 25px;
        background: #fff;
        border-radius: 5px;
        .login-title {
          text-align: center;
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .send-emali-panel {
          display: flex;
          width: 100%;
          justify-content: space-between;
          .send-mail-btn {
            margin-left: 5px;
          }
        }
        .rememberme-panel {
          width: 100%;
        }
        .check-code-panel{
          width: 100%;
          display: flex;
          .check-code {
            width: 50px;
            cursor: pointer;
          }
        }
        .no-account {
          width: 100%;
          display: flex;
          justify-content: space-between;
        }
        .op-btn {
          width: 100%;
        }
      }
    }
  }
</style>