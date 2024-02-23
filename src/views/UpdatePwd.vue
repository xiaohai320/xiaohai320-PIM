<template>
<div class="container">
  <div>
    <label for="password">旧密码：</label>
    <el-input style="width: 200px;height: 50px" maxlength="12" minlength="6" placeholder="pass" v-model="oldPwd" show-password></el-input>
  </div>
  <div>
    <label for="password">新密码：</label>
    <el-input style="width: 200px;height: 50px" maxlength="12" minlength="6" placeholder="pass" v-model="newPwd" show-password></el-input>
  </div>
  <button @click=modfiyPwd>修改</button>
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
<script>
import axios from 'axios';
import { ElMessage } from 'element-plus'
import {getCookie} from '@/cookiesAuth/cookies_auth.js'
export default {
  data() {
    return {
      oldPwd:'',
      newPwd:''
    };
  },
  methods: {
    modfiyPwd() {
      // 发送 POST 请求到后端
      axios.post('http://127.0.0.1/my/updatepwd', {oldPwd:this.oldPwd,newPwd:this.newPwd},{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', // 设置请求的Content-Type头部
          'Access-Control-Allow-Origin': '*', // 允许所有源进行跨域访问
          'Authorization': getCookie('auth')// token 是保存用户登录后的身份令牌
       }})
          .then(res => {
            // 处理注册成功后的逻辑
            if (res.data.status===0)
              ElMessage.success('密码更新成功')
            else if (res.data.msg==='原密码错误！')
              ElMessage.warning('原密码错误！')
            else
              ElMessage.error('修改失败')
          })
          .catch(error => {
            // 处理错误
            console.error(error);
          })
    },
  },
};
</script>@/cookiesAuth/cookiesauth.js