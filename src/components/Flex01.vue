<template>
  <div>
    <h2>
      基本用法</h2>
    <div class="flex-main-container">
      <div class="flex-item-text">
        Contain</div>
      <div class="flex-container">
        <div class="flex-item"
             style="background-color:#20A0FF">div class="flex-item"</div>
        <div class="flex-item"
             style="background-color:#13CE66">div class="flex-item"</div>
        <div class="flex-item"
             style="background-color:#F7BA2A">div class="flex-item"</div>
        <div class="flex-item"
             style="background-color:#FF4949">div class="flex-item"</div>
        div class="flex-container"
      </div>

    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.flex-main-container {
  display: flex;
  height: 300px;
  width: 100%;
}

.flex-item-text {
  width: 33%;
}

.flex-container {
  background-color: #E5E9F2;
  display: flex;
  width: 66%;
}

.flex-item {
  width: 180px;
  height: 150px;
}
</style>
