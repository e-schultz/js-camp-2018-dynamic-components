<template>
  <div>
    <form>
    <component v-for="(field, index) in schema"
               :key="index"
               :is="field.fieldType"
               :value="formData[field.name]"
               @input="updateForm(field.name, $event)"
               v-bind="field.props">
    </component>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormGenerator",
  components: {
    TextInput: () => import("@/components/FormControls/TextInput"),
    PasswordInput: () => import("@/components/FormControls/PasswordInput"),
    SelectList: () => import("@/components/FormControls/SelectList"),
    EmailInput: () => import("@/components/FormControls/EmailInput"),
    RadioGroup: () => import("@/components/FormControls/RadioGroup"),
    SwitchToggle: () => import("@/components/FormControls/SwitchToggle"),
    Dropdown: () => import("@/components/FormControls/Dropdown"),
    BasicInput: () => import("@/components/FormControls/BasicInput")
  },
  props: ["schema", "value"],
  data() {
    return {
      formData: this.value || {}
    };
  },
  methods: {
    updateForm(fieldName, value) {
      this.$set(this.formData, fieldName, value);
      this.$emit("input", this.formData);
    }
  }
};
</script>
