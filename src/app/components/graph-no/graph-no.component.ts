import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
    selector: 'app-graph-no',
    templateUrl: './graph-no.component.html'
})

export class GraphNoComponent implements OnInit{
  ngOnInit(): void {
    if(this.doughnutChartData[0] > 500){
      this.isNeeded = true;
    }
  }
    constructor(private router: Router, 
      private route: ActivatedRoute) {}

      public doughnutChartLabels:string[] = ['No Compatible', 'Compatible'];
      public doughnutChartData:number[] = [600, 350];
      public doughnutChartType:string = 'doughnut';
      public isNeeded: boolean;
     
      // events
      public chartClicked(e:any):void {
        console.log(e);
      }
     
      public chartHovered(e:any):void {
        console.log(e);
      }

    goWrite() {
      this.router.navigate(['../welcome'],{relativeTo: this.route})
  }

}
