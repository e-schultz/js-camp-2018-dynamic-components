<template>
  <aside>
  <slot></slot>
  </aside>
</template>

<script>
// @ is an alias to /src
// at the most basic, a field needs name and a value
export default {
  name: "Comment"
};
</script>
<style scoped>
aside {
  display: none;
}
</style>
