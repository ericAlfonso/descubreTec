import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
    selector: 'app-doc',
    templateUrl: './doc.component.html'
})

export class DocComponent {
    constructor(private router: Router, 
      private route: ActivatedRoute) {}

    goSelection() {
      this.router.navigate(['../doc-two'],{relativeTo: this.route})
  }

}
