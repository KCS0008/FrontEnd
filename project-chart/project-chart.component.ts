import { Component, OnInit } from '@angular/core';

// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4charts from "@amcharts/amcharts4/charts";
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";

// am4core.useTheme(am4themes_animated);
@Component({
  selector: 'app-project-chart',
  templateUrl: './project-chart.component.html',
  styleUrls: ['./project-chart.component.css']
})
export class ProjectChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
//   private chart:any;
//   private score:any;



//   ngAfterViewInit() {
//     // Create chart instance
//     this.chart = am4core.create("chartdiv", am4charts.RadarChart);

//     // Add data
//     this.chart.data = [
//       {
//         category: "Job Satisfaction",
//         value: null
//       },
//       {
//         category: "Salary Satisfaction",
//         value: null
//       },
//       {
//         category: "Work Environment",
//         value: null
//       },
//       {
//         category: "Career Progression",
//         value: null
//       }
//     ]

//     // Make chart not full circle
//     this.chart.startAngle = -90;
//     this.chart.endAngle = 180;

//     // Set number format
//     this.chart.numberFormatter.numberFormat = "#.#'%'";

//     // Create axes
//     let categoryAxis = this.chart.yAxes.push(new am4charts.CategoryAxis());
//     categoryAxis.dataFields.category = "category";
//     categoryAxis.renderer.grid.template.location = 0;
//     categoryAxis.renderer.grid.template.strokeOpacity = 0;
//     categoryAxis.renderer.labels.template.horizontalCenter = "right";
//     categoryAxis.renderer.labels.template.fontWeight = 500;
//     categoryAxis.renderer.labels.template.adapter.add("fill", function(fill:any, target:any) {
//       return (target.dataItem.index >= 0) ? am4core.color("#000") : fill;
//     });
//     categoryAxis.renderer.minGridDistance = 10;

//     let valueAxis = this.chart.xAxes.push(new am4charts.ValueAxis());
//     valueAxis.renderer.grid.template.strokeOpacity = 0;
//     valueAxis.min = 0;
//     valueAxis.max = 100;
//     valueAxis.strictMinMax = true;

//     // Create series
//     let series = this.chart.series.push(new am4charts.RadarColumnSeries());
//     series.dataFields.valueX = "value";
//     series.dataFields.categoryY = "category";
//     series.clustered = false;
//     series.columns.template.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
//     series.columns.template.fillOpacity = 0.08;
//     series.columns.template.cornerRadiusTopLeft = 20;
//     series.columns.template.strokeWidth = 0;
//     series.columns.template.radarColumn.cornerRadius = 20;

//     // Add cursor
//     this.chart.cursor = new am4charts.RadarCursor();
//   }

//   updateData() {
//     // Get value from radio button
//     this.score = +(<HTMLInputElement>document.querySelector('input[name="question1"]:checked')).value

//     // Update chart
//     this.chart.data = [
//       {
//         category: "Job Satisfaction",
//         value: this.score
//       },
//       {
//         category: "Salary Satisfaction",
//         value: null
//       },
//       {
//         category: "Work Environment",
//         value: null
//       },
//       {
//         category: "Career Progression",
//         value: null
//       }
//     ]
//   }

//   ngOnDestroy() {
//     this.chart.dispose();
//   }
}
