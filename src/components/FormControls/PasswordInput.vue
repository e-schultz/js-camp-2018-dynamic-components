<template>
  <b-field :label="label">
    <b-input @input="$emit('input',$event)" :value="value" v-bind="$attrs" type="password" :passwordReveal="passwordReveal"></b-input>
  </b-field>
</template>

<script>
// @ is an alias to /src

export default {
  name: "PasswordInput",
  inheritAttrs: false,
  props: {
    placeholder: String,
    label: String,
    name: String,
    value: [String, Number],
    passwordReveal: {
      type: Boolean,
      default: true
    }
  }
};
</script>
