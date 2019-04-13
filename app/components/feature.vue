<template>
  <div class="contents">
    <h2>新着口コミ</h2>
    <div class="review-list">
      <el-row v-for="review in reviews" :key="review.id">
        <el-col :span="4">
          <img :src="review.imgsrc" alt>
        </el-col>
        <el-col :span="20">
          <div class="texts">
            <p class="names">
              <el-button type="text">{{ review.nursery }}</el-button>
              <span>-{{ review.name }}</span>
            </p>
            <p class="messages">{{ review.comment }}</p>
          </div>
          <div class="buttons">
            <el-badge :value="review.like" class="item" type="primary">
              <el-button type="primary" @click="review.like++" plain size="small">いいね</el-button>
            </el-badge>
            <el-button type="primary" size="small">詳しく見る</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reviews: [
        {
          imgsrc: "http://tutujigaoka.webcrow.jp/img/top.jpg",
          nursery: "つつじヶ丘保育園",
          name: "匿名ママ",
          comment: "素晴らしい保育士さんばかりでした。",
          like: 20,
          fav: false
        },
        {
          imgsrc: "http://www.mammys-angel.co.jp/common/img/img188gd5225_1.jpg",
          nursery: "シャリカエ保育園",
          name: "専業主婦A",
          comment: "専業主婦ですが、子供の自立のために探してみました。",
          like: 20,
          fav: false
        },
        {
          imgsrc:
            "http://hakuai.ed.jp/hh/wp-content/uploads/2014/10/1a098d367cd268b2cbe0229a045a33d0-1.png",
          nursery: "三田区役所幼稚園",
          name: "サザエさん",
          comment: "ちゃーん。",
          like: 20,
          fav: false
        },
        {
          imgsrc: "",
          nursery: "石黒幼稚園",
          name: "石黒",
          comment: "とてもいい場所でした",
          like: 20,
          fav: false
        }
      ]
    };
  },
  methods: {
    addLike(val) {
      val++;
    }
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

  .review-list {
    border: 1px solid $color;
    border-radius: 10px;
    padding: 20px;
    &:before,
    &:after {
      display: table;
      content: "";
    }
    &:after {
      clear: both;
    }

    img {
      margin-top: 30px;
      padding: 5px;
      width: 100%;
      border-radius: 10px;
    }
    .names {
      button {
        font-weight: bold;
        font-size: 20px;
      }
    }
    .buttons {
      margin-top: 5px;
      margin-bottom: 10px;
      text-align: right;
      button {
        margin-left: 20px;
      }
    }
    .texts {
      .messages {
        min-height: 50px;
        background-color: #ddd;
        border-radius: 5px;
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
