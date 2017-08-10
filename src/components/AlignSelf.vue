<template>
  <div>
    <h2 class="title">align-self</h2>
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
  align-self: flex-start;
}

.flex-item2 {
  align-self: flex-end;
}

.flex-item3 {
  align-self: center;
}

.flex-item4 {
  align-self: baseline;
}

.flex-item5 {
  align-self: stretch;
  height: auto;
  white-space: auto;
}
</style>
