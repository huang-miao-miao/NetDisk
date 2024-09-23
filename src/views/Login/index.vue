<template>
  <div class="layout">
    <div class="login">
        <el-form :model="form" ref="ruleFormRef" :rules="rules" class="login-panel">
            <div class="title">NetDisk</div>
            <el-form-item prop="phone">
                <el-input  class="item" v-model="form.phone" placeholder="请输入手机号码" />
            </el-form-item>
            <el-form-item prop="password">
                <el-input  class="item" type="password" v-model="form.password" placeholder="请输入密码" />
            </el-form-item>
            <el-form-item  prop="node">
              <div class="check-code-panel">
                <el-input  class="item" v-model="form.node" placeholder="请输入验证码" />
                <el-button  type="primary">获取验证码</el-button>
              </div>
            </el-form-item>
            <el-form-item>
              <div class="login-commit-panel">
                <el-button style="width: 100%;" @click="submit" type="primary">登录</el-button>
              </div> 
            </el-form-item>
        </el-form>
    </div>
    <div class="bg"></div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  // 表单绑定对象
  const form = ref({
    phone: '',
    password: '',
    node: ''
  })
  //  表单校验规则
  const rules = ref({
    phone: [
        {required: true, message: '请输入手机号', trigger: 'blur' },
        { min: 11, max: 11, message: '请填写正确的手机号', trigger: 'blur'}
    ],
    password: [
        {required: true, message: '请输入密码', trigger: 'blur' }
    ],
    node: [
        {required: true, message: '请输入验证码', trigger: 'blur' }
    ]
  })
  // 获取form表单引用
  const ruleFormRef = ref(null)
  // 当点击登录按钮时的函数
  const submit = () => {
    // 获取到真正的表单元素
    ruleFormRef.value.validate((isValid, invalidFields) => {
      if (isValid) {
        // 表单所有元素验证通过，可以提交了
        console.log('验证通过')
      } else {
        console.log(invalidFields)
        console.log('验证不通过,不能提交,请检查')
      }
    })
  }
</script>

<style lang="scss" scoped>
  .layout{
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    position: fixed;
    background-image: url("@/common/image/login.png");
    display: flex;
    .login{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 200px;
        .login-panel{
          background-color: #fff;
          padding: 50px;
          .title{
            font-size: 18px;
            text-align:center;
            padding-bottom: 10px;
          }
          .check-code-panel{
            display: flex;
          }
          .item {
            border: 1px solid;
            padding-left: 10px;
          }
        }  
    }
    .bg{
        flex: 1;
    }
  }
</style>