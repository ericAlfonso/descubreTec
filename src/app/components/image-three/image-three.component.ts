import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
    selector: 'app-image-three',
    templateUrl: './image-three.component.html'
})

export class ImageThreeComponent {
    constructor(private router: Router, 
      private route: ActivatedRoute) {}

    goWrite() {
      this.router.navigate(['../write'],{relativeTo: this.route})
  }

}
