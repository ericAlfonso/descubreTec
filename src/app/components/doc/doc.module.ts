import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocComponent } from './doc.component';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [CommonModule],
    declarations: [DocComponent],
    exports: [DocComponent]
})



export class DocModule { }
