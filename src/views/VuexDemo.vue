<template>
  <section>
    <div class="columns">
      <div class="column">
        <div class="card">
          <div class="card-header">
            <h1 class="card-header-title">Contact Form</h1>
          </div>
          <div class="card-content">
            <from-store schemaName="contact" v-model="contact"></from-store>
          </div>
        </div>
      </div>
      <!-- <from-store schemaName="address" v-model="contact"></from-store>-->
      <div class="column">
        <schema-edit schemaName="contact"></schema-edit>
      </div>
      </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {
    FromStore: () => import("@/components/FromStore"),
    SchemaEdit: () => import("@/components/SchemaEdit")
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
