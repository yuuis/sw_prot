<template>
  <div class="contents">
    <h2>ユーザ情報登録</h2>
    <el-form ref="form" :model="searchForm" label-width="120px" class="pt-form">
      <el-form-item label="職業">
        <el-select v-model="searchForm.job" placeholder="職業を選択してください">
          <el-option label="専業主婦" value="専業主婦"></el-option>
          <el-option label="会社員" value="会社員"></el-option>
          <el-option label="自営業" value="自営業"></el-option>
          <el-option label="学生" value="学生"></el-option>
          <el-option label="その他" value="その他"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="年収">
        <el-select v-model="searchForm.income">
          <el-option label="~300万円未満" value="-299"></el-option>
          <el-option label="300万以上、500万円未満" value="300-500"></el-option>
          <el-option label="500万以上、800万円未満" value="500-800"></el-option>
          <el-option label="800万以上、1000万円未満" value="800-1000"></el-option>
          <el-option label="1000万以上" value="1000"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="$router.push('/search')">登録する</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchForm: {
        job: "",
        income: ""
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
