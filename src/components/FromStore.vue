<template>
  <div>
    <component v-for="(field, index) in schema"
               :key="index"
               :is="field.fieldType"
               :value="formData[field.name]"
               @input="updateForm(field.name, $event)"
               v-bind="field.props">
    </component>
  </div>
</template>

<script>
export default {
  name: "FromStore",
  components: {
    TextInput: () => import("@/components/FormControls/TextInput"),
    PasswordInput: () => import("@/components/FormControls/PasswordInput"),
    SelectList: () => import("@/components/FormControls/SelectList"),
    EmailInput: () => import("@/components/FormControls/EmailInput"),
    SwitchToggle: () => import("@/components/FormControls/SwitchToggle")
  },
  props: ["schemaName", "value"],
  data() {
    return {
      formData: this.value || {}
    };
  },
  computed: {
    schema: function() {
      return this.$store.state.schemas[this.schemaName];
    }
  },
  methods: {
    updateForm(fieldName, value) {
      this.$set(this.formData, fieldName, value);
      this.$emit("input", this.formData);
    }
  }
};
</script>
