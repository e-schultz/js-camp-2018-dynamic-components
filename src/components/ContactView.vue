<template>
  <section class="contact-view">
   <b-field label="First Name:" class="is-horizontal">
<p>     {{firstName}}</p>
   </b-field>
    <b-field label="Last Name" class="is-horizontal">
<p>     {{lastName}}</p>
   </b-field>
    <b-field label="User Name" class="is-horizontal">
<p>     {{userName}}</p>
   </b-field>
    <b-field label="Email" class="is-horizontal">
     <p>{{email}}</p>
   </b-field>
   <b-field label="Password" class="is-horizontal">
     <p>{{password}}</p>
   </b-field>
  </section>
</template>

<script>
// @ is an alias to /src
// at the most basic, a field needs name and a value
export default {
  name: "ContactView",
  props: ["firstName", "lastName", "userName", "email", "password"]
};
</script>
<style lang="css" scoped>
p {
  margin-left: 5px;
}
</style>
