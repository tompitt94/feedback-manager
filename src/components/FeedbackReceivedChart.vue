<template>
  <canvas id="received-chart"></canvas>
</template>

<script>
import Chart from 'chart.js/auto'
import receivedData from '@/data/received-data.js'

export default {
  name: 'FeedbackReceivedChart',
  data () {
    return {
      receivedData: receivedData
    }
  },
  mounted () {
    const ctx = document.getElementById('received-chart')
    var chart = new Chart(ctx, this.receivedData)
    return chart
  }
}
</script>

<style>

</style>
