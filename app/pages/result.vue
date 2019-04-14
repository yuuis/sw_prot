<template>
  <section class="container">
    <!-- <search-header/> -->
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">TOP</el-breadcrumb-item>
        <!-- <el-breadcrumb-item :to="{ path: '/ptcalc' }">PT計算</el-breadcrumb-item> -->
        <el-breadcrumb-item :to="{ path: '/search' }">保育園を探す</el-breadcrumb-item>
        <el-breadcrumb-item>検索結果</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <el-row>
      <el-col :span="18">
        <iframe
          :src="$route.query.areaURL"
          width="1200"
          height="720"
          frameborder="0"
          style="border:0"
          allowfullscreen
        ></iframe>
      </el-col>
      <el-col :span="6">
        <!-- <member/> -->
      </el-col>
    </el-row>
  </section>
</template>

<script>
import searchHeader from "@/components/searchHeader";
import ptcalcForm from "@/components/ptcalcForm";
import recommend from "@/components/recommend";
import member from "@/components/member";
export default {
  components: { searchHeader, recommend, member, ptcalcForm }
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  text-align: center;

  .breadcrumb {
    margin: 20px;
  }
}
</style>

<style lang="scss">
.el-carousel__item {
  h3 {
    color: orange;
    font-size: 18px;
    opacity: 0.75;
    line-height: 500px;
    margin: 0;
    padding-bottom: 10%;
  }
  &:nth-child(2n) {
    background-color: #99a9bf;
  }
  &:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>