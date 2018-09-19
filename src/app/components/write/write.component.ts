import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
    selector: 'app-image-three',
    templateUrl: './write.component.html'
})

export class WriteComponent {
    constructor(private router: Router, 
      private route: ActivatedRoute) {}

      finish() {
      this.router.navigate(['../graph'],{relativeTo: this.route})
  }

}
