<template>
  <b-field :label="label">
    <b-input 
      @input="$emit('input',$event)" 
      :value="value"
      @keyup.enter.native="$emit('enter',$event.target.value)" 
       v-bind="$attrs">
    </b-input>
  </b-field>
</template>

<script>
// @ is an alias to /src

export default {
  name: "TextInput",
  inheritAttrs: false,
  props: ["placeholder", "label", "name", "value"]
};
</script>
