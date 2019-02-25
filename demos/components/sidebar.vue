<template>
  <div class="layout-sidebar">
    <img src="@/assets/logo.png" alt="logo" class="layout-sidebar__logo"/>
    <p class="layout-sidebar__version">{{version}}</p>
    <ul class="layout-sidebar__nav">
      <li v-for="(item,index) in nav" :key="index"
      :class="[`layout-sidebar--level${item.level}`]">
        <router-link :to="'/docs/' + item.path" v-if="item.path">{{item.alias}}</router-link>
        <a v-else>{{item.alias}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import nav from  '../router/docsMap.json';

const version = require('../../package.json').version;

export default {
  name: 'sidebar',
  data () {
    return {
      version: version,
      nav: nav
    };
  }
}
</script>

<style lang="less">
  .layout-sidebar{
    min-width: 240px;
    height: 100%;
    overflow-y: scroll;
    .layout-sidebar__logo{
      width: 80px;
    }
    .layout-sidebar__version{
      font-size: 16px;
      line-height: 40px;
    }
    .layout-sidebar__nav{
      font-size: 14px;
      color: #444;
      a{
        line-height: 40px;
        color: inherit;
      }
    }
    .layout-sidebar--level1{
      font-weight: 500;
      font-size: 16px;
      color: #1a1a1a;
    }
    .layout-sidebar--level2{
      font-size: 12px;
      color: #999;
    }
  }
</style>
