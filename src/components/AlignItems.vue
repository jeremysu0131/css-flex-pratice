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

</style>
