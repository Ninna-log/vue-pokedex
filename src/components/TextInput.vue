<template>
  <div class="container float-container" v-bind:class="{ active: value || focused }">
    <img src="@/assets/search-icon.png" alt="search-icon">
    <input
      ref="input"
      type="search"
      :value="value"
      :pattern="pattern"
      :inputmode="inputmode"
      :maxlength="maxlength"
      v-on:keypress="filter($event)"
      @blur="onBlur"
      @focus="onFocus"
      @input="onInput"
      @click="$emit('click')"
    />
  </div>
</template>

<script>
export default {
  name: "text-input",
  props: {
    hint: String,
    label: String,
    value: String,
    pattern: String,
    inputmode: String,
    maxlength: String,
    subhint: String,
    validationError: String,
    scrollOnFocus: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      tmpHint: "",
      actualHint: this.hint,
      focused: false
    };
  },
  replace: false,
  methods: {
    onInput(e) {
      // Función para reemplazar caracteres acentuados
      let stripAccents = (function() {
        let in_chrs = "àáâãäçèéêëìíîïñòóôõöùúûüýÿÀÁÂÃÄÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÝ",
          out_chrs = "aaaaaceeeeiiiinooooouuuuyyAAAAACEEEEIIIINOOOOOUUUUY",
          chars_rgx = new RegExp("[" + in_chrs + "]", "g"),
          transl = {},
          i,
          lookup = m => transl[m] || m;

        for (i = 0; i < in_chrs.length; i++) {
          transl[in_chrs[i]] = out_chrs[i];
        }

        return s => s.replace(chars_rgx, lookup);
      })();

      // No permitir caracteres acentuados
      e.target.value = stripAccents(e.target.value);
      this.$emit("input", e.target.value);
    },
    onBlur(e) {
      this.focused = false;
      this.$emit("onBlur");
      if (!e.target.value) {
        setTimeout(() => (this.tmpHint = ""), 180);
      }
    },
    onFocus() {
      this.focused = true;
      this.$emit("onFocus");
      setTimeout(() => (this.tmpHint = this.actualHint), 180);
      /* Animar viewport para que el elemento quede arriba
      70 = alto de topbar + padding */
      if (this.scrollOnFocus) {
        window.scroll({
          top: this.$el.offsetTop - 70,
          left: 0,
          behavior: "smooth"
        });
      }
    },
    _focus() {
      /* Forzar el foco en el elemento
      método útil para que usen elementos padres */
      this.$refs.input.focus();
    }
  }
};
</script>

<style scoped>
input {
  /* Dar un poco de espacio para "centrar" el texto verticalmente */
  border-top: 17px solid transparent;
  border: none;
  height: 27px;
}

img {
    padding: 6px 6px 0;
}

input:focus {
    outline: none;
}

div.float-container {
  display: inline-table;
  background-color: #ffff;
  margin-top: 50px;
  box-shadow: 0 1px 8px 0 rgb(18 18 18 / 20%);
}

div.float-container.active label {
  -webkit-transform: translate(16px, 8px) scale(0.75);
  transform: translate(16px, 8px) scale(0.75);
}

</style>
