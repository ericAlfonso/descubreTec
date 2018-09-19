import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
    selector: 'app-programmer',
    templateUrl: './programmer.component.html'
})

export class ProgrammerComponent {
    constructor(private router: Router, 
      private route: ActivatedRoute) {}

    goSelection() {
      this.router.navigate(['../image-two'],{relativeTo: this.route})
  }

}
