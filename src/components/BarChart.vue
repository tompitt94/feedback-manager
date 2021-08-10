<template>
  <canvas id="bar-chart"></canvas>
</template>

<script>
import Chart from 'chart.js/auto'

export default {
  name: 'BarChart',
  props: {
    chartdata: {
      type: Object,
      default: null,
      options: {
        type: Object,
        default: null
      }
    }
  },
  mounted () {
    const ctx = document.getElementById('bar-chart')
    var chart = new Chart(ctx, this.chartData)
    return chart
  }
}
</script>

<style>

</style>
