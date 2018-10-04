<template>
  <div>
    <h2 class="title">justify-content</h2>
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
        <p> justify-content 決定了內容元素與整個 Flexbox 容器的「
          <strong>水平對齊</strong>」位置，看一下上面的 Flexbox 容器模型， 具有 main start 與 main end 左右兩個端點， justify-content 就是按照這個方式做設定，而其中的設定值總共有下列五個：
        </p>
        <ul>
          <li>flex-start：預設值，對齊最左邊的 main start</li>
          <li>flex-end：對齊最左邊的 main end</li>
          <li>center：水平置中</li>
          <li>space-between：平均分配內容元素，左右元素將會與 main start 和 main end 貼齊</li>
          <li>space-around：平均分配內容元素，間距也是平均分配</li>
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
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around"
      ],
      styleObject: {
        "justify-content": ""
      }
    };
  },
  methods: {
    changeStyle(item) {
      this.styleObject["justify-content"] = item;
    }
  }
};
</script>

<style scoped>
</style>
