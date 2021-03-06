document.addEventListener('DOMContentLoaded', () => {
  Highcharts.chart('container1', {
    chart: {
      type: 'areaspline',
      zoomType: 'xy', // 'x', 'y', or 'xy'
    },
    colors: ['#1c3', '#1ff', '#f13', '#ff2', '#333', '#590'],
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
    tooltip: {
      shared: true,
      // /** Example of how to use formatter with tooltips that are not shared */
      // formatter(){
      //   return `<strong>Values</strong><br/><em>Series:</em> ${this.point.series.name}<br/><em>X:</em> ${this.x}.<br/> <em>Y:</em> ${this.y}`
      // },

      /** Example of how to use formatter with tooltips that are shared */
      formatter(){
        let s = `<strong>X is:</strong> ${this.x} <br/> Y values:`;
        console.log(this);

        this.points.forEach(point => {
          s += `<br> <p style="color: ${point.color}">${point.series.name}: ${point.y}</p>`
        });

        return s;
      },
      animation: true,
      backgroundColor: '#333',
      borderColor: 'red',
      borderRadius: 10,
      // followPointer: true,
      style: {
        color: '#fff'
      }
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
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,        
          },
          chartOptions: {
            legend: {
              enabled: false
            },
            yAxis: {
              title: {
                text: ''
              }
            },
            credits: {
              enabled: false
            }
          }
        }
      ]
    },
    series: [
      {
        name: 'John',
        data: [1,1,1,5,7,5, 0, 1, 5, 3, 3],
        color: '#00f'
      }
      ,
      {
        name: 'Jane',
        data: [2, 4, 8, 8, 3, 3, 0, 1, 5, 3, 3],
        color: '#f0f'
      },
      {
        name: 'Jack',
        data: [2, 3, 1, 2, 3, 6, 0, 1, 5, 3, 3]
      },
      {
        name: 'Marie',
        data: [1, 1, 2, 2, 1, 7, 0, 1, 5, 3, 3]
      },
      {
        name: 'James',
        data: [1, 4, 5, 0, 0, 0, 0, 1, 5, 3, 3]
      },
      {
        name: 'Stephen',
        data: [3, 1, 1,0, 0, 0, 0, 1, 5, 3, 3]
      }
    ]
  })
  Highcharts.chart('container2', {
    chart: {
      type: 'areaspline',
      zoomType: 'xy',
    },
    title: {
      text: 'Second chart',
    },
    yAxis: {
      title: {
        text: 'Fruits Eaten',
      },
      // alternateGridColor: '#aaa'
    },
    xAxis: {
      alternateGridColor: '#aaa'
      // categories: ['Apples', 'Bananas', 'Oranges']
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,        
          },
          chartOptions: {
            legend: {
              enabled: false
            },
            yAxis: {
              title: {
                text: ''
              }
            },
            credits: {
              enabled: false
            }
          }
        }
      ]
    },
    series: [
      {
        name: 'John',
        negativeColor: 'red',
        data: [
          {
            x: 1,
            y: 5
          },
          {
            name: 'Heigh',
            color: 'green',
            x: 2,
            y: 10
          },
          {
            name: 'Low',
            color: 'red',
            x: 3,
            y: -10
          },
          {
            x: 4,
            y: 5
          }
        ]
      },
      {
        name: 'Marie',
        data: [
          {
            name: 'Low',
            color: 'red',
            x: 1,
            y: 8
          },
          {
            name: 'Heigh',
            color: 'green',
            x: 2,
            y: 20
          }
        ]
      },
      {
        name: 'Julie',
        negativeColor: 'red',
        data: [1,2,6,5,4,10,-5,0,-15,-5,15,25,0]
      }
    ]
  })
  Highcharts.chart('container3', {
    chart: {
      type: 'spline',
      zoomType: 'xy',
    },
    title: {
      text: 'Third chart',
    },
    yAxis: {
      title: {
        text: 'Fruits Eaten',
      },
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,        
          },
          chartOptions: {
            legend: {
              enabled: false
            },
            yAxis: {
              title: {
                text: ''
              }
            },
            credits: {
              enabled: false
            }
          }
        }
      ]
    },
    series: [
      {
        name: 'Fruits Consumption',
        data: [1,2,6,5,4,10,-5,0,-15,-5,15,25,0],
        zones: [
          {
            value: 0, 
            color: '#f7a35c'
          },
          {
            value: 6, 
            color: '#f7035c'
          },
          {
            color: '#00335c'
          },

        ]
      }
    ]
  })
  
  
  const containerFourOptions = {
    chart: {
      type: 'column',
      zoomType: 'xy',
    },
    title: {
      text: 'Fourth chart',
    },
    yAxis: {
      title: {
        text: 'Fruits Eaten',
      },
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,        
          },
          chartOptions: {
            legend: {
              enabled: false
            },
            yAxis: {
              title: {
                text: ''
              }
            },
            credits: {
              enabled: false
            }
          }
        }
      ]
    }
  };
  fetch('http://localhost:3333/test.csv').then(res => {
    return res.text();
  }).then(csv => {
    containerFourOptions.data = {
      csv
    };
    Highcharts.chart('container4', containerFourOptions);
  })



  const containerFiveOptions = {
    chart: {
      type: 'column',
      zoomType: 'xy',
    },
    title: {
      text: 'Fifth chart',
    },
    yAxis: {
      title: {
        text: 'Fruits Eaten',
      },
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,        
          },
          chartOptions: {
            legend: {
              enabled: false
            },
            yAxis: {
              title: {
                text: ''
              }
            },
            credits: {
              enabled: false
            }
          }
        }
      ]
    }
  };
 
  containerFiveOptions.data = {
      csvURL: 'http://localhost:3333/test.csv',
      enablePolling: true,
      dataRefreshRate: 2 // seconds
    };
    Highcharts.chart('container5', containerFiveOptions);


})