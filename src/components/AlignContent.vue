<template>
  <div>
    <h2 class="title">align-content</h2>

    <div class="flex-main-container">
      <div class="flex-item-text">
        <button class="option-button"
                v-for="(item,index) in items"
                :key="item.index"
                @click="changeStyle(item)">
          {{item}}
        </button>
        <p>align-content 屬性修改 flex-wrap 屬性的行為，它與 align-items 很類似，但是不是對齊 flex 內容元素，而是對齊 flex 容器</p>
        <ul>
          <li>stretch：預設值，內容元素全部伸展</li>
          <li>flex-start：對齊最上面的 cross start</li>
          <li>flex-end：對齊最下面的 cross end</li>
          <li>center：垂直置中</li>
          <li>space-between：第一行對齊最上方，最後一行對齊最下方 </li>
          <li>space-around：每行平均分配間距</li>
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
        'stretch',
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
      ],
      styleObject: {
        'align-content': '',
      },
    };
  },
  methods: {
    changeStyle(item) {
      this.styleObject['align-content'] = item;
    },
  },
};
</script>

<style scoped>
.flex-container {
  flex-wrap: wrap;
}

.flex-item {
  margin: 5px;
  min-width: 100px;
  min-height: 100px;
}
</style>
