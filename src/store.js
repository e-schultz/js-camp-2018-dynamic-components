import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    schemas: {
      address: [
        {
          fieldType: "TextInput",
          name: "street1",
          props: {
            label: "Street Address"
          }
        },
        {
          fieldType: "TextInput",
          name: "street2",
          props: {}
        },
        {
          fieldType: "Dropdown",
          name: "country",
          props: {
            label: "Country",
            options: ["Canada", "United States", "Spain"]
          }
        },
        {
          fieldType: "TextInput",
          name: "province",
          props: {
            label: "Province/State"
          }
        },
        {
          fieldType: "TextInput",
          name: "postalCode",
          props: {
            label: "Postal Code"
          }
        }
      ],
      contact: [
        {
          fieldType: "TextInput",
          name: "firstName",
          props: { label: "First Name", placeholder: "Enter First Name" }
        },
        {
          fieldType: "TextInput",
          name: "lastName",
          props: { label: "Last Name" }
        },
        {
          fieldType: "TextInput",
          name: "userName",
          props: {
            label: "User Name",
            maxlength: 30,
            minlength: 3
          }
        },
        {
          fieldType: "EmailInput",
          name: "email",
          props: {
            label: "Email"
          }
        },
        {
          fieldType: "PasswordInput",
          name: "password",
          props: {
            label: "Password"
          }
        }
      ]
    }
  },
  mutations: {
    addField: function(state, { schemaName, field }) {
      state.schemas[schemaName] = [...state.schemas[schemaName], field];
    },
    emptySchema: function(state, { schemaName }) {
      state.schemas[schemaName] = [];
    },
    changeType: function(state, { schemaName, oldType, newType }) {
      state.schemas[schemaName] = state.schemas[schemaName].map(n => {
        if (n.fieldType === oldType || !oldType) {
          n.fieldType = newType;
        }
        return n;
      });
    }
  }
});
