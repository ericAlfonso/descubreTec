import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
    selector: 'app-choisen',
    templateUrl: './choisen.component.html'
})

export class ChoisenComponent {
    constructor(private router: Router, 
      private route: ActivatedRoute) {}

  isLaboratoryTaken:boolean;

  goProgrammer() {
      this.router.navigate(['../programmer'],{relativeTo: this.route})
}
goDoc() {
    this.router.navigate(['../doc'],{relativeTo: this.route})
}

goImageNo(){
    this.router.navigate(['../image-no-one'],{relativeTo: this.route})
}

}
