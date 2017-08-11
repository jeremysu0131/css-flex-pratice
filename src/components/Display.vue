<template>
  <div>
    <h2 class="title">display</h2>
    <div class="flex-main-container">
      <div class="flex-item-text">
        <p> display 是我們熟知的 CSS 屬性，對於 Flexbox 來說，多了有兩種方式可以設定，預設為「flex」，其布局方式與 block 幾乎類似，都會強迫換行，但設定
          <code>display:flex</code>的子元素卻具備了更多彈性的設定，此外另外一種方式則是「inline-flex」，和 inline-block 也是幾乎雷同，意義上都是一個
          <code>display:flex</code>的元素外面包覆
          <code>display:inline</code>的屬性，在後方的元素不會換行。( 範例：
          <a href="/demo/201501/css-flexbox-demo1.html"
             target="_blank">css-flexbox-demo1.html</a> )</p>
      </div>
      <div class="flex-container">
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

};
</script>

<style scoped>
img {
  box-shadow: 5px 5px 15px #000000;
  width: 100%;
}
</style>
