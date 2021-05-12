<template>
  <div class="tools">
    <kbd>自定义指令使用</kbd>
    <form>
      <div class="form-group">
        <label for="copyText">v-copy指令使用</label>
        <input
          v-model="copyText"
          type="text"
          class="form-control"
          id="copyText"
        />
        <p v-copy="copyText">点击可复制：{{ copyText }}</p>
      </div>
    </form>
    <kbd>自定义过滤器使用</kbd>
    <p>{{ "13538963128" | hidePhone }}</p>
  </div>
</template>

<script>
export default {
  name: "Tools",
  data() {
    return {
      copyText: "",
    };
  },
};
</script>
