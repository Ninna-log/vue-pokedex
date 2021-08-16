<template>
  <div class="input-group input-group-sm mb-3">
    <span class="input-group-text" id="inputGroup-sizing-sm">🧐</span>
    <input
      class="form-control"
      ref="input"
      type="text"
      v-model="searchQuery"
      placeholder="Search"
      @keyup.enter="onClickSearch"
    />
  </div>
</template>


<script>
import _ from "lodash";

export default {
  name: "SearchBar",
  data() {
    return {
      searchQuery: "",
    };
  },
  watch: {
    searchQuery: {
      handler: _.debounce(function (val) {
        if (val === "") {
          this.$store.commit("ON_CLEAR_SEARCH");
        } else {
          if (val !== this.newSearchQuery) {
            this.onClickSearch();
          }
        }
      }, 1500),
    },
    newSearchQuery(val) {
      this.searchQuery = val;
    },
  },
  methods: {
    onClickSearch() {
      this.$emit("clickSearch", this.searchQuery);
    },
  },
};
</script>

<style scoped>
input:focus {
  outline: none !important;
  outline-width: 0 !important;
  outline-color: none;
  box-shadow: none;
  -moz-box-shadow: #fff;
  -webkit-box-shadow: none;
}

div {
  background-color: #ffff;
  margin-top: 50px;
  box-shadow: 0 1px 8px 0 rgb(18 18 18 / 20%);
}
</style>
