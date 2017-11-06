<template>
    <div>
        <header-tab></header-tab>
        <h2>{{msg}}</h2>
        <ul class="nav-box">
          <li class="nav-item" ><router-link to="/">首页</router-link></li>
          <li class="nav-item" ><router-link to="/about">关于</router-link></li>
        </ul>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import HeaderTab from './components/header.vue';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Vue App'
    };
  },
  components: {
    HeaderTab
  }
};
</script>

<style scoped>
.nav-item { display: inline-block; }
ul { list-style-type: none; padding: 0; }
li { text-align: left; margin: 0 10px; }
a { color: #42b983; }
</style>