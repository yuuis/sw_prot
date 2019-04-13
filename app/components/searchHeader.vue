<template>
  <el-carousel :interval="5000" height="500px">
    <el-carousel-item v-for="item in nurseryImages" :key="item">
      <img :src="item" alt>
      <h3>{{ item }}</h3>
    </el-carousel-item>
    <div class="search-form">
      <el-form ref="form" :model="searchForm" label-width="120px">
        <h3>保育園を検索</h3>
        <el-form-item label="エリア・駅">
          <el-select v-model="searchForm.area" placeholder="Select">
            <el-option
              v-for="opt in formContents.areaOption"
              :key="opt.value"
              :label="opt.label"
              :value="opt.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="お子さんの年齢">
          <el-input-number v-model="searchForm.childAge" :min="0" :max="6"></el-input-number>才
        </el-form-item>
        <el-form-item label="入園希望月">
          <el-date-picker v-model="searchForm.month" type="month" placeholder="Pick a month"></el-date-picker>
        </el-form-item>
        <el-form-item style="text-align:right;">
          <el-button type="primary">検索</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-carousel>
</template>


<script>
export default {
  data() {
    return {
      searchForm: {
        area: "",
        childAge: "3",
        month: new Date()
      },

      nurseryImages: [
        "http://angelchild.net/img/index_bigimg.jpg",
        "http://kir302693.kir.jp/img/top/main_img.jpg"
      ],

      formContents: {
        areaOption: [
          {
            value: "八王子駅",
            label: "八王子"
          },
          {
            value: "池袋駅",
            label: "池袋駅"
          },
          {
            value: "新宿駅",
            label: "新宿駅"
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
$background: #b8ffce;
.container {
  margin: 0 auto;
  text-align: center;

  .el-carousel {
    img {
      width: 100%;
    }

    .search-form {
      position: absolute;
      width: 400px;
      height: 400px;
      background-color: rgba($background, $alpha: 0.85);
      margin: 20px;
      padding: 20px 10px;
      border-radius: 5px;
      backdrop-filter: blur(3px);
      z-index: 1400;
      border: 1px solid #00cf26;
      h3 {
        text-align: left;
        margin-left: 20px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>

<style lang="scss">
.el-carousel__item {
  h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 500px;
    margin: 0;
  }
  &:nth-child(2n) {
    background-color: #99a9bf;
  }
  &:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>