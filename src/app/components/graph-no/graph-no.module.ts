import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphNoComponent } from './graph-no.component';
import {RouterModule} from '@angular/router';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    imports: [CommonModule, ChartsModule],
    declarations: [GraphNoComponent],
    exports: [GraphNoComponent]
})



export class GraphNoModule { }
