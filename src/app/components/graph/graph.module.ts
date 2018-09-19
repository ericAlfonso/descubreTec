import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphComponent } from './graph.component';
import {RouterModule} from '@angular/router';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    imports: [CommonModule, ChartsModule],
    declarations: [GraphComponent],
    exports: [GraphComponent]
})



export class GraphModule { }
