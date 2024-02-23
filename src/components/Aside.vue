
<template>
  <el-col :span="12">
    <h4 >用户</h4>
    <el-menu default-active="1" router="true" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <el-menu-item index="/my/userinfo">
          <i class="iconfont icon-chaxun"></i>
          <span>查询信息</span>
      </el-menu-item>
      <el-menu-item index="/my/updateinfo">
        <i class="iconfont icon-066bianjizhanghu"></i>
        <span slot="title">修改信息</span>
      </el-menu-item>
      <el-menu-item index="/my/updatepwd">
        <i class="iconfont icon-xiugaimima"></i>
        <span slot="title">修改密码</span>
      </el-menu-item>
      <el-menu-item class="out" index="/api/user">
        <i class="iconfont icon-tuichudengchu"></i>
        <span slot="title" @click=LoginOut>登出</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</template>
<style>
.out{
  margin-top: 200px;
}
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    min-height: 600PX;
  }
h4{
  padding-left: 50px;
}
  i {
    font-size: 30px;
  }

</style>
<script lang="ts" setup>
import {deleteCookie} from "../cookiesAuth/cookies_auth.js";

function LoginOut(){
  deleteCookie('auth')
}
const handleOpen = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}
</script>
../cookiesAuth/cookiesauth.js