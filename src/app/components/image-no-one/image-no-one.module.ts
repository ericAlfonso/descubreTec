import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageNoOneComponent } from './image-no-one.component';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [CommonModule],
    declarations: [ImageNoOneComponent],
    exports: [ImageNoOneComponent]
})



export class ImageNoOneModule { }
