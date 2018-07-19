<template>
<b-dropdown :value="value" 
    @input="$emit('input',$event)" 
    v-bind="$attrs">
        <button class="button is-primary" type="button" slot="trigger">
            {{value}}
            <b-icon icon="menu-down"></b-icon>
        </button>

        <b-dropdown-item v-for="(option) in options" :key="option" :value="option">
            {{option}}
        </b-dropdown-item>
</b-dropdown>
</template>
<script>
export default {
  name: "DropDown",
  inheritAttrs: false,
  props: ["label", "value", "options"]
};
</script>
