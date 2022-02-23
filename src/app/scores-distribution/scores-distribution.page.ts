import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SegmentChangeEventDetail } from '@ionic/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-scores-distribution',
  templateUrl: './scores-distribution.page.html',
  styleUrls: ['./scores-distribution.page.scss'],
})
export class ScoresDistributionPage implements OnInit {

  @ViewChild('scoredLineCanvas0',{static: false}) private scoredLineCanvas0: ElementRef;
  @ViewChild('scoredLineCanvas1',{static: false}) private scoredLineCanvas1: ElementRef;
  @ViewChild('scoredLineCanvas2',{static: false}) private scoredLineCanvas2: ElementRef;
  @ViewChild('scoredLineCanvas3',{static: false}) private scoredLineCanvas3: ElementRef;
  @ViewChild('scoredLineCanvas4',{static: false}) private scoredLineCanvas4: ElementRef;
  @ViewChild('scoredLineCanvas5',{static: false}) private scoredLineCanvas5: ElementRef;

  @ViewChild('receivedLineCanvas0',{static: false}) private receivedLineCanvas0: ElementRef;
  @ViewChild('receivedLineCanvas1',{static: false}) private receivedLineCanvas1: ElementRef;
  @ViewChild('receivedLineCanvas2',{static: false}) private receivedLineCanvas2: ElementRef;
  @ViewChild('receivedLineCanvas3',{static: false}) private receivedLineCanvas3: ElementRef;
  @ViewChild('receivedLineCanvas4',{static: false}) private receivedLineCanvas4: ElementRef;
  @ViewChild('receivedLineCanvas5',{static: false}) private receivedLineCanvas5: ElementRef;
  mode: any;

  line0: any;
  line1: any;
  line2: any;
  line3: any;
  line4: any;
  line5: any;

  rLine0: any;
  rLine1: any;
  rLine2: any;
  rLine3: any;
  rLine4: any;
  rLine5: any;

  constructor(public http: HttpClient, private navCtrl: NavController) { }



  ngOnInit() {
    this.mode = 'Scored';
    this.createScoredLineChart0();
    this.createScoredLineChart1();
    this.createScoredLineChart2();
    this.createScoredLineChart3();
    this.createScoredLineChart4();
    this.createScoredLineChart5();
  }

  createScoredLineChart0() {
    this.http.get('http://127.0.0.1:8105/getScoredGoalsInPeriod/?period=0').subscribe(
      (res: any)=>{
        this.line0 = new Chart(this.scoredLineCanvas0.nativeElement, {
          type: 'line',
          data: {
            labels: ['13-14', '14-15', '15-16', '16-17', '17-18', '18-19', '19-20', '20-21'],
            datasets: [{
              label: 'goals scored between 1\' and 15\'',
              data: [res[0], res[1], res[2], res[3], res[4], res[5], res[6], res[7]],
              backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
              borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });
      }
    );
  }

  createScoredLineChart1() {
    this.http.get('http://127.0.0.1:8105/getScoredGoalsInPeriod/?period=1').subscribe(
      (res: any)=>{
        this.line1 = new Chart(this.scoredLineCanvas1.nativeElement, {
          type: 'line',
          data: {
            labels: ['13-14', '14-15', '15-16', '16-17', '17-18', '18-19', '19-20', '20-21'],
            datasets: [{
              label: 'goals scored between 16\' and 30\'',
              data: [res[0], res[1], res[2], res[3], res[4], res[5], res[6], res[7]],
              backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
              borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });
      }
    );
  }

    createScoredLineChart2()
    {
      this.http.get('http://127.0.0.1:8105/getScoredGoalsInPeriod/?period=2').subscribe(
        (res: any)=>{
          this.line2 = new Chart(this.scoredLineCanvas2.nativeElement, {
            type: 'line',
            data: {
              labels: ['13-14', '14-15', '15-16', '16-17', '17-18', '18-19', '19-20', '20-21'],
              datasets: [{
                label: 'goals scored between 31\' and 45\'',
                data: [res[0], res[1], res[2], res[3], res[4], res[5], res[6], res[7]],
                backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
                borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }
          });
        }
      );

    }
    createScoredLineChart3()
    {
      this.http.get('http://127.0.0.1:8105/getScoredGoalsInPeriod/?period=3').subscribe(
        (res: any)=>{
          this.line3 = new Chart(this.scoredLineCanvas3.nativeElement, {
            type: 'line',
            data: {
              labels: ['13-14', '14-15', '15-16', '16-17', '17-18', '18-19', '19-20', '20-21'],
              datasets: [{
                label: 'goals scored between 46\' and 60\'',
                data: [res[0], res[1], res[2], res[3], res[4], res[5], res[6], res[7]],
                backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
                borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }
          });
        }
      );
    }

    createScoredLineChart4()
    {
      this.http.get('http://127.0.0.1:8105/getScoredGoalsInPeriod/?period=4').subscribe(
        (res: any)=>{
          this.line4 = new Chart(this.scoredLineCanvas4.nativeElement, {
            type: 'line',
            data: {
              labels: ['13-14', '14-15', '15-16', '16-17', '17-18', '18-19', '19-20', '20-21'],
              datasets: [{
                label: 'goals scored between 61\' and 75\'',
                data: [res[0], res[1], res[2], res[3], res[4], res[5], res[6], res[7]],
                backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
                borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }
          });
        }
      );

    }
    createScoredLineChart5()
    {
      this.http.get('http://127.0.0.1:8105/getScoredGoalsInPeriod/?period=5').subscribe(
        (res: any)=>{
          this.line5 = new Chart(this.scoredLineCanvas5.nativeElement, {
            type: 'line',
            data: {
              labels: ['13-14', '14-15', '15-16', '16-17', '17-18', '18-19', '19-20', '20-21'],
              datasets: [{
                label: 'goals scored between 76\' and 90\'',
                data: [res[0], res[1], res[2], res[3], res[4], res[5], res[6], res[7]],
                backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
                borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }
          });
        }
      );

    }

    createReceivedLineChart0()
    {
      this.http.get('http://127.0.0.1:8105/getReceivedGoalsInPeriod/?period=0').subscribe(
        (res: any)=>{
          this.rLine0 = new Chart(this.receivedLineCanvas0.nativeElement, {
            type: 'line',
            data: {
              labels: ['13-14', '14-15', '15-16', '16-17', '17-18', '18-19', '19-20', '20-21'],
              datasets: [{
                label: 'goals received between 1\' and 15\'',
                data: [res[0], res[1], res[2], res[3], res[4], res[5], res[6], res[7]],
                backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
                borderColor: 'rgb(252, 3, 53)',// array should have same number of elements as number of dataset
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }
          });
        }
      );

    }
    createReceivedLineChart1()
    {
      this.http.get('http://127.0.0.1:8105/getReceivedGoalsInPeriod/?period=1').subscribe(
        (res: any)=>{
          this.rLine1 = new Chart(this.receivedLineCanvas1.nativeElement, {
            type: 'line',
            data: {
              labels: ['13-14', '14-15', '15-16', '16-17', '17-18', '18-19', '19-20', '20-21'],
              datasets: [{
                label: 'goals received between 16\' and 30\'',
                data: [res[0], res[1], res[2], res[3], res[4], res[5], res[6], res[7]],
                backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
                borderColor: 'rgb(252, 3, 53)',// array should have same number of elements as number of dataset
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }
          });
        }
      );

    }
    createReceivedLineChart2()
    {
      this.http.get('http://127.0.0.1:8105/getReceivedGoalsInPeriod/?period=2').subscribe(
        (res: any)=>{
          this.rLine2 = new Chart(this.receivedLineCanvas2.nativeElement, {
            type: 'line',
            data: {
              labels: ['13-14', '14-15', '15-16', '16-17', '17-18', '18-19', '19-20', '20-21'],
              datasets: [{
                label: 'goals received between 31\' and 45\'',
                data: [res[0], res[1], res[2], res[3], res[4], res[5], res[6], res[7]],
                backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
                borderColor: 'rgb(252, 3, 53)',// array should have same number of elements as number of dataset
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }
          });
        }
      );

    }
    createReceivedLineChart3()
    {
      this.http.get('http://127.0.0.1:8105/getReceivedGoalsInPeriod/?period=3').subscribe(
        (res: any)=>{
          this.rLine3 = new Chart(this.receivedLineCanvas3.nativeElement, {
            type: 'line',
            data: {
              labels: ['13-14', '14-15', '15-16', '16-17', '17-18', '18-19', '19-20', '20-21'],
              datasets: [{
                label: 'goals received between 46\' and 60\'',
                data: [res[0], res[1], res[2], res[3], res[4], res[5], res[6], res[7]],
                backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
                borderColor: 'rgb(252, 3, 53)',// array should have same number of elements as number of dataset
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }
          });
        }
      );

    }
    createReceivedLineChart4()
    {
      this.http.get('http://127.0.0.1:8105/getReceivedGoalsInPeriod/?period=4').subscribe(
        (res: any)=>{
          this.rLine4 = new Chart(this.receivedLineCanvas4.nativeElement, {
            type: 'line',
            data: {
              labels: ['13-14', '14-15', '15-16', '16-17', '17-18', '18-19', '19-20', '20-21'],
              datasets: [{
                label: 'goals received between 61\' and 75\'',
                data: [res[0], res[1], res[2], res[3], res[4], res[5], res[6], res[7]],
                backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
                borderColor: 'rgb(252, 3, 53)',// array should have same number of elements as number of dataset
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }
          });
        }
      );

    }
    createReceivedLineChart5()
    {
      this.http.get('http://127.0.0.1:8105/getReceivedGoalsInPeriod/?period=5').subscribe(
        (res: any)=>{
          this.rLine5 = new Chart(this.receivedLineCanvas5.nativeElement, {
            type: 'line',
            data: {
              labels: ['13-14', '14-15', '15-16', '16-17', '17-18', '18-19', '19-20', '20-21'],
              datasets: [{
                label: 'goals received between 76\' and 90\'',
                data: [res[0], res[1], res[2], res[3], res[4], res[5], res[6], res[7]],
                backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
                borderColor: 'rgb(252, 3, 53)',// array should have same number of elements as number of dataset
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }
          });
        }
      );

    }
    onModeChange(event: CustomEvent<SegmentChangeEventDetail>)
  {
    this.mode = event.detail.value;
    if(this.mode === 'Compare')
    {
    this.createScoredLineChart0();
    this.createScoredLineChart1();
    this.createScoredLineChart2();
    this.createScoredLineChart3();
    this.createScoredLineChart4();
    this.createScoredLineChart5();

    this.createReceivedLineChart0();
    this.createReceivedLineChart1();
    this.createReceivedLineChart2();
    this.createReceivedLineChart3();
    this.createReceivedLineChart4();
    this.createReceivedLineChart5();
    }
    if(this.mode === 'Scored')
    {
    this.createScoredLineChart0();
    this.createScoredLineChart1();
    this.createScoredLineChart2();
    this.createScoredLineChart3();
    this.createScoredLineChart4();
    this.createScoredLineChart5();
    }
    if(this.mode === 'Received')
    {
    this.createReceivedLineChart0();
    this.createReceivedLineChart1();
    this.createReceivedLineChart2();
    this.createReceivedLineChart3();
    this.createReceivedLineChart4();
    this.createReceivedLineChart5();
    }
  }
  backButton()
  {
    this.navCtrl.navigateBack(['/','places']);
  }
}
