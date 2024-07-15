<template>
  <div class="ImageComparison">
    <div class="overlay-on-loading" :class="{'loading': isLoadingFirst || isLoadingSecond}"></div>
    <el-radio-group v-model="direction" style="margin-bottom: 5px">
      <el-radio-button label="horizontal">Горизонтально</el-radio-button>
      <el-radio-button label="vertical">Вертикально</el-radio-button>
    </el-radio-group>
    <div v-if="isLoadingFirst || isLoadingSecond" class="spinner"></div>
    <img-comparison-slider
        value="50"
        :direction=direction
    >

      <img slot="first" :src="first" @load="onImageLoad('first')" />
      <img slot="second" :src="second" @load="onImageLoad('second')"/>
    </img-comparison-slider>
  </div>
</template>

<script>
import { ImgComparisonSlider } from '@img-comparison-slider/vue';
// import { defineCustomElements } from '@img-comparison-slider/vue/dist/loader';

export default {
  name: 'ImageComparison',
  components: {
    ImgComparisonSlider
  },
  props: {
    first: {
      type: String,
      required: true
    },
    second: {
      type: String,
      required: true
    },
    isLoadingFirst: {
      type: Boolean,
      required: true
    },
    isLoadingSecond: {
      type: Boolean,
      required: true
    }
  },
  emits: ['update:isLoadingFirst', 'update:isLoadingSecond'],

  data() {
    return {
      direction: "horizontal",

    }
  },
  methods: {
    onImageLoad(v) {
      if (v==='first') this.$emit('update:isLoadingFirst', false);
      if (v==='second') this.$emit('update:isLoadingSecond', false);
    },
  },
  mounted() {

  }
};
</script>

<style lang="scss">
.ImageComparison {
  img-comparison-slider {

    img {
      max-width: 100%;
      height: auto;
    }
  }
  .el-radio-button__inner {
    font-size: 12px;
  }
  .spinner {
    position: fixed;
    width: 40px;
    height: 40px;
    top: 25%;
    left: 55%;
    border: 8px solid hsl(210, 100%, 33%);
    border-top-color: hsl(210, 100%, 73%);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    z-index: 10;
  }
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  .overlay-on-loading {
    position: fixed;
    //right: 100%;
    //top: 0px;
    right: 0px;
    bottom: 100%;
    height: 100dvh;
    width: 100%;
    z-index: 5;
    transition: all 0.3s ease;
    pointer-events: none;

    &.loading {
      background-color: hsla(0, 0%, 0%, 0.2);
      backdrop-filter: grayscale(30%);
      pointer-events: all;
      transform: translateY(100%);
      //transform: translateX(100%);
    }
  }
}
</style>
