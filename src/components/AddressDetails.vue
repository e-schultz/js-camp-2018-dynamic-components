<template>
  <section class="address-details">
    <form-generator :schema="schema"  v-model="address">
    </form-generator>
  </section>
</template>

<script>
// @ is an alias to /src
// at the most basic, a field needs name and a value
export default {
  name: "AddressDetails",
  components: {
    FormGenerator: () => import("@/components/FormControls/FormGenerator")
  },
  props: ["value"],
  methods: {
    emitChange: function(fieldName, event) {
      this.$emit("input", { ...this.address, [fieldName]: event });
    }
  },
  data() {
    return {
      address: {
        street1: this.value.street1,
        street2: this.value.street2,
        country: this.value.country,
        province: this.value.province,
        postalCode: this.value.postalCode
      }
      /* schema: [
        {
          fieldType: "TextInput",
          name: "street1",
          props: {
            label: "Street Address"
          }
        },
        {
          fieldType: "TextInput",
          name: "street2",
          props: {}
        },
        {
          fieldType: "SelectList",
          name: "country",
          props: {
            label: "Country",
            options: ["Canada", "United States", "Spain"]
          }
        },
        {
          fieldType: "TextInput",
          name: "province",
          props: {
            label: "Province/State"
          }
        },
        {
          fieldType: "TextInput",
          name: "postalCode",
          props: {
            label: "Postal Code"
          }
        }
      ]*/
    };
  },
  computed: {
    schema: function() {
      return this.$store.state.schemas.address;
    }
  }
};
</script>
