<template>
  <div class="layout-docs">
    <div class="container">
        <sidebar></sidebar>   
        <router-view class="router-view"></router-view>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>

export default {
  name: 'docs',
}
</script>

<style lang="less">
.layout-docs{
    .container{
        display: flex;
        width: 80%;
        margin: 0 auto;
        min-height: 100vh;
    }
    .router-view{
      flex: 1;
    }
}
</style>
