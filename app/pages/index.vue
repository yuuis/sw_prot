<template>
  <section class="container">
    <search-header/>
    <el-row>
      <el-col :span="18">
        <recommend/>
      </el-col>
      <el-col :span="6">
        <!-- <member/> -->
        <div class="ptbutton">
          <el-button type="primary" size="large" @click="$router.push('search')">詳しく検索する</el-button>
        </div>
        <div class="ptbutton">
          <el-button type="primary" size="large" @click="$router.push('ptcalc')">ユーザ情報登録</el-button>
        </div>
      </el-col>
    </el-row>
    <feature/>
  </section>
</template>

<script>
import searchHeader from "@/components/searchHeader";
import recommend from "@/components/recommend";
import member from "@/components/member";
import feature from "@/components/feature";
export default {
  components: { searchHeader, recommend, member, feature }
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  text-align: center;

  .el-carousel {
    img {
      width: 100%;
    }

    .search-form {
      position: fixed;
      width: 400px;
      height: 400px;
      background-color: rgba($color: rgb(231, 230, 230), $alpha: 0.85);
      margin: 20px;
      padding: 20px 10px;
      border-radius: 5px;
      backdrop-filter: blur(3px);
      z-index: 2001;
      border: 1px solid orange;
      h3 {
        text-align: left;
        margin-left: 20px;
        margin-bottom: 10px;
      }
    }
  }

  .ptbutton {
    margin-top: 20px;
    margin-right: 30px;
    button {
      width: 100%;
      height: 150px;
      font-size: 30px;
      font-weight: bold;
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