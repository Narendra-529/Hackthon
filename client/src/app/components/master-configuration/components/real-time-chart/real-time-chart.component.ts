// src/app/real-time-chart/real-time-chart.component.ts
import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js/auto';
// import 'chartjs-plugin-streaming';

import StreamingPlugin from 'chartjs-plugin-streaming';
import 'chartjs-adapter-moment'; 
import { AlertService } from '../../services/alert.service';
import { Subscription } from 'rxjs';
import zoomPlugin from 'chartjs-plugin-zoom';
import annotationPlugin from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-real-time-chart',
  templateUrl: './real-time-chart.component.html',
  styleUrls: ['./real-time-chart.component.scss']
})
export class RealTimeChartComponent implements OnInit,OnDestroy, AfterViewInit {
  public chart: any;
  private intervalId: any;
  private data: number[] = [];
  private timeoutId: any;
  private dataSubscription: Subscription | undefined;
  @Input() dataSource:any
  constructor(private alertService:AlertService){
    
  }

  ngOnInit(): void {
    // Register all necessary components and plugins
    Chart.register(...registerables, StreamingPlugin,annotationPlugin,zoomPlugin);
    this.initializeChart(this.dataSource.formData.triggers[0].value,this.dataSource.formData.triggers[0].element+ ' in ' + this.dataSource.formData.triggers[0].unit);
    this.dataSubscription=this.alertService.insertedData.subscribe((data) => {
      console.log("Inserted data",data)
      // this.recorsInserted.push(data);

      this.lastDataTime = Date.now();
      if (this.chart) {
        this.updateChart(data);
        this.resetInactivityTimer(); // Reset inactivity timer on new data
      }
      // this.lastDataTime = Date.now();
      //   if (this.chart) {
      //     this.updateChart(data);
      //   }
    
      // chart.data.datasets.forEach((dataset: any) => {
      //   dataset.data.push({
      //     x: Date.now(),
      //     y: Math.random() * 100
      //   });
      // });
      });
      this.startInactivityTimer();
  }
  private lastDataTime: number = Date.now();
  // private timeoutId: any;
  private inactivityTimeout: any;

  resetInactivityTimer(): void {
    // Clear the existing inactivity timer and restart it
    if (this.inactivityTimeout) {
      clearInterval(this.inactivityTimeout);
    }
    this.startInactivityTimer();
    this.resumeUpdatingChart();
  }

  ngAfterViewInit(): void {
    // Set canvas height after view initialization
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    canvas.style.height = '400px';
  }

  initializeChart(threshold, ylabel): void {
    console.log(threshold)
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Real-Time Data',
            borderColor: '#3cba9f',
            fill: false,
            data: []
          }
        ]
      },
      options: {
        scales: {
          x: {
            type: 'realtime',
            realtime: {
              duration: 40000,
              refresh: 1000,
              delay: 0,
              pause: false,
              onRefresh: ()=>{}
            },
            title: {
              display: true,
              text: 'Time'
            },
            time: {
              unit: 'second', // Display units as seconds
              // stepSize: 1,
              displayFormats: {
                second: 'h:mm:ss' // Ensure seconds are displayed correctly
              }
            },
            
            ticks: {
              autoSkip: false, // Ensure no auto-skipping of ticks
              source: 'auto',   // Use auto source for ticks
              stepSize: 1       // Step size for each tick is 1 second
            }
          },
          
          y: {
            beginAtZero: true,
            suggestedMax: threshold+10,
            title: {
              display: true,
              text: ylabel
            }
          }
        },
        plugins: {
          annotation: {
            annotations: {
              line1: {
                type: 'line',
                yMin: threshold,
                yMax: threshold,
                borderColor: 'red',
                borderWidth: 2,
                label: {
                  content: 'Threshold',
                  position: 'end',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  font: {
                    size: 12
                  },
                  yAdjust: 10,
                }
                
              }
            }
          },
          zoom: {
            zoom: {
              // enabled: true,
              mode: 'x',
              // speed: 0.1
            },
            pan: {
              enabled: true,
              mode: 'x',
            }
          },
          // tooltip: {
          //   enabled: true,
          //   mode: 'index', // 'index' or 'nearest'
          //   intersect: false,
          //   callbacks: {
          //     label: function(context) {
          //       return `X: ${new Date(context.parsed.x).toLocaleTimeString()}, Y: ${context.parsed.y}`;
          //     }
          //   }
          // },
        }
      }
    });
    this.startUpdatingChart();

    // Stop updating after 20 seconds
    // this.timeoutId = setTimeout(() => {
    //   this.stopUpdatingChart();
    // }, 10000); // 20 seconds
  }

  startUpdatingChart(): void {
    this.intervalId = setInterval(() => {
      if (this.chart) {
        this.chart.update();
      }
    }, 1000); // Update every second
  }

  // stopUpdatingChart(): void {
  //   if (this.intervalId) {
  //     this.chart.options.scales.x.realtime.pause = true;
  //     this.chart.update();
  //     clearInterval(this.intervalId);
  //   }
  // }

  updateChart(chart: any): void {
    // chart.data.datasets.forEach((dataset: any) => {
    //   dataset.data.push({
    //     x: Date.now(),
    //     y: Math.random() * 100
    //   });
    // });
    console.log(chart)
    if (this.chart) {
      this.chart.data.datasets[0].data.push({
        x: Date.now(),
        y: chart.value
      });
      this.chart.update();
    }
  }

  stopUpdatingChart(): void {
    // if (this.timeoutId) {
    //   clearTimeout(this.timeoutId);
    // }
    // if (this.chart) {
    //   this.chart.options.scales.x.realtime.pause = true;
    //   this.chart.update();
    // }

    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    if (this.inactivityTimeout) {
      clearInterval(this.inactivityTimeout);
    }
    if (this.chart) {
      // this.chart.options.scales.x.realtime.pause = true;
      // this.chart.update();
      this.chart.options.scales.x.realtime.pause = true;
      this.chart.update();
      this.isPaused = true; 
    }
  }

  ngOnDestroy(): void {
    // if (this.dataSubscription) {
    //   this.dataSubscription.unsubscribe();
    // }
    // if (this.timeoutId) {
    //   clearTimeout(this.timeoutId);
    // }

    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
    if (this.inactivityTimeout) {
      clearInterval(this.inactivityTimeout);
    }
  }

  startInactivityTimer(): void {
    this.inactivityTimeout = setInterval(() => {
      if (Date.now() - this.lastDataTime > 5000) { // 5 seconds
        this.stopUpdatingChart();
      }
    }, 1000); // Check every second
  }
  private isPaused: boolean = false;

  resumeUpdatingChart(): void {
    if (this.chart && this.isPaused) {
      this.chart.options.scales.x.realtime.pause = false;
      this.chart.update();
      this.isPaused = false; // Track that the chart is resumed
    }
  }

  // ngOnDestroy(): void {
  //   if (this.intervalId) {
  //     clearInterval(this.intervalId);
  //   }
  // }
}
