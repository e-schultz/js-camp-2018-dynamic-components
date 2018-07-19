<template>
  <section class="secton">
       <component v-for="(field, index) in schema"
               :key="index"
               :is="field.fieldType"
               v-model="contact[field.name]"
               v-bind="field.props">
    </component>
  </section>    
</template>

<script>
// @ is an alias to /src

export default {
  name: "DynamicForm",

  components: {
    TextInput: () => import("@/components/FormControls/TextInput"),
    PasswordInput: () => import("@/components/FormControls/PasswordInput"),
    SelectList: () => import("@/components/FormControls/SelectList"),
    EmailInput: () => import("@/components/FormControls/EmailInput"),
    RadioGroup: () => import("@/components/FormControls/RadioGroup"),
    SwitchToggle: () => import("@/components/FormControls/SwitchToggle"),
    Dropdown: () => import("@/components/FormControls/Dropdown"),
    BasicInput: () => import("@/components/FormControls/BasicInput"),
    ContactDetails: () => import("@/components/ContactDetails"),
    AddressDetails: () => import("@/components/AddressDetails")
  },
  props: ["activeView"],
  computed: {
    schema: function() {
      return [
        ...this.$store.state.schemas.contact,
        ...this.$store.state.schemas.address
      ];
    }
  },
  data() {
    return {
      contact: {
        firstName: "Evan",
        lastName: "Schultz",
        password: "iwantmymoney",
        email: "evan@",
        userName: "e-schultz",
        street1: "19 York Street",
        street2: "6th Floor",
        country: "Canada",
        postalCode: "N1N 2N2",
        province: "Ontario"
      }
    };
  }
};
</script>
<style>
.markup-demo-wrap {
  border: 1px solid black;
}
</style>
