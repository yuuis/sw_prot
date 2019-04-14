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
        <!-- <el-checkbox-group v-model="searchForm.type"> -->
        <el-select>
          <el-option label="~300万円未満" value="-299"></el-option>
          <el-option label="300万以上、500万円未満" value="300-500"></el-option>
          <el-option label="500万以上、800万円未満" value="500-800"></el-option>
          <el-option label="800万以上、1000万円未満" value="800-1000"></el-option>
          <el-option label="1000万以上" value="1000"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="就労時間(事業所)">
        <el-select>
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
        <el-select>
          <el-option label="週5日以上かつ1日6時間以上" value="5/6-"></el-option>
          <el-option label="上記以外かつ月48時間以上" value="48"></el-option>
          <el-option label="当てはまるものはない" value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="出産">
        <el-checkbox-group>
          <el-checkbox label="保育実施期間は、出産予定月を中心に前後２か月（計５か月以内）"></el-checkbox><br>
          <el-checkbox label="妊娠初期及び中期に長期間にわたって安静が必要な場合"></el-checkbox><br>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="疾病">
        <el-checkbox-group>
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
        <el-checkbox-group>
          <el-checkbox label="身体障害者手帳１級・２級、愛の手帳１度～３度、精神障害者保健福祉手帳３級以上"></el-checkbox><br>
          <el-checkbox label="身体障害者手帳３級、愛の手帳４度"></el-checkbox><br>
          <el-checkbox label="身体障害者手帳４級"></el-checkbox><br>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="介護">
        <el-checkbox-group>
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
        <el-checkbox-group>
          <el-checkbox label="災害等による家屋の損傷、その他災害復旧のため保育に当たることができない場合"></el-checkbox><br>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="その他">
        <el-checkbox-group>
          <el-form-item label="求職">
            <el-checkbox label="週５日以上就労し、８時間以上の就労を常態（おおむね月２０日以上）"></el-checkbox><br>
            <el-checkbox label="週３日以上就労し、６時間以上の就労で上記に該当しない場合"></el-checkbox><br>
            <el-checkbox label="週３日以上就労し、４時間以上の就労で上記に該当しない場合"></el-checkbox><br>
            <el-checkbox label="求職のため、日中外出を常態（保育の実施期間は３か月）"></el-checkbox><br>
          </el-form-item>
          <el-form-item label="就学等">
            <el-checkbox label="学校教育法に定める学校、専修学校等や職業訓練施設に通学･通所している場合等"></el-checkbox><br>
            <el-checkbox label="日本語習得のため日本語学校に通学している場合"></el-checkbox><br>
          </el-form-item>
          <el-form-item label="不存在等">
            <el-checkbox label="死亡･離婚･行方不明･拘禁等"></el-checkbox><br>
          </el-form-item>
          <el-form-item label="虐待等">
            <el-checkbox label="虐待やDVのおそれがある場合など、社会的養護を必要とすると認められる場合"></el-checkbox><br>
          </el-form-item>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="加減要素">
        <el-checkbox-group>
          <el-checkbox label="父母共に、身体障害者手帳１級・２級、愛の手帳１度～３度、精神障害者保健福祉手帳１～３級が交付されている場合"></el-checkbox><br>
          <el-checkbox label="父又は母が、身体障害者手帳１級・２級、愛の手帳１度～３度、精神障害者保健福祉手帳１～３級が交付されている場合"></el-checkbox><br>
          <el-checkbox label="父母共に、不存在（長期入院を含む。）の場合"></el-checkbox><br>
          <el-checkbox label="父又は母が、不存在（長期入院を含む。）の場合かつ同居者なし"></el-checkbox><br>
          <el-checkbox label="父又は母が、不存在（長期入院を含む。）の場合かつ同居者あり"></el-checkbox><br>
          <el-checkbox label="生活保護世帯"></el-checkbox><br>
          <el-checkbox label="同一世帯の同居者に、常時日常生活の全てにわたり介護が必要な者がいる場合"></el-checkbox><br>
          <el-checkbox label="父母共に、求職中の場合"></el-checkbox><br>
          <el-checkbox label="兄弟姉妹が既に在園している園を利用申込みする場合、又は兄弟姉妹が同じ園を同時に申込む場合"></el-checkbox><br>
          <el-checkbox label="同居の児童が障害を有するために通所通院をしており、保護者の就労が制限されている場合（基本指数が２０の場合を除く。）"></el-checkbox><br>
          <el-checkbox label="双生児以上の申込みの場合"></el-checkbox><br>
          <el-checkbox label="父又は母が単身赴任中の場合（雇用主の命令により、日常的に帰宅できず保育にあたれない場合に適用。自営業等を除く。）"></el-checkbox><br>
          <el-checkbox label="利用希望日において、就労実績が６か月以上ある場合"></el-checkbox><br>
          <el-checkbox label="保護者のいずれかが、出産・育児のための休業から復職前提の場合。ただし、休業前の収入が最低賃金を下回る場合と休業前の就労実態がない場合は除く。（"></el-checkbox><br>
          <el-checkbox label="児童福祉法の観点から、特に配慮が必要と判断される場合"></el-checkbox><br>
          <el-checkbox label="父母共に、特定医療費（指定難病）受給者証又は東京都難病医療費等助成の医療券（公費負担者番号が51、54、83で始まるものに限る。）が交付されている場合"></el-checkbox><br>
          <el-checkbox label="父又は母に、特定医療費（指定難病）受給者証又は東京都難病医療費等助成の医療券（公費負担者番号が51、54、83で始まるものに限る。）が交付されている場合"></el-checkbox><br>
          <el-checkbox label="同居の親族等が、補完的な保育にあたれる場合"></el-checkbox><br>
          <el-checkbox label="同一世帯内に保育園利用申込みをしていない兄弟姉妹がいる場合"></el-checkbox><br>
          <el-checkbox label="保護者のいずれかが、就労実績及び収入実績に整合性がないと判断される場合"></el-checkbox><br>
        </el-checkbox-group>
          <el-checkbox-group v-model="searchForm.type">
            <el-checkbox label="過去３か月以上の保育料（区立保育室の保育料を含む。）の滞納（卒園児を含む。）がある場合"></el-checkbox><br>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="$router.push('/')">保存する</el-button>
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
$color: orange;
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
