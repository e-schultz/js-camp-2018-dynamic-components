<template>
  <b-field :label="label">
   <b-switch 
      :value="value" 
      @input="$emit('input',$event)" 
      v-bind="$attrs">
      <slot></slot>
   </b-switch>
  </b-field>
</template>

<script>
// @ is an alias to /src

export default {
  name: "SwitchToggle",
  inheritAttrs: false,
  props: ["placeholder", "label", "name", "value"]
};
</script>
