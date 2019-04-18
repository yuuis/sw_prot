<template>
  <el-carousel :interval="5000" height="500px">
    <el-carousel-item v-for="item in nurseryImages" :key="item">
      <img :src="item" alt="main-image">
      <h3>{{ item }}</h3>
    </el-carousel-item>
    <div class="search-form">
      <el-form ref="form" :model="searchForm" label-width="120px" @submit.native.prevent="search">
        <h3>保育園を検索する</h3>
        <el-form-item label="市区町村" required style="font-weight: bold">
          <el-select v-model="searchForm.area" placeholder="Select">
            <el-option
              v-for="opt in areaList"
              :key="opt.value"
              :label="opt.label"
              :value="opt.mapurl"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="お子さんの年齢" style="font-weight: bold">
          <el-input-number v-model="searchForm.childAge" :min="0" :max="6"></el-input-number> <span style="color: gray"> 才 </span>
        </el-form-item>
        <el-form-item label="入園希望月" style="font-weight: bold">
          <el-date-picker v-model="searchForm.month" type="month" placeholder="Pick a month"></el-date-picker>
        </el-form-item>
        <el-form-item style="text-align:right;">
          <el-button type="primary" native-type="submit">検索</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-carousel>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      searchForm: {
        area: "",
        childAge: "3",
        month: new Date()
      },

      nurseryImages: [
        // "https://cdn.pixabay.com/photo/2014/07/11/22/05/baby-390555_960_720.jpg"
        "https://cdn.pixabay.com/photo/2015/09/02/13/19/holding-hands-918990_960_720.jpg"
      ]
    };
  },
  methods: {
    search() {
      if (this.searchForm.area == "") return false;
      this.$router.push({
        path: "result",
        query: { areaURL: this.searchForm.area }
      });
    }
  },
  computed: {
    ...mapState(["areaList"])
  }
};
</script>

<style lang="scss" scoped>
$background: gainsboro;
.container {
  margin: 0 auto;
  text-align: center;

  .el-carousel {
    img {
      // height: 1000px;
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
      border: 1px solid orange;
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