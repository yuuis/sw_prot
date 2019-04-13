<template>
  <div class="contents">
    <h2>おすすめ保育園</h2>
    <div class="area-list">
      <el-col :span="6" v-for="o in recommends" :key="o.id" :offset="0">
        <el-card :body-style="{ padding: '0px'}">
          <div class="card" :style="{ 'background-image': `url(${o.src})` }">
            <span>{{ o.name }}</span>
          </div>
        </el-card>
      </el-col>
      <el-row :gutter="20">
        <el-col :span="12">
          <h4>北海道・東北</h4>
          <el-button type="text">北海道</el-button>
          <el-button type="text">青森</el-button>
          <el-button type="text">岩手</el-button>
          <el-button type="text">秋田</el-button>
          <el-button type="text">山形</el-button>
          <el-button type="text">宮城</el-button>
          <el-button type="text">福島</el-button>
        </el-col>
        <el-col :span="12">
          <h4>関東</h4>
          <el-button type="text">東京</el-button>
          <el-button type="text">神奈川</el-button>
          <el-button type="text">茨城</el-button>
          <el-button type="text">栃木</el-button>
          <el-button type="text">埼玉</el-button>
          <el-button type="text">千葉</el-button>
          <el-button type="text">群馬</el-button>
        </el-col>
        <el-col :span="12">
          <h4>中部</h4>
          <el-button type="text">愛知</el-button>
          <el-button type="text">岐阜</el-button>
          <el-button type="text">静岡</el-button>
          <el-button type="text">三重</el-button>
          <el-button type="text">新潟</el-button>
          <el-button type="text">山梨</el-button>
          <el-button type="text">長野</el-button>
          <el-button type="text">石川</el-button>
          <el-button type="text">富山</el-button>
          <el-button type="text">福井</el-button>
        </el-col>
        <el-col :span="12">
          <h4>関西</h4>
          <el-button type="text">大阪</el-button>
          <el-button type="text">兵庫</el-button>
          <el-button type="text">京都</el-button>
          <el-button type="text">滋賀</el-button>
          <el-button type="text">奈良</el-button>
          <el-button type="text">和歌山</el-button>
        </el-col>
        <el-col :span="12">
          <h4>中国・四国</h4>
          <el-button type="text">岡山</el-button>
          <el-button type="text">広島</el-button>
          <el-button type="text">鳥取</el-button>
          <el-button type="text">島根</el-button>
          <el-button type="text">山口</el-button>
          <el-button type="text">香川</el-button>
          <el-button type="text">徳島</el-button>
          <el-button type="text">愛媛</el-button>
          <el-button type="text">高知</el-button>
        </el-col>
        <el-col :span="12">
          <h4>九州・沖縄</h4>
          <el-button type="text">福岡</el-button>
          <el-button type="text">佐賀</el-button>
          <el-button type="text">長崎</el-button>
          <el-button type="text">熊本</el-button>
          <el-button type="text">大分</el-button>
          <el-button type="text">宮崎</el-button>
          <el-button type="text">鹿児島</el-button>
          <el-button type="text">沖縄</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recommends: [
        {
          name: "東京",
          src:
            "https://cdn-ak.f.st-hatena.com/images/fotolife/g/gatigatitv/20180122/20180122231346.jpg"
        },
        {
          name: "大阪",
          src:
            "https://cdn.osaka-info.jp/cache/term_translation_600/2377484e-d8f7-11e8-91f5-0af0cba29dd8.jpeg"
        },
        {
          name: "京都",
          src:
            "http://www.tabirai.net/tour/common/images/special/kouyou/026_kyoto/img_recommend_01.jpg"
        },
        {
          name: "福岡",
          src:
            "https://yokanavi.com/assets/uploads/2016/05/968936af990125a165ac2b61be99a93f-1440x960.jpg"
        }
      ]
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

  h2 {
    font-size: 28px;
    font-weight: 400;
    color: #1f2f3d;
    margin: 0;
    margin-bottom: 20px;
    border-bottom: 2px solid $color;
  }

  .area-list {
    border: 1px solid $color;
    border-radius: 5px;
    padding: 20px;
    &:before,
    &:after {
      display: table;
      content: "";
    }
    &:after {
      clear: both;
    }
    .el-col {
      min-height: 120px;
    }
    .el-card {
      cursor: pointer;
      margin: 0px 5px;
      .card {
        width: 100%;
        height: 180px;
        background-size: cover;
        background-repeat: no-repeat;
        line-height: 180px;
        text-align: center;
        span {
          color: #fff;
          font-weight: bold;
          font-size: 50px;
        }
      }
    }
  }
  .image {
    width: 100%;
    display: block;
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
