
<template>
  <div class="container">
    <div>
      <label for="password">账号：</label>
      <el-input style="width: 200px;height: 50px" maxlength="10" minlength="1"  v-model="username" placeholder="account"></el-input>
    </div>
    <div>
      <label for="password">密码：</label>
      <el-input style="width: 200px;height: 50px" maxlength="12" minlength="6" placeholder="pass" v-model="password" show-password></el-input>
    </div>
    <button @click=submitLogin>登录</button>
    <button @click=submitReg>注册</button>
  </div>
</template>
<style scoped>
.container {
position: absolute;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
}
</style>
<script >
import axios from 'axios';
import { ElMessage } from 'element-plus'
import {setCookie,deleteCookie} from "@/cookiesAuth/cookies_auth.js";
import router from "@/router";
export default {
  data() {
    return {
      username:'',
      password:''
    };
  },
  methods: {
    submitLogin() {
      // 发送 POST 请求到后端
      axios.post('http://127.0.0.1/api/login', {username:this.username,password:this.password},{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', // 设置请求的Content-Type头部
          'Access-Control-Allow-Origin': '*', // 允许所有源进行跨域访问
        }})
          .then(res => {
            // 处理注册成功后的逻辑
            if (res.data.status===0) {
              ElMessage.success('登陆成功')
              setCookie('auth',res.data.token,1)
              router.push('/my/userinfo')
            }
            else if (res.data.msg==='密码错误')
              ElMessage.warning('密码错误')
            else
              ElMessage.error('登录失败')
          })
          .catch(error => {
            // 处理错误
            console.error(error);
          });
    },
    submitReg() {
      // 发送 POST 请求到后端
      axios.post('http://127.0.0.1/api/reg', {username:this.username,password:this.password},{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', // 设置请求的Content-Type头部
          'Access-Control-Allow-Origin': '*', // 允许所有源进行跨域访问
        }})
          .then(res => {
            // 处理注册成功后的逻辑
            if (res.data.status===0)
              ElMessage.success('注册成功')

            else if (res.data.msg==='用户名已被占用！')
              ElMessage.warning('用户名已被占用！')

            else
              ElMessage.error('注册失败')
          })
          .catch(error => {
            // 处理错误
            console.error(error);
          });
    },
  },
};
</script>

@/cookiesAuth/cookiesauth.js