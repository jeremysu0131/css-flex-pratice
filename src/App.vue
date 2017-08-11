<template>
  <div id="app">
    <nav>
      <router-link to="display">display</router-link>
      <router-link to="flex-direction">flex-direction</router-link>
      <router-link to="justify-content">justify-content</router-link>
      <router-link to="align-items">align-items</router-link>
      <router-link to="flex-wrap">flex-wrap</router-link>
      <router-link to="align-content">align-content</router-link>
      <router-link to="order">order</router-link>
      <router-link to="align-self">align-self</router-link>
      <router-link to="flex">flex</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h2.title {
  text-align: center;
}

nav {
  overflow: hidden;
  background-color: rgba(248, 248, 248, 1);
  display: flex;
  align-items: stretch;
  justify-content: space-around;
  height: 60px;
}

nav a {
  line-height: 60px;
  margin: 0 5px;
  text-decoration-line: none;
}

nav a:hover {
  border-bottom: 5px solid green;
}

.flex-main-container {
  display: flex;
  padding: 0 10px;
}

.flex-item-text {
  flex: 1;
  padding: 0 10px;
}

.flex-container {
  background-color: #E5E9F2;
  border: 5px solid rgb(200, 200, 200);
  display: flex;
  flex: 1;
  height: 500px;
  width: 500px;
}

.flex-item {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-flow: column;
}

.option-button {
  padding: 10px;
  margin: 5px;
  background-color: #fff;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 3px;
  min-width: 100px;
}

.option-button:hover {
  background-color: rgba(200, 200, 200, .5);
  outline: none;
}

.option-button:active {
  background-color: rgba(200, 200, 200, 1);
}

.flexbox-img {
  width: 80%;
  box-shadow: 0 0 5px #000000;
}
</style>
