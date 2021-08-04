<template>
  <div>
    <img src="@/assets/search-icon.png" alt="search-icon">
    <input
      ref="input"
      type="text"
      v-model="searchQuery"
      placeholder="Search"
      @keyup.enter="onClickSearch"
    />
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: "SearchBar",
  data() {
    return {
      searchQuery: '',
    };
  },
  watch: {
    searchQuery: {
      handler: _.debounce(function () {
            this.onClickSearch()
      }, 1500)
    },
    newSearchQuery (val) {
      this.searchQuery = val
    }
  },
  methods: {    
    onClickSearch () {
      this.$emit('clickSearch', this.searchQuery)
    },
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

div {
  display: inline-table;
  background-color: #ffff;
  margin-top: 50px;
  box-shadow: 0 1px 8px 0 rgb(18 18 18 / 20%);
}

div.active label {
  -webkit-transform: translate(16px, 8px) scale(0.75);
  transform: translate(16px, 8px) scale(0.75);
}

</style>
