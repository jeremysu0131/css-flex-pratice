<template>
  <div>
    <h2 class="title">flex-direction</h2>

    <div class="flex-main-container">
      <div class="flex-item-text">
        <button class="option-button"
                v-for="(item,index) in items"
                :key="item.index"
                @click="changeStyle(item)">
          {{item}}
        </button>
        <p> flex-direction 屬性是指定 Flexbox 內容元素的「
          <strong>排列方向</strong>」，分別有下列四種：</p>
        <ul>
          <li>row：預設值，由左到右，再從上到下</li>
          <li>row-reverse：與 row 相反</li>
          <p>(備註：若使用 direction 改變左右排列方向則預設值則會按照 direction 來做變化)</p>
          <li>column：從上到下，再由左到右</li>
          <li>column-reverse：從下到上，再由左到右 </li>
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
      items: ["row", "row-reverse", "column", "column-reverse"],
      styleObject: {
        "flex-direction": ""
      }
    };
  },
  methods: {
    changeStyle(item) {
      this.styleObject["flex-direction"] = item;
    }
  }
};
</script>

<style>
</style>
