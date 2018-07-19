<template>
   <b-field :label="label">
            <b-radio 
                v-for="option in options"
              :key="option"
              :value="option"
              :native-value="option"
              @input="$emit('input',$event)"
              v-model="boundValue"
              >
               {{option}} 
            </b-radio>
        </b-field>
</template>

<script>
// @ is an alias to /src

export default {
  name: "SelectList",
  inheritAttrs: false,
  props: ["placeholder", "label", "name", "value", "options"],
  data() {
    return {
      boundValue: this.value
    };
  }
};
</script>
