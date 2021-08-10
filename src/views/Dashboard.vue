<template>
  <div class="container">
    <div class="section">
      <filter-bar
        :marketplaces="channelList"
      />
      <div class="columns">
        <div class="column">
        <received-chart/>
        </div>
        <div class="column">
         <category-chart/>
        </div>
      </div>
    </div>
    <div class="section">
      <feedback-list/>
    </div>
  </div>
</template>

<script>
import CategoryChart from '../components/CategoryChart.vue'
import FeedbackList from '../components/FeedbackList.vue'
import FilterBar from '../components/FilterBar.vue'
import ReceivedChart from '../components/ReceivedChart.vue'
import FeedbackData from '../data/FeedbackData.json'
// @ is an alias to /src

export default {
  name: 'Dashboard',
  components: {
    FilterBar,
    CategoryChart,
    FeedbackList,
    ReceivedChart
  },
  computed: {
    channelList () {
      const array = FeedbackData
      const distinctChannels = [...new Set(array.map(x => x.marketplace).sort())]

      return distinctChannels
    }
  }
}
</script>
