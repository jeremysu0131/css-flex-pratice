<template>
  <div>
    <h2 class="title">Order</h2>
    <div class="flex-main-container">
      <div class="flex-item-text">

      </div>
      <div class="flex-container">
        <div class="flex-item flex-item1"
             style="background-color:#20A0FF">
          <div>1</div>
          <div>.flex-item1</div>
        </div>
        <div class="flex-item flex-item2"
             style="background-color:#13CE66">
          <div>2</div>
          <div>.flex-item2</div>
        </div>
        <div class="flex-item flex-item3"
             style="background-color:#F7BA2A">
          <div>3</div>
          <div>.flex-item3</div>
        </div>
        <div class="flex-item flex-item4"
             style="background-color:#FF4949">
          <div>4</div>
          <div>.flex-item4</div>
        </div>
        <div class="flex-item flex-item5"
             style="background-color:#8492A6">
          <div>5</div>
          <div>.flex-item5</div>
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
.flex-item {
  height: 100px;
  width: 100px;
}

.flex-item1 {
  order: 3;
}

.flex-item2 {
  order: 5;
}

.flex-item3 {
  order: 2;
}

.flex-item4 {
  order: 1;
}

.flex-item5 {
  order: 4;
}
</style>
