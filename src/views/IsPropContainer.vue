<template>
  <section class="is-computed-container section">
    <switch-toggle v-model="isContact">
          {{activeView}}
    </switch-toggle>
    <br/>
    <section class="markup-demo-wrap card">     
      <div class="card-content">
        <is-prop :activeView="activeView"></is-prop>
      </div>
    </section>
  </section>    
</template>

<script>
// @ is an alias to /src

export default {
  name: "IsPropContainer",
  components: {
    IsProp: () => import("@/views/IsProp"),
    AddressDetails: () => import("@/components/AddressDetails"),
    ContactDetails: () => import("@/components/ContactDetails"),
    SwitchToggle: () => import("@/components/FormControls/SwitchToggle")
  },
  computed: {
    activeView: function() {
      return this.isContact ? "ContactDetails" : "AddressDetails";
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
