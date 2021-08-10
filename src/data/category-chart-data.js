export const categoryData = {
  type: 'bar',
  data: {
    labels: ['Delivery', 'Returns', 'Product', 'Customer Service', 'Cancellation', 'Other'],
    datasets: [
      {
        label: 'Feedback Received',
        data: [10, 8, 2, 0, 1, 0],
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
        position: 'bottom'
      },
      title: {
        display: true,
        text: 'Category'
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
}

export default categoryData
