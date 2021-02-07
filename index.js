document.addEventListener('DOMContentLoaded', () => {
  Highcharts.chart('container', {
    chart: {
      type: 'areaspline',
      zoomType: 'x',
    },
    credits: {
      // enabled: false
      text: 'My custom credit',
      href: 'https://google.com',
      position: {
        align: 'left',
        x: 10
      },
      style: {
        fontSize: "10px",
        color: '#f00',
      }
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
        data: [1,1,1,5,7,5]
      }
      ,
      {
        name: 'Jane',
        data: [2, 4, 8, 8, 3, 3]
      },
      {
        name: 'Jack',
        data: [2, 3, 1, 2, 3, 6]
      },
      {
        name: 'Marie',
        data: [1, 1, 2, 2, 1, 7]
      },
      {
        name: 'James',
        data: [1, 4, 5, 0, 0, 0]
      },
      {
        name: 'Stephen',
        data: [3, 1, 1,0, 0, 0]
      }
    ]
  })
})