<template>
  <b-field :label="label">
    <b-input 
      @input="$emit('input',$event)" 
      type="email"
      icon="email"
      :value="value"
       v-bind="$attrs">
    </b-input>
  </b-field>
</template>

<script>
// @ is an alias to /src

export default {
  name: "EmailInput",
  inheritAttrs: false,
  props: ["placeholder", "label", "name", "value"]
};
</script>
