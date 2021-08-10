export const receivedData = {
  type: 'line',
  data: {
    labels: ['Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
    datasets: [
      {
        label: 'Feedback Received',
        data: [7, 18, 9, 10, 13, 14],
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
        text: 'Feedback Received'
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

export default receivedData
