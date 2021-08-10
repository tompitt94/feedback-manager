<template>
  <div class="field is-grouped is-grouped-centered">
    <div class="field mr-2">
      <label class="label">Select Marketplace:</label>
        <div class="select is-fullwidth">
          <select>
            <option default selected>All</option>
            <option v-for="channel in channels" :key="channel">{{ channel }}</option>
          </select>
        </div>
    </div>
    <div class="field mr-2">
      <label class="label">Date From:</label>
      <div class="control">
        <input class="input is-normal" type="date" required>
      </div>
    </div>
    <div class="field mr-2">
      <label class="label">Date To:</label>
      <div class="control">
        <input class="input is-normal" type="date" required>
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
      channels: this.marketplaces
    }
  }
}
</script>

<style>

</style>
