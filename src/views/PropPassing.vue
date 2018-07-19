<template>
  <section class="prop-passing-wrapper sectionn">
   <radio-group :options="options" v-model="activeView"></radio-group>
    <br/>
    
<component :is="activeView"
  :firstName="contact.firstName"
  :lastName="contact.lastName"
  :password="contact.password"
  :email="contact.email"
  :userName="contact.userName"
  :street1="contact.street1"
  :street2="contact.street2"
  :country="contact.country"
  :postalCode="contact.postalCode"
  :province="contact.province">
  </component>
    
  </section>    
</template>

<script>
// @ is an alias to /src

export default {
  name: "PropPassing",
  components: {
    IsProp: () => import("@/views/IsProp"),
    AddressDetails: () => import("@/components/AddressDetails"),
    AddressView: () => import("@/components/AddressView"),
    ContactView: () => import("@/components/ContactView"),
    ContactDetails: () => import("@/components/ContactDetails"),
    SwitchToggle: () => import("@/components/FormControls/SwitchToggle"),
    RadioGroup: () => import("@/components/FormControls/RadioGroup"),
    CompositeView: () => import("@/components/CompositeView")
  },

  data() {
    return {
      options: ["AddressView", "ContactView", "CompositeView"],
      activeView: "AddressView",
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
