import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChoisenComponent } from './choisen.component';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [CommonModule],
    declarations: [ChoisenComponent],
    exports: [ChoisenComponent]
})



export class ChoisenModule { }
