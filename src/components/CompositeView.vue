<template>
  <section class="composite-view">

    <div class="card">
      <div class="card-content">
        <address-view v-bind="address"></address-view>   
      </div>
    </div>
    <br/>
   <div class="card">
    <contact-view v-bind="contact" class="card-content"></contact-view>
   </div>
  </section>
</template>

<script>
// @ is an alias to /src
// at the most basic, a field needs name and a value
export default {
  name: "CompositeView",
  components: {
    AddressView: () => import("./AddressView"),
    ContactView: () => import("./ContactView")
  },
  inheritAttrs: false,
  computed: {
    address() {
      return {
        street1: this.$attrs.street1,
        street2: this.$attrs.street2,
        country: this.$attrs.country,
        province: this.$attrs.province,
        postalCode: this.$attrs.postalCode
      };
    },
    contact() {
      return {
        firstName: this.$attrs.firstName,
        lastName: this.$attrs.lastName,
        userName: this.$attrs.userName,
        email: this.$attrs.email,
        password: this.$attrs.password
      };
    }
  },
  props: ["showWhich"]
};
</script>
