import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphDocComponent } from './graph-doc.component';
import {RouterModule} from '@angular/router';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    imports: [CommonModule, ChartsModule],
    declarations: [GraphDocComponent],
    exports: [GraphDocComponent]
})



export class GraphDocModule { }
