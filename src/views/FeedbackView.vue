<template>
  <div class="container">
    <div class="section">
      <!-- Filter Bar to refine search for feedback information by marketplace, date range or order ID
      Need to check if worth having multiple emits from Filter based on search params is best way to handle API requests-->
      <feedback-filter
        :marketplaces=" channelList"
      />
      <div class="columns">
        <div class="column">
          <!-- Chart showing number of feedback recieved on any given day -->
          <feedback-received-chart
            :receivedChartData="receivedData"
          />
        </div>
        <div class="column">
          <!-- Chart showing number of feedback per category -->
          <feedback-category-chart
            :categoryChartData="categoryData"
          />
        </div>
      </div>
    </div>
    <div class="section">
      <!-- Shows list of feedbacks associated to seach values - initial load will show all feedback for the past 30 days -->
      <feedback-list
        :Feedbacks="this.feedbacks"
      />
    </div>
  </div>
</template>

<script>
import FeedbackCategoryChart from '../components/FeedbackCategoryChart.vue'
import FeedbackList from '../components/FeedbackList.vue'
import FeedbackFilter from '../components/FeedbackFilter.vue'
import FeedbackReceivedChart from '../components/FeedbackReceivedChart.vue'
// To be removed and replaced with Axios API calls
import FeedbackData from '../data/FeedbackData.json'

export default {
  name: 'FeedbackView',
  components: {
    FeedbackFilter,
    FeedbackCategoryChart,
    FeedbackList,
    FeedbackReceivedChart
  },
  data () {
    return {
      feedbacks: FeedbackData,
      dayRange: 30
    }
  },
  mounted () {
    document.title = 'Feedback Stats'

    // initial load will show all feedback for the past 30 days
  },
  computed: {
    // Provides list of identifed marketplaces in feebacks to FeedbackFilter component to avoid having to list all marketplaces
    channelList () {
      const distinctChannels = [...new Set(this.feedbacks.map(x => x.marketplace).sort())]

      return distinctChannels
    },
    // Calculates how many feedback per category and passes an object, sent to the FeedbackCategoryChart component via prop
    categoryData () {
      var res = this.feedbacks.reduce(function (obj, v) {
        obj[v.category] = (obj[v.category] || 0) + 1
        return obj
      }, {})
      return res
    },
    // Calculates how many feedback received per date and passes an object, sent to the FeedbackReceivedChart component via prop
    receivedData () {
      var res = this.feedbacks.reduce(function (obj, v) {
        obj[v.date] = (obj[v.date] || 0) + 1
        return obj
      }, {})
      // sorts by date before returning final result
      var sorted = Object.keys(res).sort().reduce(
        (obj, key) => {
          obj[key] = res[key]
          return obj
        },
        {}
      )
      return sorted
    }
  }
}
</script>
