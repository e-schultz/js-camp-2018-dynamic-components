<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/markup-demo">Markup Demo</router-link> |
      <router-link to="/is-computed">Is Computed</router-link> |
      <router-link to="/is-prop">Is Prop</router-link> |
      <router-link to="/prop-passing">Prop Passing</router-link> |
      <router-link to="/vuex-demo">Vuex Demo</router-link> |
    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style>
/*#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}*/
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
