<template>
  <div>
    <h2 class="title">align-items</h2>
    <div class="flex-main-container">
      <div class="flex-item-text">
        <button class="option-button"
                v-for="(item,index) in items"
                :key="item.index"
                @click="changeStyle(item)">
          {{item}}
        </button>
        <p>
          <img src="https://www.w3.org/TR/css-flexbox-1/images/flex-direction-terms.svg"
               class="flexbox-img"
               alt="">
        </p>
        <p> align-items 與 justify-content 相反， align-items 決定了內容元素與整個 Flexbox 的「
          <strong>垂直對齊</strong>」位置， 看一下上面的 Flexbox 容器模型， 具有 cross start 與 cross end 左右兩個端點， align-items 與 align-self 就是按照這個方式做設定，下列共有五個設定值：
        </p>
        <ul>
          <li>stretch：預設值，將內容元素全部伸展至 Flexbox 的高度</li>
          <li>flex-start：對齊最上面的 cross start</li>
          <li>flex-end：對齊最下面的 cross end</li>
          <li>center：垂直置中</li>
          <li>baseline：以 Flexbox 容器的 baseline 做對齊</li>
        </ul>
      </div>
      <div class="flex-container"
           :style="styleObject">
        <div class="flex-item"
             style="background-color:#20A0FF">
          <div>1</div>
          <div>.flex-item</div>
        </div>
        <div class="flex-item"
             style="background-color:#13CE66">
          <div>2</div>
          <div>.flex-item</div>
        </div>
        <div class="flex-item"
             style="background-color:#F7BA2A">
          <div>3</div>
          <div>.flex-item</div>
        </div>
        <div class="flex-item"
             style="background-color:#FF4949">
          <div>4</div>
          <div>.flex-item</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        'stretch',
        'flex-start',
        'flex-end',
        'center',
        'baseline',
      ],
      styleObject: {
        'align-items': '',
      },
    };
  },
  methods: {
    changeStyle(item) {
      this.styleObject['align-items'] = item;
    },
  },
};
</script>

<style scoped>
.flex-item {
  min-height: 100px;
  min-width: 100px;
}
</style>
