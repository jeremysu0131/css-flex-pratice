<template>
  <div>
    <div class="flex-main-container">
      <div class="flex-item-text">
        .flex-container { background-color: #E5E9F2; display: flex; width: 66%; height: 300px; }
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
        <div></div>
        <div>.flex-container</div>
      </div>
    </div>
    <hr>
    <div class="flex-main-container">
      <div class="flex-item-text">
        <h3>Flex Direction</h3>
        <p>flex-direction屬性指定flex內容的item方向</p>
        <ul>
          <li>row：預設值（由左到右，由上到下）</li>
          <li>row-reverse: 反轉row（由右到左，由上到下）</li>
          <li>column：將會變成垂直排列</li>
          <li>column-reverse：垂直排列且反轉</li>
        </ul>
      </div>
      <div class="flex-container2">
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
        <div></div>
        <div>.flex-container</div>
      </div>
    </div>
    <hr>
    <div class="flex-main-container">
      <div class="flex-item-text">
        <h3>Flex Direction</h3>
        <p>flex-direction屬性指定flex內容的item方向</p>
        <ul>
          <li>row：預設值（由左到右，由上到下）</li>
          <li>row-reverse: 反轉row（由右到左，由上到下）</li>
          <li>column：將會變成垂直排列</li>
          <li>column-reverse：垂直排列且反轉</li>
        </ul>
      </div>
      <div class="flex-container3">
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
        <div></div>
        <div>.flex-container</div>
      </div>
    </div>
    <hr>
    <div class="flex-main-container">
      <div class="flex-item-text">
        <h3>Flex Direction</h3>
        <p>flex-direction屬性指定flex內容的item方向</p>
        <ul>
          <li>row：預設值（由左到右，由上到下）</li>
          <li>row-reverse: 反轉row（由右到左，由上到下）</li>
          <li>column：將會變成垂直排列</li>
          <li>column-reverse：垂直排列且反轉</li>
        </ul>
      </div>
      <div class="flex-container4">
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
        <div></div>
        <div>.flex-container</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.flex-container {
  background-color: #E5E9F2;
  display: flex;
  width: 66%;
  height: 300px;
}

.flex-container2 {
  flex-direction: row-reverse;
  background-color: #E5E9F2;
  display: flex;
  width: 66%;
  height: 300px;
}

.flex-container3 {
  flex-direction: column;
  background-color: #E5E9F2;
  display: flex;
  width: 66%;
  height: 300px;
}

.flex-container4 {
  flex-direction: column-reverse;
  background-color: #E5E9F2;
  display: flex;
  width: 66%;
  height: 300px;
}

.flex-item {
  text-align: center;
  width: 150px;
  height: 150px;
}

.flex-main-container {
  display: flex;
  width: 100%;
}

.flex-item-text {
  width: 33%;
}
</style>
