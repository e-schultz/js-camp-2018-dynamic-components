<template>
  <section class="is-prop-child">
      <component :is="activeView" v-model="contact">
      </component>
  </section>    
</template>

<script>
// @ is an alias to /src

export default {
  name: "IsProp",
  components: {
    ContactDetails: () => import("@/components/ContactDetails"),
    AddressDetails: () => import("@/components/AddressDetails"),
    SwitchToggle: () => import("@/components/FormControls/SwitchToggle")
  },
  props: ["activeView"],
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
