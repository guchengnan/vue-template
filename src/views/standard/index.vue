<template>
  <div class="standard">
    <h3><kbd>路径引用</kbd></h3>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">图片</th>
          <th scope="col">说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">
            <img alt="Vue logo" src="../../assets/images/logo.png" />
          </th>
          <td>相对路径：（会通过编译器处理）</td>
        </tr>
        <tr>
          <th scope="row">
            <img alt="Vue logo" src="@/assets/images/logo.png" />
          </th>
          <td>别名：（会通过编译器处理，小图转base64，大图放置到assets）</td>
        </tr>
        <tr>
          <th scope="row">
            <img alt="Vue logo" :src="`${publicPath}favicon.ico`" />
          </th>
          <td>static资源路径：（不经过编译器）</td>
        </tr>
      </tbody>
    </table>
    <h3><kbd>组件规范</kbd></h3>
    <div class="card">
      <div class="card-body">
        <p class="font-weight-light">
          Vue.component('my-component-a', { /* 选项对象 */ })
        </p>
        <p class="font-weight-light">
          Vue.component('MyComponentB', { /* 选项对象 */ })
        </p>
        <p class="font-weight-light">建议：引用时采用kebab-case方式，prop命名使用camelCase方式，父组件绑定时使用kebab-case方式。</p>
        <p class="font-weight-light">
          &lt;my-component-a&gt;&lt;/my-component-a&gt;
        </p>
        <p class="font-weight-light">
          &lt;my-component-b&gt;&lt;/my-component-b&gt;
        </p>
      </div>
    </div>
    <h3><kbd>Git规范</kbd></h3>
    <div class="card">
      <div class="card-body">
        <p>
          项目使用 `git commit-msg hook` 校验提交信息格式。 开发者需要按照
          `前缀: 详情` 格式进行提交，否则无法通过校验。
        </p>
        <pre>
前缀规范如下：
  - feat: 新功能（feature）
  - fix: 修补 bug
  - docs: 文档（documentation）
  - style: 格式（不影响代码运行的变动）
  - refactor: 重构（即不是新增功能，也不是修改 bug 的代码变动）
  - perf: 性能优化
  - test: 增加测试
  - build: 编译相关的修改（例如 webpack, npm, gulp 等）
  - ci: CI 相关的修改（例如 Travis, Circle 等）
  - chore: 构建过程或辅助工具的变动
  - revert: 回滚上一次 commit</pre
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      publicPath: process.env.VUE_APP_ROUTER_BASE,
    };
  },
};
</script>

<style lang="scss" scoped>
.standard {
  img {
    width: 50px;
  }
}
</style>
