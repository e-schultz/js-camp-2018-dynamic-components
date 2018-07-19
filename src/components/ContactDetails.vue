<template>
  <section class="contact-details">
    <!-- ... -->
    <!-- before reusable form generator -->
    <!--
    <component 
      v-for="field in schema" 
      :key="field.name" 
      :is="field.fieldType" 
      v-bind="field.props"
      :value="contact[field.name]"
      @input="emitChange(field.name,$event)"
      >
    </component>
    -->
  <form-generator v-model="contact" :schema="schema"></form-generator>
  </section>
</template>

<script>
// @ is an alias to /src
// at the most basic, a field needs name and a value
export default {
  name: "ContactDetails",
  components: {
    FormGenerator: () => import("@/components/FormControls/FormGenerator")
  },
  props: ["value"],
  methods: {
    emitChange: function(fieldName, event) {
      this.$emit("input", { ...this.contact, [fieldName]: event });
    }
  },
  data() {
    return {
      contact: {
        firstName: this.value.firstName,
        lastName: this.value.lastName,
        userName: this.value.userName,
        password: this.value.password,
        email: this.value.email
      }
      /* schema: [
        {
          fieldType: "TextInput",
          name: "firstName",
          props: { label: "First Name" }
        },
        {
          fieldType: "TextInput",
          name: "lastName",
          props: { label: "Last Name" }
        },
        {
          fieldType: "TextInput",
          name: "userName",
          props: {
            label: "User Name",
            maxlength: 30
          }
        },
        {
          fieldType: "EmailInput",
          name: "email",
          props: {
            label: "Email"
          }
        },
        {
          fieldType: "PasswordInput",
          name: "password",
          props: {
            label: "Password"
          }
        }
      ]*/
    };
  },
  computed: {
    schema: function() {
      return this.$store.state.schemas.contact;
    }
  }
};
</script>
