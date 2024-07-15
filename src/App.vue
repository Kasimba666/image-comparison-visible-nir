<template>
  <el-container>
    <image-list />
  </el-container>
</template>

<script>
import ImageList from '@/components/ImageList.vue';

export default {
  name: 'App',
  components: { ImageList }
};
</script>

<style>
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
}
</style>
