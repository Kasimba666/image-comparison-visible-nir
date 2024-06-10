<template>
  <div class="ImageList">
    <div class="table-container">
      <div v-for="(images, folder) in imageGroups" :key="folder" class="folder-group">
        <h2 class="folder-title">{{ folder }}</h2>
        <el-table
            :data="formatTableData(images)"
            style="width: 100%"
            @row-click="handleRowClick"
            :row-class-name="rowClassName"
        >
          <el-table-column prop="name"></el-table-column>
        </el-table>
      </div>
    </div>
    <div class="comparison-container">
      <el-radio-group v-model="comparisonDirect" size="large">
        <el-radio-button label="Вертикальный разделитель" value="vertical" />
        <el-radio-button label="Горизонтальный разделитель" value="horizontal" />
      </el-radio-group>
      <div class="select-direct"></div>
      <img-comparison-slider
        v-if="!!selectedRow"
        :direction="comparisonDirect"
      >
        <img slot="first" width="100%" :src="selectedRow.folder.visible">
        <img slot="second" width="100%" :src="selectedRow.folder.nir">
      </img-comparison-slider>
    </div>
  </div>

</template>

<script>
import { ref, onMounted } from 'vue';
import { useLoadImages } from '@/composables/useLoadImages';
import {Pointer} from "@element-plus/icons-vue";
import { ImgComparisonSlider } from '@img-comparison-slider/vue';


export default {
  name: 'ImageList',
  components: {Pointer, ImgComparisonSlider},
  setup() {
    const { imageGroups, loadImages } = useLoadImages();
    const selectedRow = ref(null);
    const comparisonDirect = ref(null);
    const formatTableData = (images) => {
      const tableData = [];
      for (const name in images) {
        tableData.push({ name, folder: images[name] });
      }
      return tableData;
    };

    const handleRowClick = (row) => {
      selectedRow.value = row;
    };

    const rowClassName = ({ row }) => {
      return row.name === selectedRow.value?.name ? 'selected-row' : '';
    };

    onMounted(() => {
      loadImages().then(() => {
          const firstFolder = Object.keys(imageGroups.value)[0];
          const firstImageName = Object.keys(imageGroups.value[firstFolder])[0];
          comparisonDirect.value = 'horizontal';
          // comparisonDirect.value = 'vertical';
          selectedRow.value = { name: firstImageName, folder: imageGroups.value[firstFolder][firstImageName] };
      });
    });

    return {
      imageGroups,
      formatTableData,
      handleRowClick,
      rowClassName,
      selectedRow,
      comparisonDirect
    };
  }
};
</script>

<style lang="scss">
.ImageList {
  display: flex;

  .table-container {
    width: 200px;
    .folder-group {
      margin-bottom: 0px;

      .folder-title {
        font-size: 1em;
        font-weight: bold;
        margin-bottom: 10px;
      }

      .selected-row {
        background-color: #b3f5f8
      }
    }
  }

  .comparison-container {
    width: 100%;
    height: auto;
    margin-left: 10px;
    display: flex;
    flex-flow: column nowrap;
  }
}
</style>
