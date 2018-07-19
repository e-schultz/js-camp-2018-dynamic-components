<template>
  <div>
    <label>{{label}}</label>
    <input type="text"
           :name="name"
           :placeholder="placeholder"
           v-bind="$attrs">
  </div>
</template>
<script>
export default {
  name: "BasicInput",
  inheritAttrs: false,
  props: ["placeholder", "label", "name"]
};
</script>
