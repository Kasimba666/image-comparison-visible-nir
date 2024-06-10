<template>
  <el-container>
    <el-main>
      <ImageList />
    </el-main>
  </el-container>
</template>

<script>
import ImageList from './components/ImageList.vue';

export default {
  name: 'App',
  components: {
    ImageList
  }
};
</script>

<style>
@import "element-plus/dist/index.css";
</style>
