<template>
  <div class="field is-grouped is-grouped-centered">
    <div class="field mr-2">
      <label class="label">Select Marketplace:</label>
        <div class="select is-fullwidth">
          <select v-model="selectedMp">
            <option default>All</option>
            <option v-for="channel in channels" :key="channel" :value="channel">{{ channel }}</option>
          </select>
        </div>
    </div>
    <div class="field mr-2">
      <label class="label">Date From:</label>
      <div class="control">
        <input class="input is-normal" type="date" v-model="fromDate">
      </div>
    </div>
    <div class="field mr-2">
      <label class="label">Date To:</label>
      <div class="control">
        <input class="input is-normal" type="date" v-model="toDate">
      </div>
    </div>
    <div class="field mr-2">
      <label class="label"></label>
      <div class="control">
        <button class="button is-info mt-5" type="submit">Search</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterBar',
  props: {
    marketplaces: {
      type: Object
    }
  },
  data () {
    return {
      channels: this.marketplaces,
      selectedMp: 'All',
      fromDate: '',
      toDate: ''
    }
  }
}
</script>

<style>

</style>
