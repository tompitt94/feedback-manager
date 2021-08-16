<template>
  <canvas id="category-chart"></canvas>
</template>

<script>
import Chart from 'chart.js/auto'

export default {
  name: 'FeedbackCategoryChart',
  props: {
    categoryChartData: {
      type: Object
    }
  },
  data () {
    return {
      dataValues: this.categoryChartData
    }
  },
  // Initalise chart on mounting of app with initial data provided
  mounted () {
    this.dataValues = this.loadChart()
  },
  // Re-initialise chart if data changes
  Watch: {
    dataValues () {
      this.dataValues = this.loadChart()
    }
  },
  methods: {
    loadChart () {
      const ctx = document.getElementById('category-chart')
      var chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: Object.keys(this.dataValues),
          datasets: [
            {
              label: 'Feedback Received',
              data: Object.values(this.dataValues),
              backgroundColor: 'rgba(73,154,236,1)',
              borderColor: '#499aec',
              borderWidth: 3
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom',
              align: 'center'
            },
            title: {
              display: true,
              text: 'Feedback by Category'
            }
          },
          lineTension: 1,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  padding: 25
                }
              }
            ]
          }
        }
      })
      return chart
    }
  }
}
</script>

<style>

</style>
