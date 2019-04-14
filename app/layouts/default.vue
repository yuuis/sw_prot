<template>
  <el-container>
    <el-header>
      <main-header/>
    </el-header>
    <el-container>
      <el-main>
        <nuxt/>
      </el-main>
    </el-container>
    <el-footer>
      <main-footer/>
    </el-footer>
  </el-container>
</template>

<script>
import MainHeader from "@/components/assets/MainHeader";
import MainFooter from "@/components/assets/MainFooter";
import { mapState, mapActions } from "vuex";
export default {
  methods: {},
  components: {
    MainHeader,
    MainFooter
  },
  computed: {
    deviceScale() {
      return window.innerWidth;
    }
  }
};
</script>


<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

form {
  .el-form-item {
    label {
      @include sp {
        padding: 0px !important;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
header {
  margin-top: 10px;
  position: fixed;
  width: 80%;
  left: 0;
  top: 0px;
  z-index: 1500;
  background: #fff;
}
main,
aside {
  padding: 0;
  margin-top: 150px;
}
footer {
  padding: 0;
}

main {
  &.is-aside {
    @include pc {
      margin-left: 250px;
      margin-right: 50px;
    }
    @include tab {
      margin-left: 100px;
      margin-right: 50px;
    }
    @include sp {
      margin-left: 65px;
      margin-right: 0px;
    }
  }
}

aside {
  position: fixed;
}

section.el-container {
  width: 80%;
  margin-right: auto;
  margin-left : auto;
}
</style>
