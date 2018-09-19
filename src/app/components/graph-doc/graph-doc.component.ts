import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
    selector: 'app-graph-doc',
    templateUrl: './graph-doc.component.html'
})

export class GraphDocComponent implements OnInit{
  ngOnInit(): void {
    if(this.doughnutChartData[1] > 500){
      this.isNeeded = true;
    }
  }
    constructor(private router: Router, 
      private route: ActivatedRoute) {}

      public doughnutChartLabels:string[] = ['No Compatible', 'Compatible'];
      public doughnutChartData:number[] = [50, 350];
      public doughnutChartType:string = 'doughnut';
      public isNeeded: boolean;
     
      // events
      public chartClicked(e:any):void {
        console.log(e);
      }
     
      public chartHovered(e:any):void {
        console.log(e);
      }

      begin() {
        this.router.navigate(['../'],{relativeTo: this.route})
    }

}
