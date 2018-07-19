<template>
  <section class="address-view">
   <b-field label="Street">
     <p>
     {{street1}} <br/>
     {{street2}} 
     </p>
   </b-field>
    <b-field label="Country">
     {{country}}
   </b-field>
    <b-field label="Province/State">
     {{province}}
   </b-field>
   <b-field label="Postal Code">
     {{postalCode}}
   </b-field>
  </section>
</template>

<script>
// @ is an alias to /src
// at the most basic, a field needs name and a value
export default {
  name: "AddressView",
  props: ["street1", "street2", "country", "province", "postalCode"]
};
</script>
