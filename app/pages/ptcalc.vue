<template>
  <section class="container">
    <search-header/>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">TOP</el-breadcrumb-item>
        <el-breadcrumb-item>ユーザ情報登録</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-row>
      <el-col :span="18">
        <ptcalc-form/>
      </el-col>
      <el-col :span="6">
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