import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
    selector: 'app-image-no-one',
    templateUrl: './image-no-one.component.html'
})

export class ImageNoOneComponent {
    constructor(private router: Router, 
      private route: ActivatedRoute) {}

    goSelection() {
      this.router.navigate(['../graph-no'],{relativeTo: this.route})
  }

}
