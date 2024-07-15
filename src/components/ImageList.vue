<template>
  <el-container>
    <el-aside>
      <div v-for="(pairs, folder) in imageGroups" :key="folder">
        <div class="title-group">{{ folder }}</div>
        <el-menu @select="handleSelect" :default-active="selectedPair">
          <el-menu-item
              v-for="(types, name) in pairs"
              :key="name"
              :index="name"
          >
            <div class="menu-item">{{ name }}</div>
          </el-menu-item>
        </el-menu>
      </div>
    </el-aside>
    <el-main v-if="selectedPair">
      <div>
<!--        <h3>{{ selectedPair }}</h3>-->
        <ImageComparison
            :first="selectedImages.visible"
            :second="selectedImages.nir"
            v-model:isLoadingFirst="isLoadingFirst"
            v-model:isLoadingSecond="isLoadingSecond"
        />
      </div>
    </el-main>
  </el-container>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useLoadImages } from '@/composables/useLoadImages';
import ImageComparison from '@/components/ImageComparison.vue';

export default {
  name: 'ImageList',
  components: {
    ImageComparison
  },
  setup() {
    const isLoadingFirst = ref(false);
    const isLoadingSecond = ref(false);
    const { imageGroups, loadImages } = useLoadImages();
    const selectedPair = ref(null);
    const selectedImages = ref({ visible: '', nir: '' });

    const handleSelect = (name) => {
      const folder = Object.keys(imageGroups.value).find(folder =>
          Object.keys(imageGroups.value[folder]).includes(name)
      );

      if (folder) {
        selectedPair.value = name;
        selectedImages.value = imageGroups.value[folder][name];
      }

      isLoadingFirst.value = true;
      isLoadingSecond.value = true;

    };

    onMounted(async () => {
      await loadImages();
      const firstFolder = Object.keys(imageGroups.value)[0];
      const firstPair = Object.keys(imageGroups.value[firstFolder])[0];
      handleSelect(firstPair);
    });

    return {
      imageGroups,
      selectedPair,
      selectedImages,
      handleSelect,
      isLoadingFirst,
      isLoadingSecond
    };
  }
};
</script>

<style scoped lang="scss">
.el-aside {
  width: 20%;
  min-width: 100px;
  max-width: 250px;
  background-color: #f5f5f5;
  padding: 5px;

    .title-group {
      font-size: 12px;
      font-weight: bold;
      margin-top: 8px;
      margin-bottom: 8px;
    }

  .el-menu {
    .el-menu-item {
      line-height: normal;
      height: auto;

      .menu-item {
        font-size: 12px;
        white-space: pre-line;
        padding-right: 3px;
        margin-top: 8px;
        margin-bottom: 8px;
      }
      &.is-active {
        background-color: hsl(210, 100%, 63%) !important;
        color: white !important;
      }
    }
  }
}

.el-main {
  padding: 0 5px;
}

</style>
