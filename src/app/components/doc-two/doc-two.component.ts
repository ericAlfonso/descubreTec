import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
    selector: 'app-image-two',
    templateUrl: './doc-two.component.html'
})

export class DocTwoComponent {
    constructor(private router: Router, 
      private route: ActivatedRoute) {}

      finish() {
      this.router.navigate(['../graph-doc'],{relativeTo: this.route})
  }

}
