<template>
  <div>
    <div v-for="(field, index) in schema" :key="index">
      <text-input v-if="field.fieldType === 'TextInput'"
     :value="formData[field.name]"
               @input="updateForm(field.name, $event)"
               v-bind="field.props"
      ></text-input>
      <password-input v-else-if="field.fieldType === 'PasswordInput'"
       :value="formData[field.name]"
               @input="updateForm(field.name, $event)"
               v-bind="field.props"
      ></password-input>
    </div>
    
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
