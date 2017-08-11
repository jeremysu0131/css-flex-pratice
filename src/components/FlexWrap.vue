<template>
  <div>
    <h2 class="title">flex-wrap</h2>

    <div class="flex-main-container">
      <div class="flex-item-text">
        <button class="option-button"
                v-for="(item,index) in items"
                :key="item.index"
                @click="changeStyle(item)">
          {{item}}
        </button>
        <p>flex-wrap 屬性用法是： 如果 Flex 容器的寬度不夠時則內容元素是否換行，設定值有三個：</p>
        <ul>
          <li>nowrap：預設值，單行</li>
          <li>wrap：多行</li>
          <li>wrap-reverse：多行，但內容元素反轉
          </li>
        </ul>
        <p>備註：此範例 Flex容器有加上一個屬性 align-content: flex-start ，才能以方塊的方式顯示。</p>
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
        <div class="flex-item"
             style="background-color:#20A0FF">
          <div>5</div>
          <div>.flex-item</div>
        </div>
        <div class="flex-item"
             style="background-color:#13CE66">
          <div>6</div>
          <div>.flex-item</div>
        </div>
        <div class="flex-item"
             style="background-color:#F7BA2A">
          <div>7</div>
          <div>.flex-item</div>
        </div>
        <div class="flex-item"
             style="background-color:#FF4949">
          <div>8</div>
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
        'nowrap',
        'wrap',
        'wrap-reverse',
      ],
      styleObject: {
        'flex-wrap': '',
      },
    };
  },
  methods: {
    changeStyle(item) {
      this.styleObject['flex-wrap'] = item;
    },
  },
};
</script>

<style scoped>
.flex-container {
  align-content: flex-start;
}

.flex-item {
  margin: 5px;
  width: 100px;
  height: 100px;
}
</style>
