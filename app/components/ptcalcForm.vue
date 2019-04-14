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
      <el-form-item label="就労時間(事業所)">
        <el-select v-model="searchForm.income">
          <el-option label="週5日以上かつ1日8時間以上" value="5/8-"></el-option>
          <el-option label="週5日以上かつ1日6時間以上8時間未満" value="5/6-8"></el-option>
          <el-option label="週5日以上かつ1日4時間以上6時間未満" value="5/4-6"></el-option>
          <el-option label="週3日以上5日未満かつ1日8時間以上" value="3-5/8-"></el-option>
          <el-option label="週3日以上5日未満かつ1日6時間以上8時間未満" value="3-5/6-8"></el-option>
          <el-option label="週3日以上5日未満かつ1日4時間以上6時間未満" value="3-5/4-6"></el-option>
          <el-option label="上記以外かつ月48時間以上" value="48"></el-option>
          <el-option label="当てはまるものはない" value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="就労時間(内職)">
        <el-select v-model="searchForm.income">
          <el-option label="週5日以上かつ1日6時間以上" value="5/6-"></el-option>
          <el-option label="上記以外かつ月48時間以上" value="48"></el-option>
          <el-option label="当てはまるものはない" value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="出産">
        <el-checkbox-group v-model="searchForm.type">
          <el-checkbox label="保育実施期間は、出産予定月を中心に前後２か月（計５か月以内）"></el-checkbox><br>
          <el-checkbox label="妊娠初期及び中期に長期間にわたって安静が必要な場合"></el-checkbox><br>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="疾病">
        <el-checkbox-group v-model="searchForm.type">
          <el-form-item label="入院">
            <el-checkbox label="おおむね１か月以上の入院をしている、又は入院を決定した者"></el-checkbox><br>
          </el-form-item>
          <el-form-item label="居宅内">
            <el-checkbox label="常時病臥・感染性"></el-checkbox><br>
            <el-checkbox label="常時安静（寝たきりではないが、安静が必要で保育困難）"></el-checkbox><br>
            <el-checkbox label="一般療養（通院加療を要する状態）"></el-checkbox><br>
          </el-form-item>
          <el-form-item label="精神性">
            <el-checkbox label="症状が重度（精神障害者保健福祉手帳１級～３級相当）のため保育が困難な場合"></el-checkbox><br>
            <el-checkbox label="症状が軽度（上記以外の場合）のため保育困難な場合"></el-checkbox><br>
            <el-checkbox label="上記以外の場合で通院加療を要する状態"></el-checkbox><br>
          </el-form-item>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="障害">
        <el-checkbox-group v-model="searchForm.type">
          <el-checkbox label="身体障害者手帳１級・２級、愛の手帳１度～３度、精神障害者保健福祉手帳３級以上"></el-checkbox><br>
          <el-checkbox label="身体障害者手帳３級、愛の手帳４度"></el-checkbox><br>
          <el-checkbox label="身体障害者手帳４級"></el-checkbox><br>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="介護">
        <el-checkbox-group v-model="searchForm.type">
          <el-form-item label="入院･施設等">
            <el-checkbox label="常時病院･施設等で付添介護を必要とする場合"></el-checkbox><br>
            <el-checkbox label="常時ではないが病院･施設等で付添を必要とする場合"></el-checkbox><br>
          </el-form-item>
          <el-form-item label="その他の介護">
            <el-checkbox label="日常生活に全面的（食事･排泄･入浴等）介護を必要とする場合"></el-checkbox><br>
            <el-checkbox label="日常生活において、身の回りの事はある程度できるが、しばしば介護を必要とする場合"></el-checkbox><br>
            <el-checkbox label="上記以外の場合"></el-checkbox><br>
          </el-form-item>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="災害">
        <el-checkbox-group v-model="searchForm.type">
          <el-checkbox label="災害等による家屋の損傷、その他災害復旧のため保育に当たることができない場合"></el-checkbox><br>
        </el-checkbox-group>
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
