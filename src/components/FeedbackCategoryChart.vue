<template>
  <canvas id="category-chart"></canvas>
</template>

<script>
import Chart from 'chart.js/auto'
import categoryData from '@/data/category-chart-data.js'

export default {
  name: 'FeedbackCategoryChart',
  data () {
    return {
      categoryData: categoryData
    }
  },
  mounted () {
    const ctx = document.getElementById('category-chart')
    var chart = new Chart(ctx, this.categoryData)
    return chart
  }
}
</script>

<style>

</style>
