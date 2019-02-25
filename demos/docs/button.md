<script>
  export default {
    methods: {
      hello() {
        alert('Hello World!');
      }
    }
  }
</script>

<style>
  .fi-button{
    margin: 15px 15px 15px 0;
  }
  .fi-button--large{
    margin: 15px 0;
  }
</style>

# Button 按钮

:::demo Button 组件提供四种主题，由`type`属性指定，默认值为`default`。
```html
  <div>
    <fi-button type="default" size="large" @click.native="hello">default</fi-button>
    <fi-button type="primary" size="large">primary</fi-button>
    <fi-button type="success" size="large">success</fi-button>
    <fi-button type="default" size="normal">default</fi-button>
    <fi-button type="primary" size="normal">primary</fi-button>
    <fi-button type="success" size="normal">success</fi-button>
  </div>
```
:::


