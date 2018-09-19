import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
    selector: 'app-image-two',
    templateUrl: './image-two.component.html'
})

export class ImageTwoComponent {
    constructor(private router: Router, 
      private route: ActivatedRoute) {}

    goSelection() {
      this.router.navigate(['../image-three'],{relativeTo: this.route})
  }

}
