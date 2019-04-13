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
        <el-checkbox-group v-model="searchForm.age">
          <el-checkbox label="0才"></el-checkbox>
          <el-checkbox label="1才"></el-checkbox>
          <el-checkbox label="2才"></el-checkbox>
          <el-checkbox label="3才"></el-checkbox>
          <el-checkbox label="4才"></el-checkbox>
          <el-checkbox label="5才"></el-checkbox>
          <el-checkbox label="6才"></el-checkbox>
        </el-checkbox-group>
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
        type: ["", "", ""],
        belongs: ["", "", ""],
        age: ["", "", "", "", "", "", ""],
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
