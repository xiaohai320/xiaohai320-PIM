<script setup>
import Aside from "@/components/Aside.vue";
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px" v-if="$route.path!=='/api/user'">
        <Aside></Aside>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

