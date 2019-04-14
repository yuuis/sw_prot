<template>
  <div class="contents">
    <h2>保育園を探す</h2>
    <el-form ref="form" :model="searchForm" label-width="120px" class="pt-form">
      <el-form-item label="保育園">
        <el-checkbox-group v-model="searchForm.type">
          <el-checkbox label="こども園"></el-checkbox>
          <el-checkbox label="認可保育園"></el-checkbox>
          <el-checkbox label="非認可保育園"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="公立/私立">
        <el-checkbox-group v-model="searchForm.belongs">
          <el-checkbox label="公立"></el-checkbox>
          <el-checkbox label="私立"></el-checkbox>
          <el-checkbox label="国立"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="年齢">
        <el-radio-group v-model="searchForm.age">
          <el-radio :label="0">0才</el-radio>
          <el-radio :label="1">1才</el-radio>
          <el-radio :label="2">2才</el-radio>
          <el-radio :label="3">3才</el-radio>
          <el-radio :label="4">4才</el-radio>
          <el-radio :label="5">5才</el-radio>
          <el-radio :label="6">6才</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="設備">
        <el-checkbox-group v-model="searchForm.option">
          <el-checkbox label="駅近"></el-checkbox>
          <el-checkbox label="早朝可"></el-checkbox>
          <el-checkbox label="延長可"></el-checkbox>
          <el-checkbox label="給食あり"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="$router.push('/result')">検索結果を見る</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchForm: {
        type: ["認可保育園", "", ""],
        belongs: ["公立", "", ""],
        age: 3,
        option: ["", "", "", ""]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
$color: #00cf26;
.contents {
  width: 90%;
  margin: 20px auto;
  text-align: left;
  height: 800px;

  h2 {
    font-size: 28px;
    font-weight: 400;
    color: #1f2f3d;
    margin: 0;
    margin-bottom: 20px;
    border-bottom: 2px solid $color;
  }

  .inline-input {
    @include pc {
      width: 500px;
    }
    @include tab {
      width: 300px;
    }
    @include sp {
      width: 100%;
    }
  }
}
</style>

<style lang="scss">
.pt-form {
  input {
    width: 500px;
  }
}
</style>
