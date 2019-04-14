<template>
  <div class="container">
    <h1>
      <a class="router-link-active" @click="$router.push('/')">
        <span style="font-weight: 750; font-size: 40px; padding:10px;">子育てWeekend</span>
      </a>
    </h1>
    <el-menu :default-active="activeIndex" class="nav" mode="horizontal">
      <el-menu-item index="1">保育園を検索</el-menu-item>
      <el-menu-item index="2">運営会社</el-menu-item>
      <el-menu-item index="3">ヘルプ</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {},
  computed: {}
};
</script>


<style lang="scss" scoped>
.container {
  height: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0 auto;
  border-bottom: 1px solid #dcdfe6;

  h1 {
    margin: 0;
    float: left;
    @include pc {
      font-size: 32px;
      font-weight: 400;
      line-height: 80px;
    }
    a {
      color: #333;
      text-decoration: none;
      display: block;
      img {
        &.header-icon {
          float: left;
          height: 60px;
          margin-right: 10px;
        }
      }
      span {
        @include sp {
          display: none;
        }
      }
    }
  }

  ul {
    float: right;
    height: 100%;
    line-height: 80px;
    background: transparent;
    padding: 0;
    margin: 0;

    li {
      @include sp {
        margin-left: 6px;
        padding: 0px;
        font-size: 12px;
      }
    }

    &.el-menu.el-menu--horizontal {
      border-bottom: none;
    }
  }
}
</style>
