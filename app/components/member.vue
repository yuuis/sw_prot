<template>
  <div class="member-register">
    <h4>会員登録</h4>
    <el-button type="primary" size="large">ログイン</el-button>
  </div>
</template>

<style lang="scss" scoped>
$color: orange;
$background: gold;
.member-register {
  margin-top: 85px;
  margin-right: 30px;
  border: 1px solid $color;
  border-radius: 5px;
  background-color: $background;
  h4 {
    margin: 20px;
  }
  button {
    margin: 30px auto;
  }
}
</style>
