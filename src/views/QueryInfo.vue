<template>
  <el-descriptions title="用户信息" :column="3" border>
    <el-descriptions-item label="头像" label-align="right" align="center">
      <!--      v-bind动态绑定-->
      <el-avatar :src=userPic :size="60"  @error="errorHandler">
        <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
      </el-avatar>
    </el-descriptions-item>
    <el-descriptions-item
        label="用户名"
        label-align="right"
        align="center"
        label-class-name="my-label"
        class-name="my-content"
        width="150px"
    >{{ userName }}</el-descriptions-item
    >
    <el-descriptions-item label="ID" label-align="right" align="center"
    >{{ id }}</el-descriptions-item
    >
    <el-descriptions-item label="邮箱" label-align="right" align="center"
    >{{ email }}</el-descriptions-item
    >
    <el-descriptions-item label="昵称" label-align="right" align="center">
     {{nickName}}
    </el-descriptions-item>
  </el-descriptions>
</template>
<style scoped>
.my-label {
  background: var(--el-color-success-light-9);
}
.my-content {
  background: var(--el-color-danger-light-9);
}
</style>
<script lang="ts" setup>
const errorHandler = () => true
import axios from "axios";
import {ElMessage} from "element-plus";
import {getCookie} from "../cookiesAuth/cookies_auth.js";
import { ref } from 'vue';
const userName = ref('');
const id = ref('');
const nickName = ref('');
const email = ref('');
const userPic = ref('');
axios.get('http://127.0.0.1/my/userinfo', {
      headers: {
    'Content-Type': 'application/json', // 设置请求的Content-Type头部
    'Access-Control-Allow-Origin': '*', // 允许所有源进行跨域访问
    'Authorization': getCookie('auth')// token 是保存用户登录后的身份令牌
  }})
    .then(res=> {
      // 处理注册成功后的逻辑
      if (res.data.status===0){
        ElMessage.success(' 获取信息成功')
        id.value=res.data.data.id
        nickName.value=res.data.data.nickname
        userName.value=res.data.data.username
        userPic.value=res.data.data.user_pic
        email.value=res.data.data.email
      }
      else
        ElMessage.warning(' 获取信息失败')
    })
    .catch(error => {
      // 处理错误
      console.error(error);
    })
</script>../cookiesAuth/cookiesauth.js