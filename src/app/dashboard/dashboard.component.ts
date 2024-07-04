import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // Example statistics
  totalUsers: number = 1000;
  activeUsers: number = 850;
  totalSales: number = 15000;
  totalRevenue: number = 120000;

  // Data for the chart
  single: any[] = [
    {
      "name": "January",
      "value": 65
    },
    {
      "name": "February",
      "value": 59
    },
    {
      "name": "March",
      "value": 80
    },
    {
      "name": "April",
      "value": 81
    },
    {
      "name": "May",
      "value": 56
    },
    {
      "name": "June",
      "value": 55
    },
    {
      "name": "July",
      "value": 40
    }
  ];

  // Define view as a tuple of two numbers
  view: [number, number] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Month';
  showYAxisLabel = true;
  yAxisLabel = 'Value';

  // Define a custom color scheme
  colorScheme: Color = {
    name: 'custom',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() { }

  ngOnInit(): void {
    // Initialization logic here
  }
}

