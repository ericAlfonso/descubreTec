import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html'
})

export class WelcomeComponent {
    constructor(private router: Router, 
      private route: ActivatedRoute) {}

    goSelection() {
      this.router.navigate(['../choisen'],{relativeTo: this.route})
  }
}
