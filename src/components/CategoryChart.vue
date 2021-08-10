<template>
  <bar-chart
    v-if="loaded"
    :chartdata="this.chartData"
  />
</template>

<script>
import categoryData from '@/data/category-chart-data.js'
import BarChart from './BarChart.vue'

export default {
  name: 'CategoryChart',
  components: {
    BarChart
  },
  data () {
    return {
      loaded: false,
      chartData: null
    }
  },
  async mounted () {
    this.loaded = false
    try {
      this.chartdata = categoryData
      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style>

</style>
