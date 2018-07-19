<template>
  <section>
    <div class="columns">
      <div class="column">
        <div class="card">
          <div class="card-header">
            <div class="level">
              <div class="level-left">
                <div class="level-item">
            <h1 class="card-header-title">Schema:</h1>
                </div>
              </div>
              <div class="level-right">
                <div class="level-item">
            <dropdown v-model="activeSchema" :options="schemas" :mobile-modal="false"></dropdown>
                </div>
              </div>
            </div>
          </div>
          <div class="card-content">
            <from-store :schemaName="activeSchema" v-model="contact">
              
            </from-store>
          </div>
        </div>
      </div>
      <!-- <from-store schemaName="address" v-model="contact"></from-store>-->
      <div class="column">
        <schema-edit :schemaName="activeSchema"></schema-edit>
      </div>
      </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: "VuexDemo",
  components: {
    FromStore: () => import("@/components/FromStore"),
    SchemaEdit: () => import("@/components/SchemaEdit"),
    Dropdown: () => import("@/components/FormControls/Dropdown")
  },
  data() {
    return {
      activeSchema: "contact",
      schemas: ["contact", "address"],

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
