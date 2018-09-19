import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocTwoComponent } from './doc-two.component';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [CommonModule],
    declarations: [DocTwoComponent],
    exports: [DocTwoComponent]
})



export class DocTwoModule { }
