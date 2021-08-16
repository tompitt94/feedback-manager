<template>
  <form @submit.prevent="filterFeedback">
    <div class="field is-grouped is-justify-content-space-evenly">
      <!-- Receives list of marketplaces via Prop from FeedbackView -->
      <div class="field">
        <label class="label">Select Marketplace:</label>
          <div class="select is-fullwidth">
            <select v-model="selectedMp">
              <option default>All</option>
              <option v-for="channel in channels" :key="channel" :value="channel">{{ channel }}</option>
            </select>
          </div>
      </div>
      <!-- Select Date range to search -->
      <div class="field">
        <label class="label">Date Range:</label>
          <div class="select is-fullwidth">
            <select v-model="dayRange">
              <option default selected value="30">30 Days</option>
              <option value="60">60 Days</option>
              <option value="90">90 Days</option>
              <option value="365">1 Year</option>
            </select>
          </div>
      </div>
      <!-- search directly by order ID -->
      <div class="field">
        <label class="label">Order ID:</label>
        <div class="control">
          <input class="input" type="text" placeholder="Order ID" v-model="orderId">
        </div>
      </div>
      <div class="field">
        <label class="label"></label>
        <div class="control">
          <button class="button is-info mt-5" type="submit">Search</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'FeedbackFilter',
  props: {
    marketplaces: {
      type: Object
    }
  },
  data () {
    return {
      channels: this.marketplaces,
      selectedMp: 'All',
      dayRange: 30,
      orderId: ''
    }
  },
  methods: {
    filterFeedback () {
      const filterData = {
        marketplace: this.selectedMp,
        days: this.dayRange,
        id: this.orderId
      }
      this.$emit('filterFeedback', { filterData })
    }
  }
}
</script>

<style>

</style>
