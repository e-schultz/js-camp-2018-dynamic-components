<template>
  <section class="composite-view section">
  <switch-toggle v-model="isVBind">
    {{activeView}}
  </switch-toggle>
  <div class="card">
    <div class="card-content">
      <address-view v-if="!isVBind" 
      :street1="address.street1" 
      :street2="address.street2" 
      :country="address.country"
      :province="address.province" :postalCode="address.postalCode" />

      <address-view v-if="isVBind" v-bind="address" />
    </div>
  </div>
  <br/>
  <div class="card">
    <div class="card-content">
      <contact-view v-if="!isVBind" :firstName="contact.firstName" :lastName="contact.lastName" 
      :userName="contact.userName" 
      :email="contact.email"
      :password="contact.password" />

      <contact-view v-bind="contact" v-if="isVBind"></contact-view>
    </div>
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
    ContactView: () => import("./ContactView"),
    SwitchToggle: () => import("./FormControls/SwitchToggle")
  },
  inheritAttrs: false,
  data() {
    return {
      isVBind: false
    };
  },
  computed: {
    activeView() {
      return this.isVBind ? "Using v-bind" : "Not using v-bind";
    },
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
