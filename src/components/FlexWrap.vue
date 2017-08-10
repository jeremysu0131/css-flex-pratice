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
        <p>需要設定align-content: flex-start;</p>
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
