<template>
<section class="card">
  <div class="card-header">
    <div class="card-header-title">
      Add New Field
    </div>
  </div>
  <div class="card-content">
    <text-input label="Label" v-model="field.props.label"></text-input>
    <text-input label="Placeholder" v-model="field.props.placeholder"></text-input>
    <text-input label="name" v-model="field.name"></text-input>
    <select-list label="Field Type" :options="registeredComponents" v-model="field.fieldType"></select-list>
    <b-field label="Options" v-if="field.props.options.length >0">
    </b-field>
    <b-field v-if="field.props.options.length >0" v-for="(option,index) in field.props.options" :key="index">
      <b-input v-model="field.props.options[index]"></b-input>
    </b-field>
    <text-input label="Add Option" v-model="newOption" @enter="addOption($event)"></text-input>
    <br/>
  </div>
  <div class="card-footer">
    <div class="card-footer-item">
      <button class="button is-dark" @click="addFieldToSchema">
        <b-icon icon="check"></b-icon>
        <span>Add Field</span>
      </button>
    </div>
    <div class="card-footer-item">
      <button class="button is-dark" @click="emptySchema">
        <b-icon icon="check"></b-icon>
        <span>Empty Schema</span>
      </button>
    </div>
    <div class="card-footer-item">
      <button class="button is-primary" @click="rebuildSchema">
        <b-icon icon="check"></b-icon>
        <span>Rebuild Schema</span>

      </button>
    </div>

  </div>
  <br/>
  <b-collapse class="card">
    <div slot="trigger" slot-scope="props" class="card-header">
      <p class="card-header-title">
        Something Silly
      </p>
      <a class="card-header-icon">
        <b-icon :icon="props.open ? 'menu-down' : 'menu-up'">
        </b-icon>
      </a>
    </div>
    <div class="card-content">
      Change all:
      <select-list label="Field Type" :options="registeredComponents" v-model="oldType"></select-list>
      To:
      <select-list label="Field Type" :options="registeredComponents" v-model="newType"></select-list>
      <button class="button is-primary" @click="updateAll(oldType,newType)">
        <b-icon icon="check"></b-icon>
        <span>Go!</span>

      </button>
    </div>
  </b-collapse>
</section>
</template>

<script>
function itemFactory(fieldType, name, label, props = {}) {
  return {
    fieldType,
    name,
    props: {
      label,
      ...props
    }
  };
}
export default {
  name: "SchemaEdit",
  components: {
    TextInput: () => import("@/components/FormControls/TextInput"),
    PasswordInput: () => import("@/components/FormControls/PasswordInput"),
    SelectList: () => import("@/components/FormControls/SelectList"),
    EmailInput: () => import("@/components/FormControls/EmailInput"),
    SwitchToggle: () => import("@/components/FormControls/SwitchToggle")
  },
  props: ["schemaName", "value"],
  data() {
    return {
      newOption: undefined,
      oldType: undefined,
      newType: undefined,
      field: {
        name: undefined,
        props: {
          label: undefined,
          placeholder: undefined,
          options: []
        },
        fieldType: undefined
      },
      registeredComponents: [
        "",
        "TextInput",
        "PasswordInput",
        "SelectList",
        "EmailInput",
        "SwitchToggle",
        "Dropdown"
      ]
    };
  },
  computed: {
    schema: function() {
      return this.$store.state.schemas[this.schemaName];
    }
  },
  methods: {
    updateAll(oldType, newType) {
      this.$store.commit("changeType", {
        schemaName: this.schemaName,
        oldType,
        newType
      });
    },
    addOption(value) {
      this.field.props.options = [...this.field.props.options, value];
      this.newOption = undefined;
    },
    addFieldToSchema() {
      let { props, fieldType, name } = this.field;
      this.$store.commit("addField", {
        schemaName: this.schemaName,
        field: {
          fieldType,
          name,
          props
        }
      });
    },
    emptySchema() {
      this.$store.commit("emptySchema", { schemaName: this.schemaName });
    },
    rebuildSchema() {
      let newSchema = [
        itemFactory("TextInput", "firstName", "First Name"),
        itemFactory("TextInput", "lastName", "Last Name"),
        itemFactory("TextInput", "userName", "User Name", { maxlength: 30 }),
        itemFactory("EmailInput", "email", "Email"),
        itemFactory("PasswordInput", "password", "Password")
      ];
      let x = 0;
      let vm = this;
      newSchema.forEach(field => {
        setTimeout(function() {
          vm.$store.commit("addField", {
            schemaName: "contact",
            field
          });
        }, x);
        x = x + 500;
      });
    },
    updateForm(fieldName, value) {
      this.$set(this.formData, fieldName, value);
      this.$emit("input", this.formData);
    }
  }
};
</script>
