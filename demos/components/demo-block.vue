<template>
  <div
    class="demo-block">
    <slot name="source"></slot>
    <div class="detail" ref="meta" :style="{'height': isExpanded ? 'auto' : '0px'}">
      <div class="description"  v-if="$slots.default">
        <slot></slot>
      </div>
      <slot name="highlight"></slot>
    </div>
    <div
      class="demo-block-control"
      ref="control"
      @click="isExpanded = !isExpanded">
      {{isExpanded ? '隐藏代码' : '展开代码'}}
      <i class="iconfont" :class="{'ficontriangle-top': isExpanded, 'ficontriangle-bottom': !isExpanded}"></i>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isExpanded: false
      };
    },
  }
</script>

<style lang="less">
  .demo-block {
    border: solid 1px #ebebeb;
    border-radius: 3px;
    transition: .2s;
    &:hover{
      box-shadow: 0px 0px 10px #dedede;
    }
    code {
      font-family: Menlo, Monaco, Consolas, Courier, monospace;
    }
    .source{
      padding: 20px;
    }
    .detail{
      background: #fafafa;
      overflow: hidden;
      padding: 0 20px;
      .description{
        border: solid 1px #ebebeb;
        border-radius: 3px;
        padding: 15px;
        background: #fff;
        margin: 20px 0;
      }
      .highlight{
        margin-bottom: 20px;
        pre {
        margin: 0;
        }
        code.hljs {
          margin: 0;
          padding: 0;
          border: none;
          max-height: none;
          border-radius: 0;
          &::before {
            content: none;
          }
        }
      }
    }
    .demo-block-control{
      color: #666;
      border-top: solid 1px #ebebeb;
      padding: 10px 0;
      text-align: center;
      .iconfont{
        color: #ccc;
        margin-left: 4px;
      }
    }
  }
</style>