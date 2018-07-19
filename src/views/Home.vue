<template>
    <section class="section">      
      <ul>
          <li> <a href="https://github.com/e-schultz/js-camp-2018-dynamic-components">Github Repo: e-schultz/js-camp-2018-dynamic-components</a></li>
          <li> <a href="https://js-camp-2018-dynamic-demo.now.sh/#/">Live Demo</a></li>
          <li> <a href="https://blog.rangle.io/how-to-create-data-driven-user-interfaces-in-vue/">Blog Post / Tutorial</a></li>
      </ul>

      <!--
      <contact-details v-model="contact"></contact-details>
      <address-details v-model="contact"></address-details>
      -->
    </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {
    ContactDetails: () => import("@/components/ContactDetails"),
    AddressDetails: () => import("@/components/AddressDetails")
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
