<template>
  <div>
    <h2 class="title">Flex</h2>
    <div class="flex-main-container">
      <div class="flex-item-text">
        <div class="sample-select">
          <button class="option-button"
                  @click="sample1">flex 介紹</button>
          <button class="option-button"
                  @click="sample2">flex-basis 沒超過 flexbox 範例</button>
          <button class="option-button"
                  @click="sample3">flex-basis 超過 flexbox 範例</button>
        </div>
        <div class="sample1"
             v-if="isShow===1">
          <p>flex 屬性是由三個屬性所組成，順序分別是 flex-grow ， flex-shrink ， flex-basis ，如果 flex 只有填一個數值（沒有單位），那麼預設就是以 flex-grow 來做呈現，三個屬性的定義如下：</p>
          <ul>
            <li>flex-grow：預設值：0，指定伸展 flexbox 剩下的空間的比例</li>
            <li>flex-shrink：預設值：1，指定收縮 flexbox 剩下的空間的比例</li>
            <li>flex-basis：預設值：auto，flex item 的基準單位，可以使用 auto, inherit 或是數值 %, px ,em 等等</li>
            <ul>
              <li>當 flexbox 的長度大於 flex-basis 時，則會按照 flex-grow 的比例伸展</li>
              <li>當 flexbox 的長度小於 flex-basis 時，則會按照 flex-shrink 的比例收縮</li>
            </ul>
          </ul>
          <p>右邊的範例我們改變了 flex-grow 的數值，可以看到顏色區塊的大小按照比例來做分配，試著改改看 flex-grow 的數值吧</p>
        </div>
        <div class="sample2"
             v-if="isShow===2">
          <p>在這個範例裡，我們先固定flexbox的寬度為600px，接下來綠色與黃色的 flex-basis 皆設定為 100px，紅色設定為 200px。</p>
          <ol>
            <li>首先我們將 flex-basis 的值加起來，(0 + 100 + 100 + 200) = 400。</li>
            <li>flex-basis 的總長度沒有超過 flexbox 的寬度，所以 flex-grow 屬性會生效</li>
            <li>接下來把 flexbox 的寬度減掉 flex-basis 的總和 600 - 400 = 200，這個 200 的值呢，就是 flexbox 內多餘的空間。</li>
            <li>
              再來我們將多餘的空間除以 flex item 的總數： 200 / 4 = 50，這個50就會平均分配給每一個 flex-item。 </li>
            <li>紅色區塊就是 flex-basis 的值加上多餘的空間 200 + 50 = 250。</li>
            <li>綠與黃色區塊就是 flex-basis 的值加上多餘的空間 100 + 50 = 150。</li>
            <li>可憐的藍色就只能分到一點點 0 + 50 = 50，我們用瀏覽器的dev tool去驗證每個顏色的寬度吧！</li>
          </ol>
          <p>【自己的固定值加上多餘的空間比例】，最後我們可以試試看改變 flex-basis 方框中的數值，來驗證一下邏輯是否有對哦！</p>
        </div>
        <div class="sample3"
             v-if="isShow===3">

        </div>
      </div>
      <div>
        <div class="custom-field">
          <div class="custom-field-item">
            <span>flexbox 寬度：</span>
            <input type="text"
                   style="border: 3px solid rgb(200, 200, 200); width: 200px;"
                   v-model="flexboxWidth">
          </div>
          <div class="custom-field-item">
            <span>flex-grow：</span>
            <input type="text"
                   style="border: 3px solid #20A0FF"
                   v-model="flexGrow1">
            <input type="text"
                   style="border: 3px solid #13CE66"
                   v-model="flexGrow2">
            <input type="text"
                   style="border: 3px solid #F7BA2A"
                   v-model="flexGrow3">
            <input type="text"
                   style="border: 3px solid #FF4949"
                   v-model="flexGrow4">
          </div>
          <div class="custom-field-item">
            <span>flex-basis：</span>
            <input type="text"
                   style="border: 3px solid #20A0FF"
                   v-model="flexBasis1">
            <input type="text"
                   style="border: 3px solid #13CE66"
                   v-model="flexBasis2">
            <input type="text"
                   style="border: 3px solid #F7BA2A"
                   v-model="flexBasis3">
            <input type="text"
                   style="border: 3px solid #FF4949"
                   v-model="flexBasis4">
          </div>
          <div class="custom-field-item">
            <span>flex-shrink</span>
            <input type="text"
                   style="border: 3px solid #20A0FF"
                   v-model="flexShrink1">
            <input type="text"
                   style="border: 3px solid #13CE66"
                   v-model="flexShrink2">
            <input type="text"
                   style="border: 3px solid #F7BA2A"
                   v-model="flexShrink3">
            <input type="text"
                   style="border: 3px solid #FF4949"
                   v-model="flexShrink4">
          </div>
        </div>
        <div class="flex-custom-container"
             :style="{width:flexboxWidth + 'px'}">
          <div style="background-color:#20A0FF"
               :style="{'flex-grow':flexGrow1, 'flex-shrink':flexShrink1, 'flex-basis':flexBasis1 +'px'}">
          </div>
          <div style="background-color:#13CE66"
               :style="{'flex-grow':flexGrow2, 'flex-shrink':flexShrink2, 'flex-basis':flexBasis2 +'px'}">
          </div>
          <div style="background-color:#F7BA2A"
               :style="{'flex-grow':flexGrow3, 'flex-shrink':flexShrink3, 'flex-basis':flexBasis3 +'px'}">
          </div>
          <div style="background-color:#FF4949"
               :style="{'flex-grow':flexGrow4, 'flex-shrink':flexShrink4, 'flex-basis':flexBasis4 +'px'}">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: 3,
      flexGrow1: 1,
      flexGrow2: 2,
      flexGrow3: 3,
      flexGrow4: 4,
      flexShrink1: 1,
      flexShrink2: 1,
      flexShrink3: 1,
      flexShrink4: 1,
      flexBasis1: 0,
      flexBasis2: 0,
      flexBasis3: 0,
      flexBasis4: 0,
      flexboxWidth: 600
    };
  },
  methods: {
    sample1() {
      this.getDefaultData();
      this.isShow = 1;
      this.flexGrow1 = 1;
      this.flexGrow2 = 2;
      this.flexGrow3 = 3;
      this.flexGrow4 = 4;
    },
    sample2() {
      this.getDefaultData();
      this.isShow = 2;
      this.flexBasis2 = 100;
      this.flexBasis3 = 100;
      this.flexBasis4 = 200;
    },
    sample3() {
      this.getDefaultData();
      this.isShow = 3;
      this.flexBasis1 = 200;
      this.flexBasis2 = 200;
      this.flexBasis3 = 300;
      this.flexBasis4 = 200;
      this.flexShrink1 = 0;
      this.flexShrink2 = 1;
      this.flexShrink3 = 1;
      this.flexShrink4 = 2;
    },
    getDefaultData() {
      this.flexGrow1 = 1;
      this.flexGrow2 = 1;
      this.flexGrow3 = 1;
      this.flexGrow4 = 1;
      this.flexShrink1 = 1;
      this.flexShrink2 = 1;
      this.flexShrink3 = 1;
      this.flexShrink4 = 1;
      this.flexBasis1 = 0;
      this.flexBasis2 = 0;
      this.flexBasis3 = 0;
      this.flexBasis4 = 0;
      this.flexboxWidth = 600;
    }
  }
};
</script>

<style scoped>
input {
  border-radius: 3px;
  text-align: center;
  width: 60px;
  height: 20px;
}

.flex-custom-container {
  height: 300px;
  width: 600px;
  background-color: #e5e9f2;
  border: 5px solid rgb(200, 200, 200);
  display: flex;
  flex-direction: row;
  -webkit-transition: width 1s, flex-shrink 1s;
  -moz-transition: width 1s, flex-shrink 1s;
  transition: width 1s, flex-shrink 1s;
}

.custom-field-item span {
  display: inline-block;
  width: 120px;
}
</style>
