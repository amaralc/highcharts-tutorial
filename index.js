document.addEventListener('DOMContentLoaded', () => {
  Highcharts.chart('container', {
    chart: {
      type: 'line',
      zoomType: 'x',
    },
    title: {
      text: 'First chart'
    },
    yAxis: {
      title: {
        text: 'Fruits Eaten',
      }
    },
    xAxis: {
      title: {text: 'Fruits'},
      categories: ['Apples', 'Bananas', 'Oranges']
    },
    series: [
      {
        name: 'John',
        data: [1,2,3]
      }
      ,
      {
        name: 'Jane',
        data: [2, 4, 8]
      }
    ]
  })
})