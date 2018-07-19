<template>
  <section class="prop-passing-wrapper">
    <switch-toggle v-model="isContact">
          {{activeView}}
    </switch-toggle>
    <br/>
    <component :is="activeView" v-bind="contact"/>

    
  </section>    
</template>

<script>
// @ is an alias to /src

export default {
  name: "PropPassingVBind",
  components: {
    IsProp: () => import("@/views/IsProp"),
    AddressDetails: () => import("@/components/AddressDetails"),
    AddressView: () => import("@/components/AddressView"),
    ContactView: () => import("@/components/ContactView"),
    ContactDetails: () => import("@/components/ContactDetails"),
    SwitchToggle: () => import("@/components/FormControls/SwitchToggle")
  },
  computed: {
    activeView: function() {
      return this.isContact ? "ContactView" : "AddressView";
    }
  },
  data() {
    return {
      isContact: true,
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
