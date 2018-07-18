<template>
   <b-field :label="label">
            <b-select 
              :placeholder="placeholder" 
              :value="value"
              @input="$emit('input',$event)"
              >
                <option
                    v-for="option in options"
                    :value="option"
                    :key="option">
                    {{option}}
                </option>
            </b-select>
        </b-field>
</template>

<script>
// @ is an alias to /src

export default {
  name: "SelectList",
  inheritAttrs: false,
  props: ["placeholder", "label", "name", "value", "options"]
};
</script>
