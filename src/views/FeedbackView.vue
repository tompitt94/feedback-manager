<template>
  <div class="container">
    <div class="section">
      <feedback-filter
        :marketplaces="channelList"
      />
      <div class="columns">
        <div class="column">
        <feedback-received-chart/>
        </div>
        <div class="column">
         <feedback-category-chart/>
        </div>
      </div>
    </div>
    <div class="section">
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
import FeedbackData from '../data/FeedbackData.json'
// @ is an alias to /src

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
      feedbacks: FeedbackData
    }
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
